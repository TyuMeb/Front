import { apiSlice } from "./api-slice";
import { ContactSupport } from "./generated";

const supportApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createSupportRequest: build.mutation({
      query: (body: ContactSupport) => ({
        url: "/contact/support/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateSupportRequestMutation } = supportApi;
