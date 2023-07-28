import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
    id: number;
    name: string;
    email: string;
    person_telephone: string;
}

interface IUserState {
    user: IUser | null;
}

const initialState: IUserState = {
    user: null,
};

export const userSlice = createSlice({
    initialState,
    name: "user-slice",
    reducers: {
        logout: () => initialState,
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
    },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
