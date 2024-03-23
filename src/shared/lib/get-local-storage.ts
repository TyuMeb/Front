import { FileType } from "../types/files.types";

export const getLocalStorage = () => {
  const item = typeof window !== "undefined" ? localStorage.getItem("contactSupportForm") : false;
  if (item) {
    const files = JSON.parse(item)?.files as FileType[];
    return files ? files : false;
  }
  return false;
};
