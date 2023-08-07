"use client";

import Image from "next/image";
import styles from "./advantages.module.scss";
import behefitsImage from "@public/home/behefits-image.jpg";

import { CardAdvantages } from "@src/components/shared/ui/card-advantages/card-advantages";

export const Advantages = () => {
    return (
        <div className={styles.inner}>
            <h2 className={["title-h2", styles.title].join(" ")}>Наши преимущества</h2>
            <div className={styles.block}>
                <div className={styles.cards}>
                    <CardAdvantages
                        title="Быстро"
                        bgColor="bgScramble"
                        paragraph="Предложения попадут к вам ровно через 24 часа после того, как вы нажмёте кнопку отправить"
                        src="/home/clock.svg"
                        alt="clock-logo"
                        width={53}
                        height={56}
                    />
                    <CardAdvantages
                        title="Удобно"
                        bgColor="bgSand"
                        paragraph="Вы оставляете заявку и всё. Больше не надо посещать салоны, чтобы сравнить цены и дизайн-концепты"
                        src="/home/settings.svg"
                        alt="settings-logo"
                        width={51}
                        height={56}
                    />
                    <CardAdvantages
                        title="Бесплатно"
                        bgColor="bgLatte"
                        paragraph="Не платите за предложения исполнителей, для вас ВайВи бесплатен"
                        src="/home/dollar.svg"
                        alt="dollar-logo"
                        width={53}
                        height={53}
                    />
                    <CardAdvantages
                        title="Качественно"
                        bgColor="bgLightLatte"
                        paragraph="Наши исполнители дают гарантию, что вы получите тот продукт, который заказывали"
                        src="/home/person.svg"
                        alt="person-logo"
                        width={38}
                        height={51}
                    />
                </div>
                <Image src={behefitsImage} alt="behefits-image" className={styles.image} />
            </div>
        </div>
    );
};
