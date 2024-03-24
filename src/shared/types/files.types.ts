export interface DeleteFile {
  file_id: string;
}

export type FileType = {
  id: string;
  original_name: string;
  file_size: number;
  preview_url?: string;
};

export type FilePreview = {
  id: string;
  name: string;
  error: boolean;
  previewUrl: string | null;
  file: File;
};

export type FilesPreviewList = {
  file: File;
  id: string;
  error: boolean;
};
