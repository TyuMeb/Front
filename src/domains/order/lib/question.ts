import { Question } from "@src/redux/api/generated";

export const toFlatQuestions = (questions: Question[]): Question[] => {
    return questions.reduce((acc, question) => {
        const nested =
            question.options?.filter((q) => !q.questions).map((q) => toFlatQuestions(q?.questions || [])) || [];

        return [...acc, question, ...nested.flat()];
    }, [] as Question[]);
};
