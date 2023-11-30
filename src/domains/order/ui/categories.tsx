import { useCategoriesQuery } from "@src/redux/api/category-api-slice";

import React from "react";

type Props = {
    categoryId: number | null;
    children: React.ReactNode;
    setCategoryId: (value: number) => void;
};

export const Categories = ({ setCategoryId, children }: Props) => {
    const { data } = useCategoriesQuery();

    return (
        <div>
            <h1>Выберите тип мебели</h1>

            <hr />

            <div>
                {data?.map((category) => (
                    <button type="button" onClick={() => setCategoryId(category.id!)} key={category.id}>
                        <img
                            src="https://pro-dachnikov.com/uploads/posts/2023-01/1673662393_pro-dachnikov-com-p-krasivo-sdelat-foto-mebeli-59.jpg"
                            alt={category.name || ""}
                        />

                        <p>{category.name}</p>

                        {category.name !== "kitchen" && <p>Временно недоступно</p>}
                    </button>
                ))}
            </div>

            {children}
        </div>
    );
};
