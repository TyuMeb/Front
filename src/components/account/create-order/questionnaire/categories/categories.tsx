import { useCategoriesQuery } from "@src/redux/api/category-api-slice";

import React from "react";
import { SelectCard } from "../select-card";

type Props = {
  categoryId: number | null;
  children: React.ReactNode;
  setCategoryId: (value: number) => void;
};

export const Categories = ({ setCategoryId, children, categoryId }: Props) => {
  const { data } = useCategoriesQuery();

  return (
    <>
      <div className="flex items-center gap-2 pb-4 mb-10 border-b-2 border-yellow">
        <h1 className="mr-auto text-xl font-semibold">Выберите тип мебели</h1>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {data?.map((category) => (
          <SelectCard
            active={category.active}
            selected={category.id === categoryId}
            title={category.name as string}
            description={category.active ? "" : "Временно недоступно"}
            onClick={() => setCategoryId(category.id!)}
            key={category.id}
          ></SelectCard>
        ))}
      </div>

      {children}
    </>
  );
};
