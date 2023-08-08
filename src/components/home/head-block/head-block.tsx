"use client";

import styles from "./head-block.module.scss";

import { Button } from "@src/components/shared/ui/button/button";

export const HeadBlock = () => {
    return (
        <section id="banner">
            <div className={styles.banner}>
                <div className="container">
                    <h1 className={styles.title}>Создайте свой идеальный дом</h1>
                    <p className={styles.description}>
                        Сделайте заказ прямо сейчас, и мы подберём вам лучшие предложения за 24 часа
                    </p>
                    <Button onClick={() => {}}>Сделать заказ</Button>
                </div>
            </div>
        </section>
    );
};
