import { apiSlice } from "./api-slice";
import { QuestionnaireType } from "./generated";

const questionnaireApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        questionnaire: build.query<QuestionnaireType, string>({
            query: (id: string) => ({
                url: `/questionnaire/${id}`,
            }),
        }),
    }),
});

export const { useQuestionnaireQuery } = questionnaireApi;
