"use client";

import styles from "./myorders.module.scss";
import { Button } from "@src/components/shared/ui/button/button";

const MyOrders = () => {
    return (
        <div className={styles.ordersmain}>
            <article className={styles.noorders}>
                <p className={styles.description}>
                    У вас пока нет заказов. Но вы всегда можете исправить это, создав его
                </p>
                <Button onClick={() => {}}>Сделать заказ</Button>
            </article>
            <article className={styles.order}>
                <section className={styles.head}>
                    <p>Полка настенная</p>
                </section>
                <div className={styles.orderinfo}>
                    <ul className={styles.list}>
                        <li className={styles.params}>Дата заказа: 24.04.2024</li>
                        <li className={styles.params}>Статус заказа: сбор предложений окончен </li>
                        <li className={styles.params}>Предложения: 4 предложения</li>
                    </ul>
                    <section className={styles.gallery}></section>
                </div>
            </article>
            <article className={styles.order}>
                <section className={styles.head}>
                    <p>Комод</p>
                    <p className={styles.decline}>
                        К сожалению, никто не выбрал ваш заказ. Попробуйте его изменить и создать заново.
                    </p>
                </section>
                <div className={styles.orderinfo}>
                    <ul className={styles.list}>
                        <li className={styles.params}>Дата заказа: 24.04.2024</li>
                        <li className={styles.params}>Статус заказа: сбор предложений окончен </li>
                        <li className={styles.params}>Предложения: 0</li>
                        <Button onClick={() => {}}>Повторить заказ</Button>
                    </ul>
                    <section className={styles.gallery}></section>
                </div>
            </article>
        </div>
    );
};

export default MyOrders;
