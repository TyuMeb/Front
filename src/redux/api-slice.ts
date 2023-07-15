import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts?_limit=10",
        }),
        getPostsId: builder.query({
            query: (postId) => `/posts/${postId}`,
        }),
        addNewPost: builder.mutation({
            query: (initialPost) => ({
                url: "/posts",
                method: "POST",
                body: initialPost,
            }),
        }),
    }),
});
export const { useGetPostsQuery, useGetPostsIdQuery, useAddNewPostMutation } = apiSlice;
