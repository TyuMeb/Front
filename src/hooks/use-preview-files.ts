import { FilePreview } from "@src/shared/types/files.types";
import { ChangeEvent, useEffect, useState } from "react";
import { exceedsMaximumSize, randomKey } from "@src/helpers";
import { useUploadFileMutation } from "@src/redux/api/files-api-slice";
import { useAppDispatch } from "@src/redux/hooks";
import { createNotifyModal } from "@src/redux/slices/notify-modal-slice";
import { resetFiles as clearFiles } from "@src/redux/slices/files-slice";

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
          const contactSupportForm = localStorage.getItem("contactSupportForm");
          if (contactSupportForm && Object.hasOwnProperty("files")) {
            const newFiles = JSON.parse(contactSupportForm).files;
            newFiles.push(...files);
            localStorage.setItem("contactSupportForm", JSON.stringify({ files: newFiles }));
            return;
          }
          localStorage.setItem("contactSupportForm", JSON.stringify({ files }));
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

  const isTypeResolved = (file: File, typeName: string) => {
    if (accept) {
      const typesFile = file.type.toLowerCase().split("/");
      const typesAccept = accept.toLocaleLowerCase().split(",");

      const foundType = typesAccept.find((acceptType) => {
        acceptType = acceptType.trim();
        const wasFound = acceptType.includes(typeName.toLocaleLowerCase());
        if (wasFound) return true;

        return typesFile.find((typeFile) => {
          return new RegExp(acceptType).test(typeFile.toLocaleLowerCase());
        });
      });

      return foundType;
    }

    if (maxSizeImage || maxSizeFile) {
      return !exceedsMaximumSize({ file, maxSizeImage, maxSizeFile });
    }

    return false;
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
        type: "image",
        name: file.name.split(".")[0].toLowerCase(),
        size: file.size,
        typeName: file.name.split(".").slice(-1)[0].toUpperCase(),
        file: file,
      } as FilePreview;

      fileData.error = !isTypeResolved(file, fileData.typeName);

      const exceedsMaximum = maxCountFiles ? filesErrorPreview.length >= maxCountFiles : false;
      if (exceedsMaximum) {
        return;
      }

      if (!file.type.match("image")) {
        fileData.type = "file";
        saveFiles(fileData);
      }

      if (file.type.match("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (event) => {
          fileData.image = event.target?.result?.toString() || "";
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
