import { fillFormData } from "@src/shared/lib/form";
import { apiSlice } from "./api-slice";
import { AllOrdersClient, File, Option, OuterQuestion, QuestionnaireResponse } from "./generated";

export type OrderDetail = {
  name: string;
  questionnaire_type_id: number;
  answers: Array<QuestionnaireResponse & { files?: File[] }>;
};

export type QuestionType = OuterQuestion & {
  options?: Array<Omit<Option, "options"> & { options: QuestionType[] }>;
};

const orderApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    archiveOrders: build.query<AllOrdersClient[], void>({
      query: () => ({
        url: `/order/client/archive/`,
      }),
    }),
    clientActiveOrders: build.query<AllOrdersClient[], void>({
      query: () => ({
        url: `/order/client/all_orders/`,
      }),
    }),
    createOrder: build.mutation<{ order_id: number }, { questionnaire_type_id: number }>({
      query: (body) => ({
        url: `/order/create/`,
        method: "POST",
        body,
      }),
    }),
    order: build.query<OrderDetail, number>({
      query: (id) => ({
        url: `/order/${id}/`,
      }),
    }),
    // TODO: сделать ручку для получения офферов
    // orderGetOffers: build.query<OrderDetail, number>({
    //   query: (id) => ({
    //     url: `/order/${id}/offers`,
    //   }),
    // }),
    finishOrder: build.mutation<unknown, number>({
      query: (id) => ({
        url: `/order/${id}/finish/`,
        method: "PATCH",
      }),
    }),
    orderCreateAnswers: build.mutation<QuestionnaireResponse[], { id: number; body: QuestionnaireResponse[] }>({
      query: ({ id, body }) => ({
        url: `/order/${id}/answers/`,
        body: body,
        method: "POST",
      }),
    }),
    uploadFileOld: build.mutation<File, { id: number; upload_file: globalThis.File; question_id: number }>({
      query: (body) => {
        return {
          url: `/order/${body.id}/files/`,
          method: "POST",
          headers: {
            // "Content-Type": "multipart/form-data",
          },
          body: fillFormData(body),
          formData: true,
        };
      },
    }),
    deleteFileOld: build.mutation<unknown, { file_id: number }>({
      query: (body) => {
        return {
          url: `/order/file_order/`,
          method: "DELETE",
          body,
        };
      },
    }),
  }),
});

export const {
  useArchiveOrdersQuery,
  useCreateOrderMutation,
  useOrderQuery,
  useLazyOrderQuery,
  useOrderCreateAnswersMutation,
  useDeleteFileOldMutation,
  useUploadFileOldMutation,
  useFinishOrderMutation,
  useClientActiveOrdersQuery,
} = orderApi;

export { orderApi };
