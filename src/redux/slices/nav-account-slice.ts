import { createSlice } from "@reduxjs/toolkit";

type NavAccountStateType = {
    contentBlock: string | undefined;
};

const initialState: NavAccountStateType = {
    contentBlock: undefined,
};

const navAccountSlice = createSlice({
    name: "navAccount",
    initialState,
    reducers: {
        setContentBlock: (state, action) => {
            state.contentBlock = action.payload;
        },
    },
});

export const { setContentBlock } = navAccountSlice.actions;

export default navAccountSlice.reducer;
