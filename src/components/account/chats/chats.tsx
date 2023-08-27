"use client";

import styles from "./chats.module.scss";
import { Button } from "@src/components/shared/ui/button/button";

const Chats = () => {
    return (
        <div className={styles.ordersmain}>
            <article className={styles.order}>
                <section className={styles.head}>
                    <p>Исполнитель 1</p>
                    <p>Срок исполнения: 45-50 дней</p>
                    <p>Стоимость: от 120 000 руб</p>
                </section>
                <div className={styles.orderinfo}>
                    <p>
                        Добрый день! Присылаю варианты и фотографии. Добрый день! Присылаю варианты и фотографии.Добрый
                        день! Присылаю варианты и фотографии.Добрый день! Присылаю варианты и фотографии.
                    </p>
                    <p>посмотреть весь текст сообщения</p>
                    <ul className={styles.list}>
                        <li className={styles.gallery}> </li>
                        <li className={styles.gallery}></li>
                        <li className={styles.gallery}></li>
                        <Button onClick={() => {}}>Перейти в чат</Button>
                        {/* <li className={styles.params}>Предложения: 4 предложения</li> */}
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

export default Chats;
