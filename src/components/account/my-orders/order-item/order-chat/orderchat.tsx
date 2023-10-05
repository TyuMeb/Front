"use client";

import styles from "../order-chat/orderchat.module.scss";
import { Button } from "@src/components/shared/ui/button/button";
import { GreenMarkIcon } from "@src/components/shared/ui/icons/green-mark-icon/green-mark-icon";

const OrderChat = () => {
    return (
        <div className={styles.ordersmain}>
            <article className={styles.order}>
                <section className={styles.head}>
                    <div className={styles.worker}>
                        <GreenMarkIcon />
                        <p>Чат с Исполнителем 1</p>
                    </div>
                    <div className={styles.workerlimit}>
                        <p>Полка настенная</p>
                        <p>Срок исполнения: 45-50 дней</p>
                        <p>Стоимость: от 100 000 руб</p>
                    </div>
                </section>
                <Button onClick={() => {}}>Выбрать этого исполнителя</Button>
                <div className={styles.orderinfo}>
                    <ul className={styles.list}>
                        <GreenMarkIcon />
                        <li className={styles.gallery}></li>
                        <li className={styles.gallery}></li>
                        <li className={styles.gallery}></li>
                    </ul>
                </div>
                <div className={styles.message}>
                    <p>
                        Добрый день! Присылаю варианты и фотографии. Если есть...Добрый <br />
                        день! Присылаю варианты и hjgfkdgndgfnk...
                    </p>
                </div>
                инпут текста
            </article>
        </div>
    );
};

export default OrderChat;
