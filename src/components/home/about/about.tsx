"use client";

import styles from "./about.module.scss";

export const About = () => {
    return (
        <div className={styles.inner}>
            <div className={styles.left__card}>
                <h2 className={styles.title}>О проекте</h2>
                <p className={styles.description}>
                    Why we? ВайВи — это оригинальный маркетплейс корпусной мебели, а ещё забота о клиентах. Наша миссия
                    в том, чтобы вы получали качественные продукты по выгодным условиям. Для этого мы собрали базу
                    исполнителей, у которых есть свои мебельные студии и опыт работы. Каждого исполнителя мы проверили
                    лично. Мы верим, что наш сервис поможет сделать ваш дом уютнее, а вас счастливее.
                </p>
            </div>
            <div className={styles.right__card} />
        </div>
    );
};

