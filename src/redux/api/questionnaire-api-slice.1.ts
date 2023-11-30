import { apiSlice } from "./api-slice";

export interface QuestionnaireTemp {
    id: number;
    type: string;
    description: string;
    answers_exists: boolean;
    chapters: Chapter[];
}

export interface Chapter {
    id: number;
    name: string;
    questions: Question[];
}

export interface Question {
    id: number | string;
    text: string;
    answer_type: string;
    file_required: boolean;
    answer: any;
    files: any;
    options: Option[];
}

export interface Option {
    id: number;
    text: string;
    option_type: string;
    questions: Question2[];
}

export interface Question2 {
    id: number;
    text: string;
    answer_type: string;
    file_required: boolean;
    answer: any;
    files: any;
    options: any[];
}

const questionnaireApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        questionnaire: build.query<QuestionnaireTemp, string>({
            query: (id: string) => ({
                url: `/questionnaire/${id}`,
            }),
        }),
    }),
});

export const { useQuestionnaireQuery } = questionnaireApi;
