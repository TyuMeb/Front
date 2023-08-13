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
        verifyEmail: build.query({
            query: ({ uid, token }) => `/activate${uid}/${token}/`,
        }),
    }),
});

export const { useRegisterUserMutation, useLazyVerifyEmailQuery } = authApi;
