"use client";

import Image from "next/image";
import styles from "./advantages.module.scss";
import behefitsImage from "@public/home/behefits-image.jpg";
import { CardAdvantages } from "@src/shared/ui/card-advantages";

export const Advantages = () => {
    return (
        <section className={styles.inner} id="advantages">
            <h2 className={`title-h2 ${styles.title}`}>Наши преимущества</h2>
            <div className={styles.block}>
                <div className={styles.cards}>
                    <CardAdvantages
                        title="Быстро"
                        bgColor="bgScramble"
                        paragraph="Предложения попадут к вам ровно через 24 часа после того, как вы нажмёте кнопку отправить"
                        glyphIcon="clock"
                    />
                    <CardAdvantages
                        title="Удобно"
                        bgColor="bgSand"
                        paragraph="Вы оставляете заявку и всё. Больше не надо посещать салоны, чтобы сравнить цены и дизайн-концепты"
                        glyphIcon="settingsLanding"
                    />
                    <CardAdvantages
                        title="Бесплатно"
                        bgColor="bgLatte"
                        paragraph="Не платите за предложения исполнителей, для вас ВайВи бесплатен"
                        glyphIcon="dollar"
                    />
                    <CardAdvantages
                        title="Качественно"
                        bgColor="bgLightLatte"
                        paragraph="Наши исполнители дают гарантию, что вы получите тот продукт, который заказывали"
                        glyphIcon="person"
                    />
                </div>
                <Image src={behefitsImage} alt="behefits-image" className={styles.image} />
            </div>
        </section>
    );
};
