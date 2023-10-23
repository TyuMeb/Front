"use client";

import React, { HTMLAttributes } from "react";

import styles from "./wrapper-card.module.scss";

interface OrderI extends HTMLAttributes<HTMLDivElement> {}

const WrapperCard = ({ children }: OrderI) => <article className={styles.order}>{children}</article>;

export default WrapperCard;
