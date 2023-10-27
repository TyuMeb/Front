import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserAccount } from "../api/generated";

type UserState = {
    users: UserAccount[] | null;
    usersMe: UserAccount | null;
    usersId: UserAccount | null;
};

const initialState: UserState = {
    users: null,
    usersMe: null,
    usersId: null,
};

export const userSlice = createSlice({
    initialState,
    name: "user-slice",
    reducers: {
        saveUsers: (state, action: PayloadAction<UserAccount[]>) => {
            state.users = action.payload;
        },
        saveUsersMe: (state, action: PayloadAction<UserAccount>) => {
            state.usersMe = action.payload;
        },
        saveUsersId: (state, action: PayloadAction<UserAccount>) => {
            state.usersId = action.payload;
        },
    },
});

export const {} = userSlice.actions;
