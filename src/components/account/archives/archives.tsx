"use client";

import styles from "./archives.module.scss";
// import { Button } from "@src/components/shared/ui/button/button";

const Archives = () => {
    return (
        <div className={styles.ordersmain}>
            {/* <article className={styles.noorders}>
                <p className={styles.description}>
                    У вас пока нет заказов. Но вы всегда можете исправить это, создав его
                </p>
                <Button onClick={() => {}}>Сделать заказ</Button>
            </article> */}
            <article className={styles.order}>
                <section className={styles.head}>
                    <p>Полка настенная</p>
                </section>
                <div className={styles.orderinfo}>
                    <ul className={styles.list}>
                        <li className={styles.params}>Дата заказа: 24.04.2024</li>
                        <li className={styles.params}>Статус заказа: закрыт </li>
                        <li className={styles.params}>Предложения: 4 предложения</li>
                    </ul>
                    <section className={styles.gallery}></section>
                </div>
            </article>
            <article className={styles.order}>
                <section className={styles.head}>
                    <p>Шкаф</p>
                </section>
                <div className={styles.orderinfo}>
                    <ul className={styles.list}>
                        <li className={styles.params}>Дата заказа: 24.04.2024</li>
                        <li className={styles.params}>Статус заказа: закрыт </li>
                        <li className={styles.params}>Предложения: 4 предложения</li>
                    </ul>
                    <section className={styles.gallery}></section>
                </div>
            </article>
        </div>
    );
};

export default Archives;
