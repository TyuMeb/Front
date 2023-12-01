import { createSlice } from "@reduxjs/toolkit";

type HeaderAccountStateT = {
    contentBlock: string | undefined;
};

const initialState: HeaderAccountStateT = {
    contentBlock: undefined,
};

const headerAccountSlice = createSlice({
    name: "header-account",
    initialState,
    reducers: {
        setContentBlock: (state, action) => {
            state.contentBlock = action.payload;
        },
    },
});

export const { setContentBlock } = headerAccountSlice.actions;

export default headerAccountSlice.reducer;
