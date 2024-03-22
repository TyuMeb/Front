"use client";

import React, { useState } from "react";
import { Form } from "./form";
import { Categories } from "./questionnaire/categories";
import { QuestionaryType } from "./questionnaire/questionnaire-type";
import { Button } from "@src/shared/ui/button";
import { useCreateOrderMutation } from "@src/redux/api/order-api-slice";
import { getCookieOrder, storeCookieOrder } from "./lib/order-storage";
import { ProjectDescription } from "./project-description/project-description";

type Step = "category" | "questionnaire-type" | "order-form" | "project-description";

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
        handleDescriptionStep()
      });
  };

  const handleOrderFormStep = () => {
    setStep("order-form");
  }

  const handleQuestionnaireStep = () => {
    setStep("questionnaire-type");
  };

  const handleDescriptionStep = () => {
    setStep("project-description");
  };

  const handleCategoryStep = () => {
    setStep("category");
  };

  return (
    <div className="container flex flex-col py-4 pt-24">
      {step === "category" && (
        <Categories categoryId={categoryId} setCategoryId={setCategoryId}>
          {categoryId && (
            <Button className="self-center mx-auto mt-12" onClick={handleQuestionnaireStep} type="button">
              Далее
            </Button>
          )}
        </Categories>
      )}

      {step === "questionnaire-type" && categoryId && (
        <QuestionaryType
          onBack={() => {
            setQuestionnaireTypeId(null);
            handleCategoryStep()
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

      {step === "project-description" && (
        <ProjectDescription onBack={handleQuestionnaireStep} onNextStep={handleOrderFormStep} />
      )}

      {step === "order-form" && <Form onBack={handleCategoryStep} questionnaireTypeId={questionnaireTypeId} />}
    </div>
  );
};
