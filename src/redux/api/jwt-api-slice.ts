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
  }),
});

export const { useCreateTokenMutation } = jwtApi;
