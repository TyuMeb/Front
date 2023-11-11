import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserAccount } from "../api/generated";

type UserState = {
    users: UserAccount[] | null;
    user: UserAccount | null;
    usersId: UserAccount | null;
};

const initialState: UserState = {
    users: null,
    user: null,
    usersId: null,
};

export const userSlice = createSlice({
    initialState,
    name: "user-slice",
    reducers: {
        saveUsers: (state, action: PayloadAction<UserAccount[]>) => {
            state.users = action.payload;
        },
        setUser: (state, action: PayloadAction<UserAccount | null>) => {
            state.user = action.payload;
        },
        saveUsersId: (state, action: PayloadAction<UserAccount>) => {
            state.usersId = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;
