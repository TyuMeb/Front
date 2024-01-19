import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserAccount } from "../api/generated";
import { useAppSelector } from "../hooks";

type UserState = {
    users: UserAccount[] | null;
    user: UserAccount | null;
    usersId: UserAccount | null;
    authorizing: boolean;
};

const initialState: UserState = {
    users: null,
    user: null,
    usersId: null,
    authorizing: true,
};

export const userSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
        saveUsers: (state, action: PayloadAction<UserAccount[]>) => {
            state.users = action.payload;
        },
        setUser: (state, action: PayloadAction<UserAccount | null>) => {
            state.user = action.payload;
        },
        setAuthorizing: (state, action: PayloadAction<boolean>) => {
            state.authorizing = action.payload;
        },
        saveUsersId: (state, action: PayloadAction<UserAccount>) => {
            state.usersId = action.payload;
        },
    },
});

export const { setUser, setAuthorizing } = userSlice.actions;

export const useUser = () => useAppSelector((store) => store.user.user);

export const userReducer = userSlice.reducer;
