import { createSlice } from "@reduxjs/toolkit";

interface IHeaderAccountState {
    contentBlock: string | undefined;
}

const initialState: IHeaderAccountState = {
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
