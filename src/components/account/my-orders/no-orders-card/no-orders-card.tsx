"use client";

import styles from "./no-orders-card.module.scss";
import { Button } from "@src/shared/ui/button";

export const NoOrdersCard = () => {
    return (
        <article className={styles.noOrders}>
            <p className={`text-medium ${styles.borderBottom}`}>
                У вас пока нет заказов. Но вы всегда можете исправить это, создав его
            </p>
            <Button>
                <p className="text-medium">Сделать заказ</p>
            </Button>
        </article>
    );
};
