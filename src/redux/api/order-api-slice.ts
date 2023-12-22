import { apiSlice } from "./api-slice";
import { AllOrdersClient, Option, Question, QuestionnaireResponse } from "./generated";

export type OrderDetail = {
    name: string;
    questionnaire_type_id: number;
    answers: QuestionnaireResponse[];
};

export type QuestionType = Question & {
    options?: Array<Omit<Option, "questions"> & { questions: QuestionType[] }>;
};

const orderApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        createOrder: build.mutation<{ order_id: number }, { questionnaire_type_id: number }>({
            query: (body) => ({
                url: `/order/create/`,
                method: "POST",
                body,
            }),
        }),
        orderAnswers: build.query<OrderDetail, number>({
            query: (id) => ({
                url: `/order/${id}/`,
            }),
        }),
        orderCreateAnswers: build.mutation<QuestionnaireResponse[], { id: number; body: QuestionnaireResponse[] }>({
            query: ({ id, body }) => ({
                url: `/order/${id}/answers/`,
                body: body,
                method: "POST",
            }),
        }),
        archiveOrders: build.query<AllOrdersClient[], void>({
            query: () => ({
                url: `/order/client/archive/`,
            }),
        }),
    }),
});

export const { useCreateOrderMutation, useOrderAnswersQuery, useOrderCreateAnswersMutation, useArchiveOrdersQuery } =
    orderApi;
