import { marketplaceApi } from "./marketplace-api";

export const authorizationApi = marketplaceApi.injectEndpoints({
    endpoints: (build) => ({
        createUser: build.mutation({
            query: (body) => ({
                url: "auth/users/",
                method: "POST",
                body,
            }),
        }),
        getToken: build.mutation({
            query: (body: { email: string; password: string }) => ({
                url: "auth/jwt/create/",
                method: "POST",
                body,
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
        }),
    }),
});

export const { useCreateUserMutation, useGetTokenMutation, useVerifyTokenMutation, useRefreshTokenMutation } =
    authorizationApi;
