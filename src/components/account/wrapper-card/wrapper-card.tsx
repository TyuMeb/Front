"use client";

import React, { HTMLAttributes } from "react";

import styles from "./wrapper-card.module.scss";

type OrderType = {} & HTMLAttributes<HTMLDivElement>;

const WrapperCard = ({ children, className, ...props }: OrderType) => (
    <article className={`${styles.order} ${className}`} {...props}>
        {children}
    </article>
);

export default WrapperCard;
