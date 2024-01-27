import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Chat } from "../api/generated";

type ChatState = {
    chats: Chat[] | null;
};

const initialState: ChatState = {
    chats: null,
};

const chatSlice = createSlice({
    name: "chat-slice",
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<Chat[] | null>) => {
            console.log(state);
            console.log(action);
            state.chats = action.payload;
        },
    },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
