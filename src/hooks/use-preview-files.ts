import { FilePreview } from "@src/shared/types/files.types";
import { ChangeEvent, useEffect, useState } from "react";
import { exceedsMaximumSize, randomKey } from "@src/helpers";
import { useUploadFileMutation } from "@src/redux/api/files-api-slice";
import { useAppDispatch } from "@src/redux/hooks";
import { createNotifyModal } from "@src/redux/slices/notify-modal-slice";
import { isTypeResolved } from "@src/shared/lib/is-type-resolved";
import { addFiles, resetFiles as resetLocalFiles, useFiles } from "@src/redux/slices/local-files-slice";

export type FileInputProps = {
  accept?: string;
  maxSizeImage?: number;
  maxSizeFile?: number;
  maxCountFiles?: number;
  multiple?: boolean;
};

export function usePreviewFiles({ accept, maxSizeImage, maxSizeFile, maxCountFiles, multiple }: FileInputProps) {
  const [filesPreview, setFilesPreview] = useState<FilePreview[] | []>([]);
  const [uploadFile] = useUploadFileMutation();

  const dispatch = useAppDispatch();

  const localFiles = useFiles();

  useEffect(() => {
    if (filesPreview.length) {
      const formFiles = new FormData();

      filesPreview.forEach((fileData) => {
        if (fileData.error) return;
        formFiles.append("upload_file", fileData.file);
      });

      if (!formFiles.get("upload_file")) {
        return;
      }

      uploadFile(formFiles)
        .unwrap()
        .then((files) => {
          dispatch(addFiles(files));
          setFilesPreview((prevFiles) => {
            const newFile = prevFiles.filter((file) => file.error);
            return newFile;
          });
        })
        .catch((error) => {
          dispatch(
            createNotifyModal({
              name: "errorUploadFiles",
              type: "error",
              text: error.data?.detail || "Ошибка загрузки файла на сервер",
            })
          );
        });
    }
  }, [filesPreview]);

  const removeFileById = (id: string) => {
    setFilesPreview((prevFiles) => {
      const newFile = prevFiles.filter((file) => file.id !== id);
      return newFile;
    });
  };

  const resetFiles = () => {
    setFilesPreview([]);
    dispatch(resetLocalFiles());
  };

  const saveFiles = (data: FilePreview) => {
    if (multiple) {
      setFilesPreview((prevValue) => {
        const newArray = [...prevValue];
        newArray.push(data);
        return newArray.slice(0, maxCountFiles);
      });
      return;
    }

    setFilesPreview([data]);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files?.length) {
      return;
    }

    Array.from(files).forEach((file) => {
      const fileData = {
        id: randomKey(),
        error: false,
        name: file.name.split(".")[0].toLowerCase(),
        previewUrl: null,
        file: file,
        fileSize: file.size,
      } as FilePreview;

      const typeName = file.name.split(".").slice(-1)[0].toUpperCase();
      const typeResolved = accept ? !isTypeResolved(file, accept, typeName) : false;
      if (typeResolved) {
        return;
      }

      const exceedsMaximum = maxCountFiles ? localFiles.length >= maxCountFiles : false;
      if (exceedsMaximum) {
        return;
      }

      if (maxSizeImage || maxSizeFile) {
        if (exceedsMaximumSize({ file, maxSizeImage, maxSizeFile })) fileData.error = true;
      }

      if (!file.type.match("image")) {
        saveFiles(fileData);
      }

      if (file.type.match("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (event) => {
          fileData.previewUrl = event.target?.result?.toString() || "";
          saveFiles(fileData);
        };

        reader.onerror = () => {
          fileData.error = true;
          saveFiles(fileData);
        };
      }
    });

    e.target.value = "";
  };

  return {
    filesPreview,
    onChange,
    resetFiles,
    removeFileById,
  };
}
