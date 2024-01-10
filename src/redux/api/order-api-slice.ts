import { fillFormData } from "@src/shared/lib/form";
import { apiSlice } from "./api-slice";
import { Option, OuterQuestion, QuestionnaireResponse } from "./generated";

export type OrderDetail = {
    name: string;
    questionnaire_type_id: number;
    answers: QuestionnaireResponse[];
};

export type QuestionType = OuterQuestion & {
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
        // TODO need backend add swagger
        uploadFile: build.mutation<unknown, { id: number; upload_file: File; question_id: number }>({
            query: (body) => {
                return {
                    url: `/order/image_upload_order/`,
                    method: "POST",
                    body: fillFormData(body),
                };
            },
        }),
    }),
});

export const { useCreateOrderMutation, useOrderAnswersQuery, useOrderCreateAnswersMutation, useUploadFileMutation } =
    orderApi;
