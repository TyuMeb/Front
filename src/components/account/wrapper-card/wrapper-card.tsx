"use client";

import React, { HTMLAttributes } from "react";

import styles from "./wrapper-card.module.scss";

interface OrderI extends HTMLAttributes<HTMLDivElement> {}

const WrapperCard = ({ children, className, ...props }: OrderI) => (
    <article className={`${styles.order} ${className}`} {...props}>
        {children}
    </article>
);

export default WrapperCard;
