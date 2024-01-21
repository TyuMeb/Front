"use client";

import { FieldControl } from "@src/domains/create-order/ui/field-control";
import { Button } from "@src/shared/ui/button";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { getCookieOrder, removeCookieOrder } from "../lib/order-storage";
import {
  QuestionType,
  useFinishOrderMutation,
  useLazyOrderQuery,
  useOrderCreateAnswersMutation,
} from "@src/redux/api/order-api-slice";
import { useQuestionnaireQuery } from "@src/redux/api/questionnaire-api-slice";
import { toFlatQuestions } from "../lib/question";
import { QuestionnaireResponse } from "@src/redux/api/generated";
import { Spinner } from "@src/shared/ui/spinner";
import { useAppDispatch, useAppSelector } from "@src/redux/hooks";
import { createOrderSlice } from "@src/redux/slices/create-order-slice";
import { useUser } from "@src/redux/slices/users-slice";
import { setTypeModal } from "@src/redux/slices/modal-slice";
import { useRouter } from "next/navigation";

type Props = {
  onBack: () => void;
  questionnaireTypeId?: number | null;
};

type FormValues = Record<string, QuestionnaireResponse["response"]>;

export function OrderForm({ onBack, questionnaireTypeId }: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const orderId = getCookieOrder();
  const user = useUser();

  const order = useAppSelector((store) => store.createOrder.order);

  const [getOrder, { isLoading: isLoadingOrder, isSuccess }] = useLazyOrderQuery();

  const { data: { chapters = [] } = {}, isLoading: isLoadingChapters } = useQuestionnaireQuery(
    order?.questionnaire_type_id as number,
    {
      skip: !(order?.questionnaire_type_id || questionnaireTypeId),
    }
  );

  useEffect(() => {
    if (!orderId) {
      return;
    }

    getOrder(orderId)
      .unwrap()
      .then((data) => {
        dispatch(createOrderSlice.actions.initializeOrder(data));
      });
  }, [orderId]);

  const [orderCreateAnswers, { isLoading }] = useOrderCreateAnswersMutation();

  const [chapterIndex, setChapterIndex] = useState<number>(0);
  const [isChecking, setIsChecking] = useState(false);

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

    setIsChecking(true);
  }, [chapters, isSuccess]);

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
        if (chapters.length === chapterIndex + 1) {
          setIsChecking(true);
          return;
        }
      });
  };

  const [finishOrder, { isLoading: isLoadingFinishOrder }] = useFinishOrderMutation();
  const handleFinishOrder = () => {
    if (user) {
      // @ts-ignore
      finishOrder(order?.id || orderId!)
        .unwrap()
        .then(() => {
          removeCookieOrder();
          router.push("/account/my-orders");
        });

      return;
    }
    dispatch(setTypeModal("signIn"));
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
          {isChecking ? (
            "Проверьте правильность заполнения анкеты"
          ) : (
            <>
              Заполните поля анкеты{" "}
              <span className="whitespace-nowrap">
                ({chapterIndex + 1} из {chapters.length})
              </span>
            </>
          )}
        </h2>

        <button
          className="!border-none"
          onClick={() => {
            if (isChecking) {
              setChapterIndex(chapters.length - 1);
              setIsChecking(false);
              return;
            }

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
          {isChecking
            ? chapters
                .reduce((acc, cur) => acc.concat(cur.questions as QuestionType[]), [] as QuestionType[])
                .map((question, index) => {
                  return (
                    <FieldControl
                      orderId={orderId!}
                      positionOrder={index + 1}
                      key={question.id}
                      question={question}
                      className="mb-6"
                      readOnly
                    />
                  );
                })
            : questions.map((question, index) => {
                return (
                  <FieldControl
                    orderId={orderId!}
                    positionOrder={index + 1}
                    key={question.id}
                    question={question}
                    className="mb-6"
                  />
                );
              })}

          <>
            {isChecking ? (
              <>
                <p className="mb-4 font-bold">
                  Вы завершили заполнение анкеты! Нажмите кнопку отправить и получите первые предложения через 24 часа.
                </p>
                <Button isLoading={isLoadingFinishOrder} type="button" onClick={handleFinishOrder} className="mb-12">
                  Отправить заявку
                </Button>
              </>
            ) : (
              <>
                {chapters.length === chapterIndex + 1 ? (
                  <Button className="my-12">Проверить анкету</Button>
                ) : (
                  <Button className="my-12" type="submit" isLoading={isLoading}>
                    Далее {chapterIndex + 1}/{chapters.length}
                  </Button>
                )}
              </>
            )}
          </>
        </FormProvider>
      </form>
    </>
  );
}
