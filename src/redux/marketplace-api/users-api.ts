import { marketplaceApi } from "./marketplace-api";

const usersApi = marketplaceApi.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => "auth/users/",
            providesTags: (result) => {
                console.log("auth/users/", result);
                return ["users"];
            },
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
