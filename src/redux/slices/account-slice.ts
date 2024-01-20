import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
  selectedPerformer: boolean;
};

const initialState: ModalState = {
  selectedPerformer: false,
};

const modalSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setSelectedPerformer: (state) => {
      state.selectedPerformer = true;
    },
  },
});

export const { setSelectedPerformer } = modalSlice.actions;

export default modalSlice.reducer;
