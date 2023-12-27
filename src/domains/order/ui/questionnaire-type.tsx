import { useCategoryQuestionnairesQuery } from "@src/redux/api/category-api-slice";
import { cn } from "@src/shared/lib/cn";
import React from "react";

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
            <div className="flex items-center gap-2 pb-4 mb-10 border-b-2 border-yellow-400">
                <h1 className="mr-auto text-xl font-semibold">Выберите тип анкеты</h1>

                <button onClick={onBack} className="!border-none">
                    Назад
                </button>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {data?.map((category) => (
                    <button
                        className={cn("flex flex-col text-left", !category.active && "opacity-70 pointer-events-none")}
                        type="button"
                        onClick={() => setQuestionnaireTypeId(category.id!)}
                        key={category.id}>
                        <img
                            src="https://pro-dachnikov.com/uploads/posts/2023-01/1673662393_pro-dachnikov-com-p-krasivo-sdelat-foto-mebeli-59.jpg"
                            alt={category.description || ""}
                            className={cn(
                                "border-2 border-transparent rounded-lg mb-4",
                                category.id === questionnaireTypeId && "border-yellow-400"
                            )}
                        />

                        <p className="font-semibold">{category.type}</p>

                        <p>{category.description}</p>
                    </button>
                ))}
            </div>

            {children}
        </>
    );
};
