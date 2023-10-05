"use client";

import styles from "./dialog.module.scss";
import { Button } from "@src/components/shared/ui/button/button";
import { GreenMarkIcon } from "@src/components/shared/ui/icons/green-mark-icon/green-mark-icon";
import { RedMarkIcon } from "@src/components/shared/ui/icons/red-mark-icon/red-mark-icon";
import { GreenCheckIcon } from "@src/components/shared/ui/icons/green-check-icon/green-check-icon";

const Dialog = () => {
    return (
        <div className={styles.ordersmain}>
            <article className={styles.order}>
                <section className={styles.head}>
                    <div className={styles.general}>
                        <div className={styles.headup}>
                            <div className={styles.worker}>
                                <GreenMarkIcon />
                                <p>Чат с Исполнителем 1</p>
                            </div>
                            <div className={styles.workerlimit}>
                                <p>Полка настенная</p>
                                <p>Срок исполнения: 45-50 дней</p>
                                <p>Стоимость: от 100 000 руб</p>
                            </div>
                        </div>
                        <Button onClick={() => {}}>Выбрать этого исполнителя</Button>
                    </div>
                </section>
                <div className={styles.orderinfo}>
                    <GreenMarkIcon />
                    <div className={styles.gallerist}>
                        <div className={styles.message}>
                            Добрый день! Присылаю варианты и фотографии. Если есть...Добрый <br />
                            день! Присылаю варианты и hjgfkdgndgfnk...
                        </div>
                        <ul className={styles.list}>
                            <li className={styles.gallery}></li>
                            <li className={styles.gallery}></li>
                            <li className={styles.gallery}></li>
                        </ul>
                    </div>
                    23:12
                </div>
                <div className={styles.dataref}>
                    <GreenCheckIcon />
                    23:12
                    <div className={styles.ask}>
                        <div className={styles.reference}>
                            <div className={styles.client}>
                                Исполнитель 1 <br />
                                Lorem ipsum dolor sit amet, consectetur...
                            </div>
                        </div>
                        <div className={styles.answer}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                        </div>
                    </div>
                    <RedMarkIcon />
                </div>
                <div className={styles.textinput}>Написать сообщение</div>
            </article>
        </div>
    );
};

export default Dialog;
