"use client";

import { HTMLAttributes } from "react";
import styles from "./no-card.module.scss";
import { Button } from "@src/shared/ui/button";

type NoCardProps = {
  name: JSX.Element | string;
} & HTMLAttributes<HTMLDivElement>;

export const NoCard = ({ name, className, children, ...props }: NoCardProps) => {
  return (
    <article className={`${styles.noCard} ${className ? className : ""}`} {...props}>
      <p className={`text-medium ${styles.borderBottom}`}>{name}</p>

      <Button>{children}</Button>
    </article>
  );
};
