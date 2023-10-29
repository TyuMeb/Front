"use client";

import styles from "./help.module.scss";

const Help = () => {
    return (
        <div className={styles.ordersmain}>
            <article className={styles.order}>
                <section className={styles.head}>
                    <p>Чат с поддержкой (ответ может занимать до 24ч)</p>
                </section>
                <div className={styles.textinput}>Написать сообщение</div>
            </article>
        </div>
    );
};

export default Help;
