import { createSlice } from "@reduxjs/toolkit";

interface IModalState {
    modal: boolean;
}

const initialState: IModalState = {
    modal: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        closeModal: () => initialState,
        openModal: (state) => {
            state.modal = true;
        },
    },
});

export const { closeModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;
