"use client";

import React, { useState } from "react";
import { Form } from "./form";
import { Categories } from "./questionnaire/categories";
import { QuestionaryType } from "./questionnaire/questionnaire-type";
import { Button } from "@src/shared/ui/button";
import { useCreateOrderMutation } from "@src/redux/api/order-api-slice";
import { getCookieOrder, storeCookieOrder } from "./lib/order-storage";

type Step = "category" | "questionnaire-type" | "order-form";

export const CreateOrder = () => {
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
    <div className="container flex flex-col py-4 pt-24">
      {step === "category" && (
        <Categories categoryId={categoryId} setCategoryId={setCategoryId}>
          {categoryId && (
            <Button className="self-center mx-auto mt-12" onClick={() => setStep("questionnaire-type")} type="button">
              Далее
            </Button>
          )}
        </Categories>
      )}

      {step === "questionnaire-type" && categoryId && (
        <QuestionaryType
          onBack={() => {
            setQuestionnaireTypeId(null);
            setStep("category");
          }}
          categoryId={categoryId}
          questionnaireTypeId={questionnaireTypeId}
          setQuestionnaireTypeId={setQuestionnaireTypeId}
        >
          {questionnaireTypeId && (
            <Button
              className="self-center mx-auto mt-12"
              isLoading={isLoading}
              type="button"
              onClick={() => handleCreateOrder()}
            >
              Далее
            </Button>
          )}
        </QuestionaryType>
      )}

      {step === "order-form" && <Form onBack={() => setStep("category")} questionnaireTypeId={questionnaireTypeId} />}
    </div>
  );
};
