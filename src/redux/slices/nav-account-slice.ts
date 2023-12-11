import { createSlice } from "@reduxjs/toolkit";

type NavAccountStateProps = {
    contentBlock: string | undefined;
};

const initialState: NavAccountStateProps = {
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
