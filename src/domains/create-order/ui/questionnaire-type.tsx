import { useCategoryQuestionnairesQuery } from "@src/redux/api/category-api-slice";
import React from "react";
import { SelectCard } from "./select-card";

type Props = {
  categoryId: number;
  questionnaireTypeId: number | null;
  children?: React.ReactNode;
  onBack: () => void;
  setQuestionnaireTypeId: (value: number) => void;
};

export const QuestionaryType = ({
  categoryId,
  questionnaireTypeId,
  setQuestionnaireTypeId,
  onBack,
  children,
}: Props) => {
  const { data } = useCategoryQuestionnairesQuery(categoryId);

  return (
    <>
      <div className="flex items-center gap-2 pb-4 mb-10 border-b-2 border-yellow">
        <h1 className="mr-auto text-xl font-semibold">Выберите тип анкеты</h1>

        <button onClick={onBack} className="!border-none">
          Назад
        </button>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {data?.map((category) => (
          <SelectCard
            active={category.active}
            selected={category.id === questionnaireTypeId}
            title={category.type as string}
            description={category.description}
            onClick={() => setQuestionnaireTypeId(category.id!)}
            key={category.id}
          ></SelectCard>
        ))}
      </div>

      {children}
    </>
  );
};
