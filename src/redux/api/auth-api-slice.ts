import { apiSlice } from "./api-slice";

const authApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        registerUser: build.mutation({
            query: (data) => ({
                url: "/auth/users/",
                method: "POST",
                body: data,
            }),
        }),
        getUser: build.mutation({
            query: (token) => ({
                url: "/auth/users/me/",
                method: "GET",
                headers: {
                    Authorization: `JWT ${token}`,
                },
            }),
        }),
        verifyUser: build.query({
            query: (data) => ({
                url: "auth/users/activation/",
                // url: `/auth/users/activation/?uid=${uid}&token=${token}`,
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useRegisterUserMutation, useGetUserMutation, useVerifyUserQuery } = authApi;
