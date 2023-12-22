import { apiSlice } from "./api-slice";
import { CooperationOffer, ContactData } from "./generated";

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
            query: (body: ContactData) => ({
                // TODO: УКАЗАТЬ ПРАВИЛЬНЫЙ ЭНДПОИНТ
                url: "/contact/cooperation/",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useCooperateMutation, useGetContactMutation } = contactApi;
