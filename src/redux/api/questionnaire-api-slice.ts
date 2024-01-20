import { apiSlice } from "./api-slice";
import { QuestionnaireType } from "./generated";

const questionnaireApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    questionnaire: build.query<QuestionnaireType, number>({
      query: (id: number) => ({
        url: `/questionnaire/${id}/`,
      }),
    }),
  }),
});

export const { useQuestionnaireQuery, useLazyQuestionnaireQuery } = questionnaireApi;
