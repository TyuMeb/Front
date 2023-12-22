"use client";

import { FieldControl } from "@src/domains/order/ui/field-control";
import { Button } from "@src/shared/ui/button";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { getCookieOrder, removeCookieOrder } from "../lib/order-storage";
import { QuestionType, useOrderAnswersQuery, useOrderCreateAnswersMutation } from "@src/redux/api/order-api-slice";
import { useQuestionnaireQuery } from "@src/redux/api/questionnaire-api-slice";
import { toFlatQuestions } from "../lib/question";
import { QuestionnaireResponse } from "@src/redux/api/generated";
import { Spinner } from "@src/shared/ui/spinner";

type Props = {
    onBack: () => void;
    questionnaireTypeId?: number | null;
};

type FormValues = Record<string, QuestionnaireResponse["response"]>;

export function OrderForm({ onBack, questionnaireTypeId }: Props) {
    const orderId = getCookieOrder();

    const { data: order, isLoading: isLoadingOrder } = useOrderAnswersQuery(orderId!);
    const [orderCreateAnswers, { isLoading }] = useOrderCreateAnswersMutation();

    const { data: { chapters = [] } = {} } = useQuestionnaireQuery(order?.questionnaire_type_id as number, {
        skip: !order?.questionnaire_type_id && !questionnaireTypeId,
    });

    const [chapterIndex, setChapterIndex] = useState(0);

    // move to last step
    useEffect(() => {
        if (order && chapters.length) {
            for (const [index, chapter] of Object.entries(chapters)) {
                const questions = toFlatQuestions((chapter.questions as QuestionType[]) || []);

                for (const question of questions) {
                    if (!order.answers.some((answer) => answer.question_id === question.id)) {
                        setChapterIndex(Number(index));
                    }
                }
            }
        }
    }, [order, chapters]);

    const formMethods = useForm({
        values: order?.answers?.reduce((acc, answer) => {
            if (answer.question_id) {
                acc[answer.question_id] = answer.response;
            }
            return acc;
        }, {} as FormValues),
    });

    const questions = (chapters?.[chapterIndex]?.questions ?? []) as QuestionType[];

    const onSubmit = (data: FormValues) => {
        const questions = toFlatQuestions((chapters[chapterIndex].questions as QuestionType[]) || []);

        const answers: QuestionnaireResponse[] = [];

        questions.forEach((question) => {
            if (question.id) {
                answers.push({
                    question_id: question.id,
                    response: data[question.id],
                });
            }
        });
        orderCreateAnswers({
            id: orderId!,
            body: answers,
        })
            .unwrap()
            .then(() => {
                setChapterIndex((prev) => prev + 1);
            });
    };

    // const chapter = chapters[chapterIndex];

    const loading = isLoadingOrder;

    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center py-32 flex-col gap-1">
                    Мы загружаем вашу анкету
                    <Spinner />
                </div>
            ) : (
                <>
                    <div className="flex items-center gap-2 border-b-2 border-yellow-400 pb-5 mb-10">
                        <h2 className="mr-auto text-xl font-semibold">
                            Заполните поля анкеты ({chapterIndex + 1} из {chapters.length})
                        </h2>

                        <button
                            className="!border-none"
                            onClick={() => {
                                if (chapterIndex === 0) {
                                    removeCookieOrder();
                                    onBack();
                                    return;
                                }

                                setChapterIndex((prev) => prev - 1);
                            }}
                            disabled={isLoading}>
                            Назад
                        </button>
                    </div>

                    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                        <FormProvider {...formMethods}>
                            {questions.map((question, index) => {
                                return (
                                    <FieldControl
                                        order={index + 1}
                                        key={question.id}
                                        question={question}
                                        className="mb-4"
                                    />
                                );
                            })}

                            {chapters.length === chapterIndex + 1 ? (
                                <Button className="my-12">Проверить анкету</Button>
                            ) : (
                                <Button className="my-12" type="submit" isLoading={isLoading}>
                                    Далее {chapterIndex + 1}/{chapters.length}
                                </Button>
                            )}
                        </FormProvider>
                    </form>
                </>
            )}
        </>
    );
}
