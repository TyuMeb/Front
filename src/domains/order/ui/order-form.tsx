"use client";

import { FieldControl } from "@src/domains/order/ui/field-control";
import { Button } from "@src/shared/ui/button";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { getCookieOrder, removeCookieOrder } from "../lib/order-storage";
import { useOrderAnswersQuery } from "@src/redux/api/order-api-slice";
import { useQuestionnaireQuery } from "@src/redux/api/questionnaire-api-slice";

export function OrderForm() {
    const orderId = getCookieOrder();

    const order = useOrderAnswersQuery(orderId!);
    console.log("🚀 ~ file: order-form.tsx:15 ~ OrderForm ~ order:", order);

    const { data } = useQuestionnaireQuery("2");

    const [chapter, setChapter] = useState(0);
    const formMethods = useForm();

    const chapters = data?.chapters || [];

    const questions = chapters?.[chapter]?.questions ?? [];

    const onSubmit = (data: {}) => {
        console.log(data);
    };

    return (
        <div className="homePage container">
            <h2>
                Заполните поля анкеты({chapter + 1} из {chapters.length})
            </h2>

            <Button
                onClick={() => {
                    if (chapter === 0) {
                        removeCookieOrder();
                        return;
                    }

                    setChapter((prev) => prev - 1);
                }}
                variant="cancel">
                Назад
            </Button>

            <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                <FormProvider {...formMethods}>
                    {questions.map((question, index) => {
                        return <FieldControl order={index + 1} key={question.id} question={question} />;
                    })}

                    {chapters.length === chapter + 1 ? (
                        <Button>Проверить анкету</Button>
                    ) : (
                        <Button onClick={() => setChapter((prev) => prev + 1)}>
                            Далее
                            {chapter + 1}/{chapters.length}
                        </Button>
                    )}
                </FormProvider>
            </form>
        </div>
    );
}
