import { apiSlice } from "./api-slice";

const contactApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        cooperate: build.mutation({
            query: (body: { name: string; phone: string }) => ({
                url: "/contact/cooperate/",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useCooperateMutation } = contactApi;
