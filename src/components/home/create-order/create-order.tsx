"use client";

import { Button } from "@/components/ui/button/button";

import styles from "./create-order.module.scss";

export const CreateOrder = () => {
    return (
        <div className={styles.inner}>
            <p className={styles.paragraph}>Хотите сделать заказ сейчас? Мы ждем вас на ВайВи!</p>
            <Button onClick={() => {}}>Сделать заказ</Button>
        </div>
    );
};

