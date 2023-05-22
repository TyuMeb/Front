"use client";

import { Button } from "@/components/UI/button/button";
import styles from "./page.module.scss";
import clsx from "clsx";
import { Open_Sans, Raleway } from "next/font/google";
import Image from "next/image";
import aboutImg from "../assets/images/about.jpg";
import stepImg from "../assets/images/image.jpg";
import { Step } from "@/components/UI/step/step";

const openSans = Open_Sans({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
    return (
        <main>
            <div className={styles.banner}>
                <div className={styles.box}>
                    <div>
                        <h1 className={clsx(raleway.className, "h1")}>Создайте свой идеальный дом</h1>
                        <p className={clsx(openSans.className, styles.p)}>
                            Сделайте заказ прямо сейчас, и мы подберём вам лучшие предложения за 24 часа
                        </p>
                        <Button onClick={() => {}}>Сделать заказ</Button>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.info, styles.box)}>
                <div className={styles.about}>
                    <div className={clsx(styles.about__content, styles.round)}>
                        <h2 className="h2">О проекте</h2>
                        <p>
                            Why we? ВайВи — это оригинальный маркетплейс корпусной мебели, а ещё забота о клиентах. Наша
                            миссия в том, чтобы вы получали качественные продукты по выгодным условиям. Для этого
                            мы собрали базу исполнителей, у которых есть свои мебельные студии и опыт работы. Каждого
                            исполнителя мы проверили лично. Мы верим, что наш сервис поможет сделать ваш дом уютнее,
                            а вас счастливее.
                        </p>
                    </div>
                    <Image className={styles.round} src={aboutImg} alt="" width={492} height={313} />
                </div>
                <div>
                    <h2 className="h2">Как это работает?</h2>
                    <div className={styles.steps}>
                        <Step title="Заполните заявку онлайн" num={1} imgSrc={stepImg}>
                            расскажите нам о пожеланиях: цвет, материал, особенности, чтобы мы удовлетворили ваши
                            запросы
                        </Step>
                        <Step title="Сосредоточьтесь на своих делах" num={2} imgSrc={stepImg}>
                            остальное предоставьте нам
                        </Step>
                        <Step title="Получите предложения через 24 часа" num={3} imgSrc={stepImg}>
                            исполнители пришлют вам дизайн, смету и описание
                        </Step>
                        <Step title="Выберите исполнителя" num={4} imgSrc={stepImg}>
                            и через время наслаждайтесь новой мебелью
                        </Step>
                    </div>
                </div>
            </div>
        </main>
    );
}
