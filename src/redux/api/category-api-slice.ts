import { apiSlice } from "./api-slice";
import { Category, QuestionnaireShortType } from "./generated";

const categoryApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        categories: build.query<Category[], void>({
            query: () => ({
                url: `/categories`,
            }),
        }),
        categoryQuestionnaires: build.query<QuestionnaireShortType[], number>({
            query: (id: number) => ({
                url: `/categories/${id}/questionnaires/`,
            }),
        }),
    }),
});

export const { useCategoriesQuery, useCategoryQuestionnairesQuery } = categoryApi;
