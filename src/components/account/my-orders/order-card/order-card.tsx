"use client";

import React, { HTMLAttributes } from "react";

import styles from "./order-card.module.scss";
import { Button } from "@src/shared/ui/button";
import { WrapperCard } from "@src/components/account/wrapper-card";

type DescriptionProps = {
    date: string;
    status: string;
    countOffer: number;
};

type OrderProps = {
    title: string;
    notOffer?: boolean;
    description: DescriptionProps;
} & HTMLAttributes<HTMLDivElement>;

export const OrderCard = ({ title, notOffer, description, children, ...props }: OrderProps) => {
    const { date, status, countOffer } = description;

    return (
        <WrapperCard {...props}>
            <div className="wrapperText">
                <h2 className="subtitle2">{title}</h2>
                {notOffer && (
                    <p className={`text-small-semibold ${styles.colorPink}`}>
                        К сожалению, никто не выбрал ваш заказ. Попробуйте его изменить и создать заново.
                    </p>
                )}
            </div>

            <div className={styles.wrapper}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <p className="text-small">
                            <span className={styles.decor}>Дата заказа:</span>
                        </p>
                        <time className="text-small">{date}</time>
                    </li>
                    <li className={styles.item}>
                        <p className="text-small">
                            <span className={styles.decor}>Статус заказа:</span>
                        </p>
                        <p className="text-small">{status}</p>
                    </li>
                    <li className={styles.item}>
                        <p className="text-small">
                            <span className={styles.decor}>Предложения:</span>
                        </p>
                        <p className="text-small-semibold">
                            {countOffer} {!notOffer && `предложения`}
                        </p>
                    </li>
                </ul>

                {children}
            </div>

            {notOffer && (
                <Button className={styles.wrapperButton} onClick={() => {}}>
                    Повторить заказ
                </Button>
            )}
        </WrapperCard>
    );
};
