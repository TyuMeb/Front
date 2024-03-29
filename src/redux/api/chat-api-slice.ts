import { apiSlice } from "./api-slice";
import { Chat } from "./generated";

const chatApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getChats: build.query<Chat[], void>({
      query: () => ({
        url: "/chats/",
        method: "GET",
      }),
    }),
    createChat: build.mutation({
      query: (body: Chat) => ({
        url: "/chats/",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useGetChatsQuery, useCreateChatMutation } = chatApi;
