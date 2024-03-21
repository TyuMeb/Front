import React, { ChangeEvent, Dispatch, InputHTMLAttributes, SetStateAction } from "react";

import { FileInput } from "@src/shared/ui/inputs";
import { checkMaxSizeFiles } from "@src/helpers";
import { randomKey } from "@src/helpers";
import { useUploadFileMutation } from "@src/redux/api/files-api-slice";
import { addFiles } from "@src/redux/slices/files-slice";
import { useAppDispatch } from "@src/redux/hooks";
import { FilePreview, FilesPreviewList } from "@src/shared/types/files.types";

export type FileInputProps = {
  maxSizeImage?: number;
  maxSizeFile?: number;
  maxCountFiles?: number;
  setFilesPreview: Dispatch<SetStateAction<FilePreview[] | []>>;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputPreviewFiles = (props: FileInputProps) => {
  const {
    children,
    multiple = false,
    disabled = false,
    maxCountFiles,
    maxSizeImage,
    maxSizeFile,
    setFilesPreview,
    name,
    ...restProps
  } = props;

  const [uploadFile] = useUploadFileMutation();

  const dispatch = useAppDispatch();

  const saveFiles = (data: FilePreview) => {
    if (data.error) {
      setFilesPreview((prevValue) => {
        const newArray = [...prevValue];
        newArray.push(data);
        if (maxCountFiles && newArray.length > maxCountFiles) {
          return newArray.slice(0, maxCountFiles);
        }
        return newArray;
      });
    }

    if (!data.error && multiple) {
      setFilesPreview((prevValue) => {
        const newArray = [...prevValue];
        newArray.push(data);
        if (maxCountFiles && newArray.length > maxCountFiles) {
          return newArray.slice(0, maxCountFiles);
        }
        return newArray;
      });
    }

    if (!data.error && !multiple) {
      setFilesPreview([data]);
    }
  };

  const changeHandlerFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;

    if (target.files) {
      const files = Array.from(target.files);

      if (!files.length) {
        return;
      }

      const formFiles = new FormData();

      const fileList = [] as FilesPreviewList[];
      files.forEach((file) => {
        formFiles.append("upload_file", file);

        const fileData = {
          id: randomKey(),
          error: false,
          type: "image",
          name: file.name.split(".")[0].toUpperCase(),
          size: file.size,
          url: "",
          typeName: file.name.split(".").slice(-1)[0].toUpperCase(),
          file: file,
        } as FilePreview;

        fileData.error = !checkMaxSizeFiles({ file, maxSizeImage, maxSizeFile });

        fileList.push({ id: fileData.id, file, error: fileData.error });

        if (!file.type.match("image")) {
          fileData.type = "file";

          saveFiles(fileData);
        }

        if (file.type.match("image")) {
          const reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = (event) => {
            fileData.url = event.target?.result?.toString() || "";
            saveFiles(fileData);
          };

          reader.onerror = () => {
            fileData.error = true;

            saveFiles(fileData);
          };
        }
      });

      // TODO обработать ошибку
      uploadFile(formFiles)
        .unwrap()
        .then((files) => {
          dispatch(addFiles(files));
        });

      target.value = "";
    }
  };

  return (
    <FileInput disabled={disabled} multiple={multiple} onChange={changeHandlerFiles} {...restProps}>
      {children}
    </FileInput>
  );
};
