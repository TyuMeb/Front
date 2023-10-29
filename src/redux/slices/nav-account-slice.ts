import { createSlice } from "@reduxjs/toolkit";

interface INavAccountState {
    contentBlock: string | undefined;
}

const initialState: INavAccountState = {
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
