"use client";

import styles from "./order-chat/orderchat.module.scss";
import { Button } from "@src/components/shared/ui/button/button";

const OrderItem = () => {
    return (
        <div className={styles.ordersmain}>
            <article className={styles.order}>
                <section className={styles.head}>
                    <div className={styles.worker}>
                        <p>Исполнитель 2</p>
                    </div>
                    <div className={styles.workerlimit}>
                        <p>Срок исполнения: 45-50 дней</p>
                        <p>Стоимость: от 120 000 руб</p>
                    </div>
                </section>
                <div className={styles.message}>
                    <p>
                        Добрый день! Присылаю варианты и фотографии. Если есть...Добрый день! Присылаю варианты и
                        hjgfkdgndgfnk...
                    </p>
                    <p className={styles.text}>посмотреть весь текст сообщения</p>
                </div>
                <div className={styles.orderinfo}>
                    <ul className={styles.list}>
                        <li className={styles.gallery}></li>
                        <li className={styles.gallery}></li>
                        <li className={styles.gallery}></li>
                    </ul>
                    <Button onClick={() => {}}>Перейти в чат</Button>
                </div>
            </article>
            <article className={styles.order}>
                <section className={styles.head}>
                    <div className={styles.worker}>
                        <p>Исполнитель 1</p>
                    </div>
                    <div className={styles.workerlimit}>
                        <p>Полка настенная</p>
                        <p>Срок исполнения: 45-50 дней</p>
                        <p>Стоимость: от 100 000 руб</p>
                    </div>
                </section>
                <div className={styles.orderinfo}>
                    <div className={styles.message}>
                        <p>Хорошо, посчитаю и вечером пришлю</p>
                        <p className={styles.text}>посмотреть весь текст</p>
                    </div>
                    <Button onClick={() => {}}>Перейти в чат</Button>
                </div>
            </article>
        </div>
    );
};

export default OrderItem;
