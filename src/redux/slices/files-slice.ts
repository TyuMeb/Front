import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";
import { FilePreview, FileType } from "@src/shared/types/files.types";

type FileState = {
  files: FileType[];
  filesPreview: FilePreview[];
};

const initialState: FileState = {
  files: [],
  filesPreview: [],
};

const filesSlice = createSlice({
  name: "filesSlice",
  initialState,
  reducers: {
    addFiles: (state, action: PayloadAction<FileType[]>) => {
      state.files = state.files.concat(action.payload);
    },
    addFilePreview: (state, action: PayloadAction<FilePreview[]>) => {
      state.filesPreview = state.filesPreview.concat(action.payload);
    },
    resetFiles: (state) => {
      state.files = [];
      state.filesPreview = [];
    },
  },
});

export const { addFiles, addFilePreview, resetFiles } = filesSlice.actions;

export const useFiles = () => useAppSelector((store) => store.files.files);
export const useFilesPreview = () => useAppSelector((store) => store.files.filesPreview);

export const filesReducer = filesSlice.reducer;
