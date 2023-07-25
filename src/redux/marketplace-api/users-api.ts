import { marketplaceApi } from "./marketplace-api";
import { IUser } from "./types";

const usersApi = marketplaceApi.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => "auth/users/",
            // transformResponse: (result: { data: { user: IUser } }) =>
            //     result.data,
        }),
        getMe: build.query({
            query: () => "auth/users/me/",
        }),
        getUserById: build.query({
            query: (postId) => `posts/${postId}`,
        }),
    }),
});

export const { useGetUsersQuery, useGetMeQuery, useGetUserByIdQuery } = usersApi;
