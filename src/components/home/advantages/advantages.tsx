"use client";

import styles from "./advantages.module.scss";

import { CardAdvantages } from "@/components/ui/card-advantages/card-advantages";

export const Advantages = () => {
    return (
        <div className={styles.inner}>
            <h2 className={styles.title}>Наши преимущества</h2>
            <div className={styles.block}>
                <div className={styles.cards}>
                    <CardAdvantages
                        title="Быстро"
                        bgColor="#FFFAEE"
                        paragraph="Предложения попадут к вам ровно через 24 часа после того, как вы нажмёте кнопку отправить"
                        src="/home/clock.svg"
                        alt="clock-logo"
                        width={53}
                        height={56}
                    />
                    <CardAdvantages
                        title="Удобно"
                        bgColor="#FFF2CC"
                        paragraph="Вы оставляете заявку и всё. Больше не надо посещать салоны, чтобы сравнить цены и дизайн-концепты"
                        src="/home/settings.svg"
                        alt="settings-logo"
                        width={51}
                        height={56}
                    />
                    <CardAdvantages
                        title="Бесплатно"
                        bgColor="#EAE5E1"
                        paragraph="Не платите за предложения исполнителей, для вас ВайВи бесплатен"
                        src="/home/dollar.svg"
                        alt="dollar-logo"
                        width={53}
                        height={53}
                    />
                    <CardAdvantages
                        title="Качественно"
                        bgColor="#F5F3F1"
                        paragraph="Наши исполнители дают гарантию, что вы получите тот продукт, который заказывали"
                        src="/home/person.svg"
                        alt="person-logo"
                        width={38}
                        height={51}
                    />
                </div>
                <div className={styles.image}></div>
            </div>
        </div>
    );
};

