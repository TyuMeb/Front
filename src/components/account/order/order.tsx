"use client";

import React from "react";
import Image from "next/image";
import image from "public/account/desk.jpg";

import styles from "./order.module.scss";
import { Button } from "@src/shared/ui/button/button";
import { ArrowLeftIcon } from "@src/shared/ui/icons/arrow-left-icon/arrow-left-icon";

interface DescriptionI {
    date: string;
    status: string;
    countOffer: number;
}

interface OrderI {
    title: string;
    notOffer: boolean;
    description: DescriptionI;
}

const Order = ({ title, notOffer, description, ...props }: OrderI) => {
    const { date, status, countOffer } = description;

    return (
        <article className={styles.order} {...props}>
            <div className={styles.wrapperText}>
                <h2 className={styles.header}>{title}</h2>
                {notOffer && (
                    <p className={`${styles.text} ${styles.colorPink} ${styles.textBold}`}>
                        К сожалению, никто не выбрал ваш заказ. Попробуйте его изменить и создать заново.
                    </p>
                )}
            </div>

            <div className={styles.wrapper}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <p className={styles.text}>
                            <span className={styles.decor}>Дата заказа:</span>
                        </p>
                        <time className={styles.text}>{date}</time>
                    </li>
                    <li className={styles.item}>
                        <p className={`${styles.text}`}>
                            <span className={styles.decor}>Статус заказа:</span>
                        </p>
                        <p className={styles.text}>{status}</p>
                    </li>
                    <li className={styles.item}>
                        <p className={`${styles.text}`}>
                            <span className={styles.decor}>Предложения:</span>
                        </p>
                        <p className={`${styles.text} ${styles.textBold}`}>
                            {countOffer} {!notOffer && `предложения`}
                        </p>
                    </li>
                </ul>

                <div className={styles.wrapperGallery}>
                    <button className={styles.button}>
                        <ArrowLeftIcon />
                    </button>
                    <Image src={image} width={288} height={148} loading="lazy" quality={100} alt="Картинка" />
                    <button className={styles.button}>
                        <ArrowLeftIcon />
                    </button>
                </div>
            </div>
            {notOffer && (
                <div className={styles.wrapperButton}>
                    <Button onClick={() => {}}>Повторить заказ</Button>
                </div>
            )}
        </article>
    );
};

export default Order;
