import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TypeNotify = "default" | "success" | "error";

type Notify = {
  name: string;
  type?: TypeNotify;
  text?: string;
  delay?: number | false;
};

type NotifyState = {
  createdModal: Notify[];
};

const initialState: NotifyState = {
  createdModal: [],
};

const notifyModalSlice = createSlice({
  name: "notifyModal",
  initialState,
  reducers: {
    createNotifyModal: (state, action: PayloadAction<Notify>) => {
      const { name, ...data } = action.payload;
      state.createdModal.push({ name: `${name + state.createdModal.length}`, ...data });
    },
    closeModal: (state, action: PayloadAction<string>) => {
      state.createdModal = state.createdModal.filter((item) => item.name !== action.payload);
    },
  },
});

export const { createNotifyModal, closeModal } = notifyModalSlice.actions;

export default notifyModalSlice.reducer;
