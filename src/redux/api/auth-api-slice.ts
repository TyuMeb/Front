import { apiSlice } from "./api-slice";
import { UserAccount, UserCreate } from "./generated";

const authApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        registerUser: build.mutation({
            query: (data: UserCreate) => ({
                url: "/auth/users/",
                method: "POST",
                body: data,
            }),
        }),
        getUser: build.query<UserAccount, void>({
            query: () => "/auth/users/me/",
        }),
        verifyEmail: build.query({
            query: ({ uid, token }) => `/activate${uid}/${token}/`,
        }),
    }),
});

export const { useRegisterUserMutation, useLazyGetUserQuery } = authApi;
