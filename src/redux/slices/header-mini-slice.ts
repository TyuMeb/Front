import { createSlice } from "@reduxjs/toolkit";

interface IHeaderMiniState {
    contentBlock: string | undefined;
}

const initialState: IHeaderMiniState = {
    contentBlock: undefined,
};

const headerMiniSlice = createSlice({
    name: "header-mini",
    initialState,
    reducers: {
        setContentBlock: (state, action) => {
            state.contentBlock = action.payload;
        },
    },
});

export const { setContentBlock } = headerMiniSlice.actions;

export default headerMiniSlice.reducer;
