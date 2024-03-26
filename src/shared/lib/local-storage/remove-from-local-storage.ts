import { getFromLocalStorage } from "./get-from-local-storage";

export const removeFromLocalStorage = (id: string, name: string, key: string) => {
  const files = getFromLocalStorage(name, key);
  if (files) {
    const newFiles = files.filter((file) => file.id !== id);
    localStorage.setItem(name, JSON.stringify({ [key]: newFiles }));
  }

  return getFromLocalStorage(name, key);
};
