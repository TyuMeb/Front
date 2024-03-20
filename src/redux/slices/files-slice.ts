import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";

export type Files = {
  id?: string;
  original_name: string;
  file_size: number;
  preview_url?: string;
};

type FileState = {
  files: Files[];
};

const initialState: FileState = {
  files: [],
};

const filesSlice = createSlice({
  name: "filesSlice",
  initialState,
  reducers: {
    addFiles: (state, action: PayloadAction<Files[]>) => {
      state.files = state.files.concat(action.payload);
      console.log(state.files);
    },
  },
});

export const { addFiles } = filesSlice.actions;

export const useFiles = () => useAppSelector((store) => store.files);

export const filesReducer = filesSlice.reducer;
