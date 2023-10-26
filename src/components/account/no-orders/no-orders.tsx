"use client";

import styles from "./no-orders.module.scss";
import { Button } from "@src/shared/ui/button/button";

const NoOrders = () => {
    return (
        <article className={styles.noOrders}>
            <p className={styles.description}>У вас пока нет заказов. Но вы всегда можете исправить это, создав его</p>
            <Button onClick={() => {}}>Сделать заказ</Button>
        </article>
    );
};

export default NoOrders;
