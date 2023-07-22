import { marketplaceApi } from "./marketplace-api";

export const usersApi = marketplaceApi.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => "auth/users/",
        }),
        getUserMe: build.query({
            query: (id) => "auth/users/me/",
        }),
        getUserById: build.query({
            query: (postId) => `posts/${postId}`,
        }),
    }),
});

export const { useGetUsersQuery, useGetUserMeQuery, useGetUserByIdQuery } = usersApi;
