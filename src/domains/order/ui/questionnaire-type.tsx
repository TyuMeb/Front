import { useCategoryQuestionnairesQuery } from "@src/redux/api/category-api-slice";
import React from "react";

type Props = {
    categoryId: number;
    questionnaireTypeId: number | null;
    children?: React.ReactNode;
    setQuestionnaireTypeId: (value: number) => void;
};

export const QuestionaryType = ({ categoryId, questionnaireTypeId, setQuestionnaireTypeId, children }: Props) => {
    console.log("🚀 ~ file: questionnaire-type.tsx:12 ~ QuestionaryType ~ questionnaireTypeId:", questionnaireTypeId);
    const { data } = useCategoryQuestionnairesQuery(categoryId);

    return (
        <div>
            <h1>Выберите тип анкеты</h1>

            <hr />

            <div>
                {data?.map((category) => (
                    <button type="button" onClick={() => setQuestionnaireTypeId(category.id!)} key={category.id}>
                        <img
                            src="https://pro-dachnikov.com/uploads/posts/2023-01/1673662393_pro-dachnikov-com-p-krasivo-sdelat-foto-mebeli-59.jpg"
                            alt={category.description || ""}
                        />

                        <p>{category.type}</p>
                        <p>{category.description}</p>
                    </button>
                ))}
            </div>

            {children}
        </div>
    );
};
