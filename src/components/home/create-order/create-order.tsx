"use client";

import { Button } from "@src/shared/ui/button";
import styles from "./create-order.module.scss";
import Link from "next/link";

export const CreateOrder = () => {
    return (
        <div className={styles.inner}>
            <p className={styles.paragraph}>Хотите сделать заказ сейчас? Мы ждем вас на ВайВи!</p>

            <Link href="/order">
                <Button>Сделать заказ</Button>
            </Link>
        </div>
    );
};
