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
        verifyEmail: build.query({
            query: ({ uid, token }) => `/activate${uid}/${token}/`,
        }),
    }),
});

export const { useRegisterUserMutation, useGetUserMutation } = authApi;
