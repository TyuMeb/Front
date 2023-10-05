"use client";

import { DotsIcon } from "@src/components/shared/ui/icons/dots-icon/dots-icon";
import styles from "./orderitem.module.scss";
import { Button } from "@src/components/shared/ui/button/button";
import { GreenMarkIcon } from "@src/components/shared/ui/icons/green-mark-icon/green-mark-icon";
import { RedMarkIcon } from "@src/components/shared/ui/icons/red-mark-icon/red-mark-icon";
import { RightArrowIcon } from "@src/components/shared/ui/icons/right-arrow-icon/right-arrow-icon";

const OrderItem = () => {
    return (
        <div className={styles.ordersmain}>
            <article className={styles.order}>
                <section className={styles.head}>
                    <div className={styles.worker}>
                        <RedMarkIcon />
                        <p>Исполнитель 2</p>
                        <DotsIcon />
                    </div>
                    <div className={styles.workerlimit}>
                        <p>Срок исполнения: 45-50 дней</p>
                        <p>Стоимость: от 120 000 руб</p>
                    </div>
                </section>
                <div className={styles.message}>
                    <p>
                        Добрый день! Присылаю варианты и фотографии. Если есть...Добрый день! Присылаю варианты и <br />
                        hjgfkdgndgfnk...Добрый день! Присылаю варианты и фотографии. Если есть...Добрый день! Присылаю
                        варианты и <br />
                        hjgfkdgndgfnk...
                    </p>
                    <p className={styles.text}>посмотреть весь текст сообщения</p>
                </div>
                <div className={styles.orderinfo}>
                    <ul className={styles.list}>
                        <li className={styles.gallery}></li>
                        <li className={styles.gallery}></li>
                        <li className={styles.gallery}></li>
                        <RightArrowIcon />
                    </ul>
                    <div className={styles.butt}>
                        <Button onClick={() => {}}>Перейти в чат</Button>
                    </div>
                </div>
            </article>
            <article className={styles.order}>
                <section className={styles.head}>
                    <div className={styles.worker}>
                        <GreenMarkIcon />
                        <div>Исполнитель 1</div>
                        <DotsIcon />
                    </div>
                    <div className={styles.workerlimit}>
                        <p>Срок исполнения: 45-50 дней</p>
                        <p>Стоимость: от 100 000 руб</p>
                    </div>
                </section>
                <div className={styles.orderinfo}>
                    <div className={styles.message}>
                        <p>
                            Хорошо, посчитаю и вечером приХорошо, посчитаю и вечером <br />
                            пришлюшлюХорошо, посчитаю и вечером приХорошо, посчитаю и вечером пришлюшлю <br />
                        </p>
                        <p className={styles.text}>посмотреть весь текст</p>
                    </div>
                    <div className={styles.butt}>
                        <Button onClick={() => {}}>Перейти в чат</Button>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default OrderItem;
