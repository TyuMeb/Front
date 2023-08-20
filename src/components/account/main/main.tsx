"use client";

import styles from "./main.module.scss";

import { Button } from "@src/components/shared/ui/button/button";

const Main = () => {
    return (
        <>
            {/* условие "если есть заказы" orderList.lenght > 0 ? (
            <ul className={styles.orderHistory}>
                {orderList.map((item, index) => {
                    return (
                        <OrderHistoryItem key={index} item={item} index={index} />
                    );
                }))
            </ul>
        ) : ( */}
            {/* условие "если нет заказов" */}
            <div className={styles.main}>
                <p className={styles.description}>
                    У вас пока нет заказов. Но вы всегда можете исправить это, создав его
                </p>
                <Button onClick={() => {}}>Сделать заказ</Button>
            </div>
        </>
    );
};

export default Main;
