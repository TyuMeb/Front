"use client";

import React, { HTMLAttributes } from "react";

import styles from "./card.module.scss";

type CardProps = {} & HTMLAttributes<HTMLDivElement>;

export const Card = ({ children, className, ...props }: CardProps) => (
  <article className={`${styles.card} ${className ? className : ""}`} {...props}>
    {children}
  </article>
);
