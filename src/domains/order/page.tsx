import React, { useState } from "react";
import { OrderForm } from "./ui/order-form";
import { Categories } from "./ui/categories";
import { Button } from "@src/shared/ui/button";
import { QuestionaryType } from "./ui/questionnaire-type";
import { useCreateOrderMutation } from "@src/redux/api/order-api-slice";
import { getCookieOrder, storeCookieOrder } from "./lib/order-storage";
import styles from "./page.module.scss";
import { cn } from "@src/shared/lib/cn";

type Step = "category" | "questionnaire-type" | "order-form";

type Props = {};

export const OrderPage = (props: Props) => {
    const [categoryId, setCategoryId] = useState<number | null>(null);
    const [questionnaireTypeId, setQuestionnaireTypeId] = useState<number | null>(null);

    const [step, setStep] = useState<Step>(getCookieOrder() ? "order-form" : "category");

    const [createOrder, { isLoading }] = useCreateOrderMutation();

    const handleCreateOrder = () => {
        createOrder({
            questionnaire_type_id: questionnaireTypeId!,
        })
            .unwrap()
            .then((data) => {
                storeCookieOrder(data.order_id);
                setStep("order-form");
            });
    };

    return (
        <div className={cn("homePage container", styles.page)}>
            {step === "category" && (
                <Categories categoryId={categoryId} setCategoryId={setCategoryId}>
                    {categoryId && (
                        <Button onClick={() => setStep("questionnaire-type")} type="button">
                            Далее
                        </Button>
                    )}
                </Categories>
            )}

            {step === "questionnaire-type" && categoryId && (
                <QuestionaryType
                    categoryId={categoryId}
                    questionnaireTypeId={questionnaireTypeId}
                    setQuestionnaireTypeId={setQuestionnaireTypeId}>
                    {questionnaireTypeId && (
                        <Button isLoading={isLoading} type="button" onClick={() => handleCreateOrder()}>
                            Далее
                        </Button>
                    )}
                </QuestionaryType>
            )}

            {step === "order-form" && <OrderForm />}
        </div>
    );
};
