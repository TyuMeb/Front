import { FilePreview } from "@src/shared/types/files.types";
import { getFromLocalStorage } from "./get-from-local-storage";

export const addToLocalStorage = (files: FilePreview[], name: string, key: string) => {
  const contactSupportForm = localStorage.getItem(name);

  if (contactSupportForm) {
    const newFiles = JSON.parse(contactSupportForm).files;
    newFiles.push(...files);
    localStorage.setItem(name, JSON.stringify({ [key]: newFiles }));
  } else {
    localStorage.setItem(name, JSON.stringify({ [key]: files }));
  }

  return getFromLocalStorage(name, key);
};
