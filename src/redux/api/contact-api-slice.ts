import { apiSlice } from "./api-slice";
import { CooperationOffer } from "./generated";

const contactApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    cooperate: build.mutation({
      query: (body: CooperationOffer) => ({
        url: "/contact/cooperation/",
        method: "POST",
        body,
      }),
    }),
    getContact: build.mutation({
      query: (body: CooperationOffer) => ({
        // TODO: УКАЗАТЬ ПРАВИЛЬНЫЙ ЭНДПОИНТ
        url: "/contact/cooperation/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCooperateMutation, useGetContactMutation } = contactApi;
