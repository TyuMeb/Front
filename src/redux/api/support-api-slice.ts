import { apiSlice } from "./api-slice";
import { ContactSupport } from "./generated";

export type Files = {
  id?: string;
  original_name: string;
  file_size: number;
  preview_url?: string;
};

const supportApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createSupportRequest: build.mutation<ContactSupport, { user_question: string; files: Files[] | [] }>({
      query: (body) => ({
        url: "/contact/support/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateSupportRequestMutation } = supportApi;
