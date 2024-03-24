import { getFromLocalStorage } from "./get-from-local-storage";

export const resetFilesFromLocalStorage = (name: string, key: string) => {
  localStorage.removeItem(name);
  return getFromLocalStorage(name, key);
};
