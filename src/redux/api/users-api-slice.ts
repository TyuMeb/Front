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
    new_email: string;
};

type resetPasswordConfirmType = {
    uid: string;
    token: string;
    new_password: string;
};

const getHeader = () => ({ Authorization: `JWT ${getCookie("accessToken")}` });

const usersApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query<UserWithPasswordI[], {}>({
            query: () => ({
                url: "auth/users/",
                method: "GET",
                headers: getHeader(),
            }),
        }),
        getUsersMe: build.query<UserI, void>({
            query: () => ({
                url: "auth/users/me/",
                method: "GET",
                headers: getHeader(),
            }),
        }),
        putUsersMe: build.mutation<UserI, void>({
            query: (body) => ({
                url: "auth/users/me/",
                method: "PUT",
                headers: getHeader(),
                body,
            }),
        }),
        patchUsersMe: build.mutation<UserI, void>({
            query: (body) => ({
                url: "auth/users/me/",
                method: "PATCH",
                headers: getHeader(),
                body,
            }),
        }),
        deleteUsersMe: build.mutation({
            query: () => ({
                url: "auth/users/me/",
                method: "DELETE",
                headers: getHeader(),
            }),
        }),
        getUsersId: build.query<UserWithPasswordI, void>({
            query: (id) => ({
                url: `/auth/users/${id}/`,
                method: "GET",
                headers: getHeader(),
            }),
        }),
        putUsersId: build.mutation<UserWithPasswordI, void>({
            query: ({ id, body }: any) => ({
                url: `/auth/users/${id}/`,
                method: "PUT",
                headers: getHeader(),
                body,
            }),
        }),
        patchUsersId: build.mutation<UserWithPasswordI, void>({
            query: ({ id, body }: any) => ({
                url: `/auth/users/${id}/`,
                method: "PATCH",
                headers: getHeader(),
                body,
            }),
        }),
        deleteUsersId: build.mutation({
            query: ({ id, body }: any) => ({
                url: `/auth/users/${id}/`,
                method: "DELETE",
                headers: getHeader(),
                body,
            }),
        }),
        postUsersResetEmail: build.mutation({
            query: (body: emailType) => ({
                url: "/auth/users/reset_email/",
                method: "POST",
                body,
            }),
        }),
        postUsersResetEmailConfirm: build.mutation({
            query: (body: resetEmailConfirmType) => ({
                url: "/auth/users/reset_email_confirm/",
                method: "POST",
                body,
            }),
        }),
        postUsersResetPassword: build.mutation({
            query: (body: emailType) => ({
                url: "/auth/users/reset_password/",
                method: "POST",
                body,
            }),
        }),
        postUsersResetPasswordConfirm: build.mutation({
            query: (body: resetPasswordConfirmType) => ({
                url: `/auth/users/reset_password_confirm/`,
                method: "POST",
                body,
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
