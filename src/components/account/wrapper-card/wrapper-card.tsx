"use client";

import React, { HTMLAttributes } from "react";

import styles from "./wrapper-card.module.scss";

type OrderT = {} & HTMLAttributes<HTMLDivElement>;

export const WrapperCard = ({ children, className, ...props }: OrderT) => (
    <article className={`${styles.card} ${className}`} {...props}>
        {children}
    </article>
);
