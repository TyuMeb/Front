import { FilesPreviewList } from "@src/shared/types/files.types";

export const getFiles = (filesList: FilesPreviewList[]) => {
  const files = [] as { id: string; file: File }[];

  filesList.forEach((file) => {
    if (!file.error) {
      files.push({ id: file.id, file: file.file });
    }
  });

  return files;
};
