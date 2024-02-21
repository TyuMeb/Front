import { apiSlice } from "./api-slice";
import { UserCreate, SendEmailReset, PasswordResetConfirm, UserAccount } from "./generated";

const usersApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<UserCreate[], {}>({
      query: () => ({
        url: "auth/users/",
        method: "GET",
      }),
    }),
    getUsersMe: build.query<UserAccount, void>({
      query: () => ({
        url: "auth/users/me/",
        method: "GET",
      }),
    }),
    putUsersMe: build.mutation<UserAccount, void>({
      query: (body) => ({
        url: "auth/users/me/",
        method: "PUT",
        body,
      }),
    }),
    patchUsersMe: build.mutation<UserAccount, UserAccount>({
      query: (body: UserAccount) => ({
        url: "auth/users/me/",
        method: "PATCH",
        body,
      }),
    }),
    deleteUsersMe: build.mutation({
      query: () => ({
        url: "auth/users/me/",
        method: "DELETE",
      }),
    }),
    getUsersId: build.query<UserAccount, void>({
      query: (id) => ({
        url: `/auth/users/${id}/`,
        method: "GET",
      }),
    }),
    putUsersId: build.mutation<UserAccount, UserAccount>({
      query: ({ id, ...body }) => ({
        url: `/auth/users/${id}/`,
        method: "PUT",
        body,
      }),
    }),
    patchUsersId: build.mutation<UserAccount, UserAccount>({
      query: ({ id, ...body }) => ({
        url: `/auth/users/${id}/`,
        method: "PATCH",
        body,
      }),
    }),
    deleteUsersId: build.mutation({
      query: ({ id, body }) => ({
        url: `/auth/users/${id}/`,
        method: "DELETE",
        body,
      }),
    }),
    postUsersResetEmail: build.mutation({
      query: (body: SendEmailReset) => ({
        url: "/auth/users/reset_email/",
        method: "POST",
        body,
      }),
    }),
    postUsersResetEmailConfirm: build.mutation({
      query: (body: PasswordResetConfirm) => ({
        url: "/auth/users/reset_email_confirm/",
        method: "POST",
        body,
      }),
    }),
    postUsersResetPassword: build.mutation({
      query: (body) => {
        return {
          url: "/auth/users/reset_password/",
          method: "POST",
          body,
        };
      },
    }),
    postUsersResetPasswordConfirm: build.mutation({
      query: (body: PasswordResetConfirm) => ({
        url: `/auth/users/reset_password_confirm/`,
        method: "POST",
        body,
      }),
    }),
    postUsersSetPassword: build.mutation({
      query: (body: { new_password: string; re_new_password: string; current_password: string }) => {
        return {
          url: "/auth/users/set_password/",
          method: "POST",
          body,
        };
      },
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
  usePostUsersSetPasswordMutation,
} = usersApi;
