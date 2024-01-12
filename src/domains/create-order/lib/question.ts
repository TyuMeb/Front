import { QuestionType } from "@src/redux/api/order-api-slice";

export const toFlatQuestions = (questions: QuestionType[]): QuestionType[] => {
    return questions.reduce((acc, question) => {
        const nested =
            // @ts-ignore
            question.options?.filter((q) => !q.questions).map((q) => toFlatQuestions(q?.questions || [])) || [];

        return [...acc, question, ...nested.flat()];
    }, [] as QuestionType[]);
};
