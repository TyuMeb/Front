import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
    id: number;
    name: string;
    email: string;
    person_telephone: string;
}

interface IUserState {
    users: IUser[] | null;
    usersMe: IUser | null;
    usersId: IUser | null;
}

const initialState: IUserState = {
    users: null,
    usersMe: null,
    usersId: null,
};

export const userSlice = createSlice({
    initialState,
    name: "user-slice",
    reducers: {
        saveUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        },
        saveUsersMe: (state, action: PayloadAction<IUser>) => {
            state.usersMe = action.payload;
        },
        saveUsersId: (state, action: PayloadAction<IUser>) => {
            state.usersId = action.payload;
        },
    },
});

export default userSlice.reducer;

export const {} = userSlice.actions;
