"use client";

import styles from "./how-works.module.scss";

import { Step } from "@src/components/shared/ui/step/step";
import step1 from "@public/home/step1.jpg";
import step2 from "@public/home/step2.jpg";
import step3 from "@public/home/step3.jpg";
import step4 from "@public/home/step4.jpg";

export const HowWorks = () => {
    return (
        <section className={styles.inner} id="howWorks">
            <h2 className={styles.title}>Как это работает?</h2>
            <div className={styles.steps}>
                <Step title="Заполните заявку онлайн" num={1} imgSrc={step1}>
                    расскажите нам о пожеланиях: цвет, материал, особенности, чтобы мы удовлетворили ваши запросы
                </Step>
                <Step title="Сосредоточьтесь на своих делах" num={2} imgSrc={step2}>
                    остальное предоставьте нам
                </Step>
                <Step title="Получите предложения через 24 часа" num={3} imgSrc={step3}>
                    исполнители пришлют вам дизайн, смету и описание
                </Step>
                <Step title="Выберите исполнителя" num={4} imgSrc={step4}>
                    и через время наслаждайтесь новой мебелью
                </Step>
            </div>
        </section>
    );
};
