import { apiSlice } from "./api-slice";

const jwtApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        createToken: build.mutation({
            query: (body: { email: string; password: string }) => ({
                url: "/auth/jwt/create/",
                method: "POST",
                body,
            }),
        }),
        verifyToken: build.mutation({
            query: (body: { token: string | undefined }) => ({
                url: "/auth/jwt/verify/",
                method: "POST",
                body,
            }),
        }),
        refreshToken: build.mutation({
            query: (body: { refresh: string | null }) => ({
                url: "/auth/jwt/refresh/",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useCreateTokenMutation, useVerifyTokenMutation, useRefreshTokenMutation } = jwtApi;
