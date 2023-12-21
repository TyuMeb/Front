import { apiSlice } from "./api-slice";
import { Chat } from "./generated";

const chatApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getChats: build.query<Chat[], {}>({
            query: () => ({
                url: "chats/",
                method: "GET",
            }),
        }),
        postChats: build.mutation({
            query: (body: Chat) => ({
                url: "chats/",
                method: "POST",
                body,
            }),
        }),
    }),
});
export const {} = chatApi;
