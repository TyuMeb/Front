import { useCategoriesQuery } from "@src/redux/api/category-api-slice";
import { cn } from "@src/shared/lib/cn";

import React from "react";

type Props = {
    categoryId: number | null;
    children: React.ReactNode;
    setCategoryId: (value: number) => void;
};

export const Categories = ({ setCategoryId, children, categoryId }: Props) => {
    const { data } = useCategoriesQuery();

    return (
        <>
            <div className="flex items-center gap-2 pb-4 mb-10 border-b-2 border-yellow-400">
                <h1 className="mr-auto text-xl font-semibold">Выберите тип мебели</h1>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {data?.map((category) => (
                    <button
                        className={cn(
                            "flex flex-col text-left border-2 border-transparent rounded-lg overflow-hidden",
                            !category.active && "opacity-70 pointer-events-none",
                            category.id === categoryId && "border-yellow-400"
                        )}
                        type="button"
                        onClick={() => setCategoryId(category.id!)}
                        key={category.id}>
                        <img
                            src="https://pro-dachnikov.com/uploads/posts/2023-01/1673662393_pro-dachnikov-com-p-krasivo-sdelat-foto-mebeli-59.jpg"
                            alt={category.name || ""}
                            className={cn("mb-4 max-w-full")}
                        />

                        <p className="font-semibold">{category.name}</p>

                        {!category.active && <p>Временно недоступно</p>}
                    </button>
                ))}
            </div>

            {children}
        </>
    );
};
