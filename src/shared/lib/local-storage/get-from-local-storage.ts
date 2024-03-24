import { FileType } from "@src/shared/types/files.types";

export const getFromLocalStorage = (name: string, key: string): FileType[] | [] => {
  const item = typeof window !== "undefined" ? localStorage.getItem(name) : false;
  if (item) {
    const files = JSON.parse(item)?.[key] || [];
    return files;
  }
  return [];
};
