import { apiSlice } from "./api-slice";
import { QuestionnaireResponse } from "./generated";

const orderApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        createOrder: build.mutation<{ order_id: number }, { questionnaire_type_id: number }>({
            query: (body) => ({
                url: `/order/create/`,
                method: "POST",
                body,
            }),
        }),
        orderAnswers: build.query<QuestionnaireResponse[], number>({
            query: (id) => ({
                url: `/order/${id}/get_answers/`,
            }),
        }),
        orderCreateAnswers: build.mutation<QuestionnaireResponse[], { id: number; answers: QuestionnaireResponse[] }>({
            query: ({ id, ...body }) => ({
                url: `/order/${id}/answers/`,
                body,
                method: "POST",
            }),
        }),
    }),
});

export const { useCreateOrderMutation, useOrderAnswersQuery, useOrderCreateAnswersMutation } = orderApi;
