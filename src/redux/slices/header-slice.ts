import { createSlice } from "@reduxjs/toolkit";

type HeaderStateT = {
    contentBlock: string | undefined;
};

const initialState: HeaderStateT = {
    contentBlock: undefined,
};

const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
        setContentBlock: (state, action) => {
            state.contentBlock = action.payload;
        },
    },
});

export const { setContentBlock } = headerSlice.actions;

export default headerSlice.reducer;
