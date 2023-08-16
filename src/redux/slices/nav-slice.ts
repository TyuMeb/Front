import { createSlice } from "@reduxjs/toolkit";

interface INavState {
    contentBlock: string | undefined;
}

const initialState: INavState = {
    contentBlock: undefined,
};

const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setContentBlock: (state, action) => {
            state.contentBlock = action.payload;
        },
    },
});

export const { setContentBlock } = navSlice.actions;

export default navSlice.reducer;
