import { FileType } from "@src/shared/types/files.types";
import { apiSlice } from "./api-slice";
import { ContactSupport } from "@src/shared/types/contact-support.types";

const supportApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createSupportRequest: build.mutation<ContactSupport, { user_question: string; files: FileType[] | [] }>({
      query: (body) => ({
        url: "/contact/support/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateSupportRequestMutation } = supportApi;
