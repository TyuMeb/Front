import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TypeModal =
  | "signIn"
  | "registration"
  | "resetPassword"
  | "resetPasswordConfirm"
  | "chooseThisProducer"
  | "confirm"
  | "getContact";

type ModalState = {
  modal: boolean;
  typeModal: TypeModal;
};

const initialState: ModalState = {
  modal: false,
  typeModal: "signIn",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    closeModal: () => initialState,
    openModal: (state, action: PayloadAction<TypeModal | undefined>) => {
      state.modal = true;
      if (action.payload) {
        state.typeModal = action.payload;
      }
    },
    setTypeModal: (state, action: PayloadAction<TypeModal>) => {
      state.modal = true;
      state.typeModal = action.payload;
    },
  },
});

export const { closeModal, openModal, setTypeModal } = modalSlice.actions;

export default modalSlice.reducer;
