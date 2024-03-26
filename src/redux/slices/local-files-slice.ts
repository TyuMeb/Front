import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";
import { FilePreview, FileType } from "@src/shared/types/files.types";
import { addToLocalStorage } from "@src/shared/lib/local-storage/add-to-local-storage";
import { removeFromLocalStorage } from "@src/shared/lib/local-storage/remove-from-local-storage";
import { resetFilesFromLocalStorage } from "@src/shared/lib/local-storage/reset-files-from-local-storage";
import { getFromLocalStorage } from "@src/shared/lib/local-storage/get-from-local-storage";
import { fileConversion } from "@src/shared/lib/file-conversion";

type FileState = {
  files: FilePreview[] | [];
};

const initialState: FileState = {
  files: getFromLocalStorage("contactSupportForm", "files"),
};

const localFilesSlice = createSlice({
  name: "localFilesSlice",
  initialState,
  reducers: {
    addFiles: (state, action: PayloadAction<FileType[]>) => {
      const files = fileConversion(action.payload);
      if (files) state.files = addToLocalStorage(files, "contactSupportForm", "files");
    },
    removeFile: (state, action: PayloadAction<string>) => {
      state.files = removeFromLocalStorage(action.payload, "contactSupportForm", "files");
    },
    resetFiles: (state) => {
      state.files = resetFilesFromLocalStorage("contactSupportForm", "files");
    },
  },
});

export const { addFiles, removeFile, resetFiles } = localFilesSlice.actions;

export const useFiles = () => useAppSelector((store) => store.localFiles.files);

export const localFilesReducer = localFilesSlice.reducer;
