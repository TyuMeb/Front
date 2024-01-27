export type FilesPreview = {
  id: string;
  error: boolean;
  type: "image" | "file";
  typeName: string;
  url: string;
  name: string;
  size: number;
  file: File;
};

export type FilesList = {
  file: File;
  id: string;
  error: boolean;
};
