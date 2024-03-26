import { FilePreview } from "@src/shared/types/files.types";
import { ChangeEvent, useState } from "react";
import { exceedsMaximumSize, randomKey } from "@src/helpers";
import { isTypeResolved } from "@src/shared/lib/is-type-resolved";
import { useFiles } from "@src/redux/slices/local-files-slice";

export type FileInputProps = {
  accept?: string;
  maxSizeImage?: number;
  maxSizeFile?: number;
  maxCountFiles?: number;
  multiple?: boolean;
};

export function usePreviewFiles({ accept, maxSizeImage, maxSizeFile, maxCountFiles, multiple }: FileInputProps) {
  const [filesPreview, setFilesPreview] = useState<FilePreview[] | []>([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const localFiles = useFiles();

  const removeFileById = (id: string) => {
    setFilesPreview((prevFiles) => {
      const newFile = prevFiles.filter((file) => file.id !== id);
      return newFile;
    });
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
        name: file.name,
        previewUrl: null,
        file: file,
        fileSize: file.size,
      } as FilePreview;

      const typeName = file.name.split(".").slice(-1)[0].toUpperCase();
      const typeResolved = accept ? !isTypeResolved(file, accept, typeName) : false;
      if (typeResolved) {
        return;
      }

      const exceedsMaximum = maxCountFiles ? filesPreview.length >= maxCountFiles : false;
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
    removeFileById,
    setFilesPreview,
  };
}
