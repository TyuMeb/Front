"use client";

import Image from "next/image";
import styles from "./about.module.scss";
import about from "@public/home/about.jpg";

export const About = () => {
    return (
        <section className={styles.inner} id="about">
            <div className={styles.left__card}>
                <h2 className={`title-h2 ${styles.title}`}>О проекте</h2>
                <p className={styles.description}>
                    Why we? ВайВи — это оригинальный маркетплейс корпусной мебели, а ещё забота о клиентах. Наша миссия
                    в том, чтобы вы получали качественные продукты по выгодным условиям. Для этого мы собрали базу
                    исполнителей, у которых есть свои мебельные студии и опыт работы. Каждого исполнителя мы проверили
                    лично. Мы верим, что наш сервис поможет сделать ваш дом уютнее, а вас счастливее.
                </p>
            </div>
            <Image src={about} alt={"about-image"} className={styles.right__card} />
        </section>
    );
};
