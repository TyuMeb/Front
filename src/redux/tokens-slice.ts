import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setCookie, deleteCookie, getCookie } from "@src/helpers/cookie";

interface ITokensState {
    name: string | null;
    jwtToken: string | null;
    resetToken: string | null;
}

const initialState: ITokensState = {
    name: null,
    jwtToken: getCookie("jwtToken"),
    resetToken: localStorage.getItem("refreshToken"),
};

const tokensSlice = createSlice({
    name: "tokens",
    initialState,
    reducers: {
        sigIn: (_, action: PayloadAction<{ jwtToken: string; refreshToken: string }>) => {
            setCookie("jwtToken", action.payload.jwtToken);
            localStorage.setItem("refreshToken", action.payload.refreshToken);
        },
        logout: () => {
            deleteCookie("jwtToken");
            localStorage.removeItem("refreshToken");
        },
    },
});

export const { sigIn, logout } = tokensSlice.actions;

export default tokensSlice.reducer;
