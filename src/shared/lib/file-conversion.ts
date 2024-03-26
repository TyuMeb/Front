import { FilePreview, FileType } from "@src/shared/types/files.types";

export const fileConversion = (files: FileType[]): FilePreview[] | undefined => {
  try {
    return files.map((file) => {
      const { id, original_name: name, file_size: fileSize, preview_url: previewUrl } = file;
      return { id, name, fileSize, previewUrl, error: false };
    });
  } catch (error) {
    console.error("🚀 ~ file: local-files-slice.tsx:24 ~ Неверный формат данных:", error);
  }
};
