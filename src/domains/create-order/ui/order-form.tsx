"use client";

import { FieldControl } from "@src/domains/create-order/ui/field-control";
import { Button } from "@src/shared/ui/button";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { getCookieOrder, removeCookieOrder } from "../lib/order-storage";
import { QuestionType, useOrderCreateAnswersMutation } from "@src/redux/api/order-api-slice";
import { useQuestionnaireQuery } from "@src/redux/api/questionnaire-api-slice";
import { toFlatQuestions } from "../lib/question";
import { QuestionnaireResponse } from "@src/redux/api/generated";
import { Spinner } from "@src/shared/ui/spinner";
import { useAppDispatch, useAppSelector } from "@src/redux/hooks";
import { createOrderSlice } from "@src/redux/slices/create-order-slice";

type Props = {
    onBack: () => void;
    questionnaireTypeId?: number | null;
};

type FormValues = Record<string, QuestionnaireResponse["response"]>;

export function OrderForm({ onBack, questionnaireTypeId }: Props) {
    const dispatch = useAppDispatch();
    const orderId = getCookieOrder();

    const { order, loading: isLoadingOrder } = useAppSelector((store) => store.createOrder);
    console.log("🚀 ~ OrderForm ~ order:", order);

    useEffect(() => {
        if (orderId) {
            dispatch(createOrderSlice.actions.fetchTodo(orderId));
        }
    }, [orderId]);
    const [orderCreateAnswers, { isLoading }] = useOrderCreateAnswersMutation();

    const { data: { chapters = [] } = {}, isLoading: isLoadingChapters } = useQuestionnaireQuery(
        order?.questionnaire_type_id as number,
        {
            skip: !order?.questionnaire_type_id && !questionnaireTypeId,
        }
    );

    const [chapterIndex, setChapterIndex] = useState(0);

    useEffect(() => {
        if (!order || !chapters.length) return;

        for (const [index, chapter] of Object.entries(chapters)) {
            const questions = toFlatQuestions((chapter.questions as QuestionType[]) || []);

            for (const question of questions) {
                if (!order.answers.some((answer) => answer.question_id === question.id)) {
                    setChapterIndex(Number(index));
                    return;
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
            const response = question?.id ? data[question.id] : undefined;

            if (response !== undefined && question.id) {
                answers.push({
                    question_id: question.id,
                    response,
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

    const loading = isLoadingOrder || isLoadingChapters;

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center gap-1 py-32">
                Мы загружаем вашу анкету
                <Spinner className="text-2xl" />
            </div>
        );
    }

    return (
        <>
            <div className="flex items-center gap-2 pb-5 mb-10 border-b-2 border-yellow-400">
                <h2 className="mr-auto text-xl font-semibold">
                    Заполните поля анкеты{" "}
                    <span className="whitespace-nowrap">
                        ({chapterIndex + 1} из {chapters.length})
                    </span>
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
                                orderId={orderId!}
                                order={index + 1}
                                key={question.id}
                                question={question}
                                className="mb-6"
                            />
                        );
                    })}

                    <>
                        {chapters.length === chapterIndex + 1 ? (
                            <Button className="my-12">Проверить анкету</Button>
                        ) : (
                            <Button className="my-12" type="submit" isLoading={isLoading}>
                                Далее {chapterIndex + 1}/{chapters.length}
                            </Button>
                        )}
                    </>
                </FormProvider>
            </form>
        </>
    );
}
