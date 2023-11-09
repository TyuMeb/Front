"use client";

import styles from "./no-orders-card.module.scss";
import { Button } from "@src/shared/ui/button";

const NoOrdersCard = () => {
    return (
        <article className={styles.noOrders}>
            <p className={`${styles.text} ${styles.description}`}>
                У вас пока нет заказов. Но вы всегда можете исправить это, создав его
            </p>
            <Button>
                <p className={styles.text}>Сделать заказ</p>
            </Button>
        </article>
    );
};

export default NoOrdersCard;
