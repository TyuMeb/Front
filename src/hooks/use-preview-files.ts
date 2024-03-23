import { FilePreview } from "@src/shared/types/files.types";
import { ChangeEvent, useEffect, useState } from "react";
import { exceedsMaximumSize } from "@src/helpers";
import { useUploadFileMutation } from "@src/redux/api/files-api-slice";
import { useAppDispatch } from "@src/redux/hooks";
import { createNotifyModal } from "@src/redux/slices/notify-modal-slice";
import { resetFiles as clearFiles } from "@src/redux/slices/files-slice";
import { isTypeResolved } from "@src/shared/lib/is-type-resolved";
import { saveToLocalStorage } from "@src/shared/lib/save-to-local-storage";

export type FileInputProps = {
  accept?: string;
  maxSizeImage?: number;
  maxSizeFile?: number;
  maxCountFiles?: number;
  multiple?: boolean;
};

export function usePreviewFiles({ accept, maxSizeImage, maxSizeFile, maxCountFiles, multiple }: FileInputProps) {
  const [filesErrorPreview, setFilesErrorPreview] = useState<FilePreview[] | []>([]);
  const [uploadFile] = useUploadFileMutation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (filesErrorPreview.length) {
      const formFiles = new FormData();

      filesErrorPreview.forEach((file) => {
        if (file.error) return;
        formFiles.append("upload_file", file.file);
      });

      if (!formFiles.get("upload_file")) {
        return;
      }

      uploadFile(formFiles)
        .unwrap()
        .then((files) => {
          saveToLocalStorage(files, "contactSupportForm", "files");
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
  }, [filesErrorPreview]);

  const resetFiles = () => {
    setFilesErrorPreview([]);
    dispatch(clearFiles());
  };

  const saveFiles = (data: FilePreview) => {
    console.log(data);
    if (multiple) {
      setFilesErrorPreview((prevValue) => {
        const newArray = [...prevValue];
        newArray.push(data);
        return newArray.slice(0, maxCountFiles);
      });
      return;
    }

    setFilesErrorPreview([data]);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files?.length) {
      return;
    }

    Array.from(files).forEach((file) => {
      const fileData = {
        // id: randomKey(),
        error: false,
        // type: "image",
        // name: file.name.split(".")[0].toLowerCase(),
        // size: file.size,
        // typeName: file.name.split(".").slice(-1)[0].toUpperCase(),
        preview_url: null,
        file: file,
      } as FilePreview;

      const typeName = file.name.split(".").slice(-1)[0].toUpperCase();
      const typeResolved = accept ? !isTypeResolved(file, accept, typeName) : false;
      if (typeResolved) {
        return;
      }

      const exceedsMaximum = maxCountFiles ? filesErrorPreview.length >= maxCountFiles : false;
      if (exceedsMaximum) {
        return;
      }

      if (maxSizeImage || maxSizeFile) {
        if (exceedsMaximumSize({ file, maxSizeImage, maxSizeFile })) return;
      }

      if (!file.type.match("image")) {
        saveFiles(fileData);
      }

      if (file.type.match("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (event) => {
          fileData.preview_url = event.target?.result?.toString() || "";
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
    filesErrorPreview,
    onChange,
    resetFiles,
  };
}
