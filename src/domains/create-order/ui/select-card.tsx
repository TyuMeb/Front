import { cn } from "@src/shared/lib/cn";
import React from "react";

type Props = {
  active?: boolean;
  selected?: boolean;
  title?: string | null;
  description?: string | null;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const SelectCard = ({ active, selected, title, description, ...props }: Props) => {
  return (
    <button
      {...props}
      className={cn(
        "flex flex-col text-left border-0 border-transparent bg-transparent rounded-lg cursor-pointer",
        !active && "opacity-70 pointer-events-none",
        selected && "border-yellow-400"
      )}
      type="button"
    >
      <img
        src="https://pro-dachnikov.com/uploads/posts/2023-01/1673662393_pro-dachnikov-com-p-krasivo-sdelat-foto-mebeli-59.jpg"
        alt={description || ""}
        className={cn(
          "mb-4 max-w-full border-4 border-solid border-transparent min-h-[380px] object-cover rounded-2xl",
          selected && "border-yellow"
        )}
      />

      <p className="font-semibold">{title}</p>

      {description && <p className="mt-2">{description}</p>}
    </button>
  );
};

export { SelectCard };
