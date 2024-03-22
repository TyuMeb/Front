import { FileType } from "../types/files.types";

export const saveToLocalStorage = (files: FileType[], name: string, key: string) => {
  const contactSupportForm = localStorage.getItem(name);

  if (contactSupportForm) {
    const newFiles = JSON.parse(contactSupportForm).files;
    newFiles.push(...files);
    localStorage.setItem(name, JSON.stringify({ [key]: newFiles }));
    return;
  } else {
    localStorage.setItem(name, JSON.stringify({ [key]: files }));
  }
};
