export interface DeleteFile {
  file_id: string;
}

export type FileType = {
  id?: string;
  original_name: string;
  file_size: number;
  preview_url?: string;
};

export type FilePreview = {
  id: string;
  error: boolean;
  type: "image" | "file";
  typeName: string;
  url: string;
  name: string;
  size: number;
  file: File;
};

export type FilesPreviewList = {
  file: File;
  id: string;
  error: boolean;
};
