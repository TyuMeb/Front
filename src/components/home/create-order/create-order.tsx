"use client";

import { Button } from "@src/shared/ui/button";
import styles from "./create-order.module.scss";

export const CreateOrder = () => {
    return (
        <div className={styles.inner}>
            <p className={styles.paragraph}>Хотите сделать заказ сейчас? Мы ждем вас на ВайВи!</p>
            <Button
                onClick={function (): void {
                    throw new Error("Function not implemented.");
                }}>
                Сделать заказ
            </Button>
        </div>
    );
};
