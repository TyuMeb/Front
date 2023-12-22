"use client";

import React, { HTMLAttributes } from "react";

import styles from "./wrapper-card.module.scss";

type OrderProps = {} & HTMLAttributes<HTMLDivElement>;

export const WrapperCard = ({ children, className, ...props }: OrderProps) => (
    <article className={`${styles.card} ${className}`} {...props}>
        {children}
    </article>
);
