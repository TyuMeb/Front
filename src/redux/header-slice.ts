import { createSlice } from "@reduxjs/toolkit";

interface IHeaderState {
    contentBlock: string | undefined;
}

const initialState: IHeaderState = {
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
