import { apiSlice } from "./api-slice";
import { getCookie } from "typescript-cookie";

interface UserI {
    id: number;
    email: string;
    name: string;
    person_telephone: string;
    surname: string | null;
}

interface UserWithPasswordI extends UserI {
    password: string;
}

type emailType = { email: string };

type resetEmailConfirmType = {
    uid: string;
    token: string;
    new_password: string;
};

type resetPasswordConfirmType = {
    uid: string;
    token: string;
    new_email: string;
};

const accessToken = getCookie("accessToken");

const usersApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query<UserWithPasswordI[], {}>({
            query: () => ({
                url: "auth/users/",
                method: "GET",
                headers: {
                    Authorization: `JWT ${accessToken}`,
                },
                timeout: 6000,
                refetchOnFocus: true,
            }),
            providesTags: ["Users"],
        }),
        getUsersMe: build.query<UserI, void>({
            query: () => ({
                url: "auth/users/me/",
                method: "GET",
                timeout: 6000,
            }),
        }),
        putUsersMe: build.mutation<UserI, void>({
            query: (body) => ({
                url: "auth/users/me/",
                method: "PUT",
                body,
                timeout: 6000,
            }),
        }),
        patchUsersMe: build.mutation<UserI, void>({
            query: (body) => ({
                url: "auth/users/me/",
                method: "PATCH",
                body,
                timeout: 6000,
            }),
        }),
        deleteUsersMe: build.mutation({
            query: () => ({
                url: "auth/users/me/",
                method: "DELETE",
                timeout: 6000,
            }),
        }),
        getUsersId: build.query<UserWithPasswordI, void>({
            query: (id) => ({
                url: `/auth/users/${id}/`,
                method: "GET",
                timeout: 6000,
                refetchOnFocus: true,
            }),
        }),
        putUsersId: build.mutation<UserWithPasswordI, void>({
            query: ({ id, body }: any) => ({
                url: `/auth/users/${id}/`,
                method: "PUT",
                body,
                timeout: 6000,
            }),
        }),
        patchUsersId: build.mutation<UserWithPasswordI, void>({
            query: ({ id, body }: any) => ({
                url: `/auth/users/${id}/`,
                method: "PATCH",
                body,
                timeout: 6000,
            }),
        }),
        deleteUsersId: build.mutation({
            query: ({ id, body }: any) => ({
                url: `/auth/users/${id}/`,
                method: "DELETE",
                body,
                timeout: 6000,
            }),
        }),
        postUsersResetEmail: build.mutation({
            query: (body: emailType) => ({
                url: "/auth/users/reset_email/",
                method: "POST",
                body,
                timeout: 6000,
            }),
        }),
        postUsersResetEmailConfirm: build.mutation({
            query: (body: resetEmailConfirmType) => ({
                url: "/auth/users/reset_email_confirm/",
                method: "POST",
                body,
                timeout: 6000,
            }),
        }),
        postUsersResetPassword: build.mutation({
            query: (body: emailType) => ({
                url: "/auth/users/reset_password/",
                method: "POST",
                body,
                timeout: 6000,
            }),
        }),
        postUsersResetPasswordConfirm: build.mutation({
            query: (body: resetPasswordConfirmType) => ({
                url: `/auth/users/reset_password_confirm/`,
                method: "POST",
                body,
                timeout: 6000,
            }),
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetUsersMeQuery,
    usePatchUsersMeMutation,
    useDeleteUsersMeMutation,
    useGetUsersIdQuery,
    usePutUsersIdMutation,
    usePatchUsersIdMutation,
    useDeleteUsersIdMutation,
    usePostUsersResetEmailMutation,
    usePostUsersResetEmailConfirmMutation,
    usePostUsersResetPasswordMutation,
    usePostUsersResetPasswordConfirmMutation,
} = usersApi;
