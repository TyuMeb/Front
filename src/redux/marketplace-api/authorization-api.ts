import { marketplaceApi } from "./marketplace-api";

export const authorizationApi = marketplaceApi.injectEndpoints({
    endpoints: (build) => ({
        registerUser: build.mutation({
            query: (data) => ({
                url: "auth/users/",
                method: "POST",
                body: data,
            }),
        }),
        loginUser: build.mutation({
            query: (body: { email: string; password: string }) => ({
                url: "auth/jwt/create/",
                method: "POST",
                body,
            }),
            invalidatesTags: (result) => {
                console.log("auth/jwt/create/", result);
                return ["authorization"];
            },
        }),
        verifyEmail: build.mutation({
            query: ({ uid, token }) => ({
                url: `activate${uid}/${token}/`,
                method: "GET",
            }),
        }),
        verifyToken: build.mutation({
            query: (body: { token: string }) => ({
                url: "/auth/jwt/verify/",
                method: "POST",
                body,
            }),
        }),
        refreshToken: build.mutation({
            query: (body: { refresh: string }) => ({
                url: "auth/jwt/refresh/",
                method: "POST",
                body,
            }),
            invalidatesTags: (result) => {
                console.log("auth/jwt/refresh/", result);
                return ["authorization"];
            },
        }),
    }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useVerifyTokenMutation, useRefreshTokenMutation } =
    authorizationApi;
