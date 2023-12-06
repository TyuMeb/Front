"use client";

import React, { HTMLAttributes } from "react";
import Image from "next/image";
import image from "public/account/desk.jpg";

import styles from "./order-card.module.scss";
import { Button } from "@src/shared/ui/button";
import { Icon } from "src/components/icon";
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

export const OrderCard = ({ title, notOffer, description, ...props }: OrderProps) => {
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

                <div className={styles.wrapperGallery}>
                    <button className={styles.button}>
                        <Icon glyph="arrowLeft" />
                    </button>
                    <Image
                        className={styles.borderRadius}
                        src={image}
                        width={288}
                        height={148}
                        loading="lazy"
                        quality={100}
                        alt="Картинка"
                    />
                    <button className={styles.button}>
                        <Icon glyph="arrowLeft" transform="rotate(180)" />
                    </button>
                </div>
            </div>
            {notOffer && (
                <Button className={styles.wrapperButton} onClick={() => {}}>
                    Повторить заказ
                </Button>
            )}
        </WrapperCard>
    );
};
