import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type emailResetConfirmType = { uid: string; token: string };

type passwordResetConfirmType = { uid: string; token: string };

interface IQueryParams {
    emailChangeConfirm: emailResetConfirmType | null;
    passwordResetConfirm: passwordResetConfirmType | null;
}

const initialState: IQueryParams = {
    emailChangeConfirm: null,
    passwordResetConfirm: null,
};

const queryParamsSlice = createSlice({
    name: "query",
    initialState,
    reducers: {
        setEmailResetConfirm: (state, action: PayloadAction<emailResetConfirmType>) => {
            state.emailChangeConfirm = action.payload;
        },
        setPasswordResetConfirm: (state, action: PayloadAction<passwordResetConfirmType>) => {
            state.passwordResetConfirm = action.payload;
        },
    },
});

export const { setEmailResetConfirm, setPasswordResetConfirm } = queryParamsSlice.actions;

export default queryParamsSlice.reducer;
