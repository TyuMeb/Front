"use client";

import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./performer-card.module.scss";
import "src/components/account/wrapper-card/wrapper-card.module.scss";
import { Button } from "src/components/shared/ui/button/button";
import WrapperCard from "src/components/account/wrapper-card";
import { Icon } from "src/components/icon";

const cx = classNames.bind(styles);

interface PerformerCardI {
    name: string;
    termOfExecution: string;
    cost: number;
    showGallery: boolean;
}

// Пока как заглушка. Не приходит с бэка. Нужна реализация сокетов.
const DESCRIPTION = `
    Продавец: Здравствуйте! Как я могу Вам помочь?
    Покупатель: Добрый день! Я хочу купить новую мебель для своей квартиры.
    Продавец: Конечно, мы имеем широкий выбор мебели в нашем магазине. Что именно Вы ищете?
    Покупатель: Меня интересуют кресла и столы для гостиной.
    Продавец: Отличная идея! У нас есть множество вариантов различных стилей и цветов. Например, у нас есть современные кресла из кожи или мягкой ткани. А также прочные деревянные столы.
    Покупатель: Спасибо за информацию. Могу ли я посмотреть их более подробно?
    Продавец: Конечно, давайте перейдем в отдел мебели. Там Вы можете ознакомиться со всеми моделями и проверить качество материалов.
    Покупатель: Хорошо, я буду рад этому.
    Продавец: Если у Вас возникнут какие-либо вопросы или нужна помощь при выборе, не стесняйтесь обращаться ко мне.
    Покупатель: Благодарю Вас за помощь. Я думаю, что найду то, что мне нужно.
    Продавец: Рад услужить! Будьте свободны вернуться, если у Вас поя
`;

const PerformerCard = ({ performer }: { performer: PerformerCardI }) => {
    const { name, termOfExecution, cost, showGallery } = performer;

    const [showText, setShowText] = useState(true);

    const showTextHandler = () => setShowText(!showText);

    return (
        <WrapperCard>
            <div className={styles.wrapperText}>
                <div className={styles.workerInfo}>
                    <span className={styles.avatar} />
                    <h2 className={styles.header}>{name}</h2>
                    <button className={styles.wrapperDots}>
                        <span className={styles.buttonDots} />
                    </button>
                </div>

                <div className={styles.orderInfo}>
                    <p className={`${styles.text} ${styles.fontWeightBold}`}>
                        Срок исполнения: &nbsp;
                        {termOfExecution}
                        &nbsp; дней
                    </p>
                    <p className={`${styles.text} ${styles.fontWeightBold}`}>
                        Стоимость: от &nbsp;
                        {cost}
                        &nbsp; руб
                    </p>
                </div>
            </div>

            <div className={cx("wrapperDialog", { wrapperGrid: !showGallery })}>
                <p className={cx("text", "textPosition", { hiddenText: showText })}>{DESCRIPTION}</p>

                <button className={cx("buttonExpand", { removeMargins: !showGallery })} onClick={showTextHandler}>
                    <p className={`${styles.text} ${styles.fontWeightBold}`}>Посмотреть весь текст</p>
                </button>

                {showGallery && (
                    <ul className={styles.gallery}>
                        <button className={styles.buttonSwitch}>
                            <Icon glyph="arrowLeft" />
                        </button>
                        <li className={styles.item}></li>
                        <li className={styles.item}></li>
                        <li className={styles.item}></li>
                        <button className={styles.buttonSwitch}>
                            <Icon glyph="arrowLeft" transform="rotate(180)" />
                        </button>
                    </ul>
                )}

                <Button className={cx("button", { addMargins: !showGallery })} onClick={() => {}}>
                    Перейти в чат
                </Button>
            </div>
        </WrapperCard>
    );
};

export default PerformerCard;