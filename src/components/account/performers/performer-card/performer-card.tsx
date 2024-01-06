"use client";

import React, { useId, useState } from "react";
import Image, { StaticImageData } from "next/image";

import classNames from "classnames/bind";
import styles from "./performer-card.module.scss";
import "./performer-card.module.scss";
import { Button } from "src/shared/ui/button";
import { Card } from "@src/components/account/card";
import { SliderUser } from "@src/shared/ui/slider-user";
import { PerformersProps } from "@src/shared/data/customer-account";
import Link from "next/link";

const cx = classNames.bind(styles);

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

export const PerformerCard = ({ performer }: { performer: PerformersProps }) => {
    const { termOfExecution, price, images } = performer;

    const id = useId();

    const [showText, setShowText] = useState(true);
    const showTextHandler = () => setShowText(!showText);

    const renderSlider = (images: StaticImageData[], alt: string) => {
        return (
            <SliderUser className={styles.slider} spacing={8} itemsToShow={3}>
                {images.map((image, i) => {
                    return (
                        <div key={`${id}-${i}`} className="keen-slider__slide">
                            <Image src={image} alt={alt} className={styles.sliderImage} />
                        </div>
                    );
                })}
            </SliderUser>
        );
    };

    return (
        <Card>
            <div className="wrapperHead">
                <div className={styles.workerInfo}>
                    <span className={styles.avatar} />
                    <h2 className="subtitle2">Исполнитель {performer.id}</h2>
                    <button className={styles.wrapperDots}>
                        <span className={styles.buttonDots} />
                    </button>
                </div>

                <div className={styles.orderInfo}>
                    <p className="text-small-semibold">
                        Срок исполнения: &nbsp;
                        {termOfExecution}
                        &nbsp; дней
                    </p>
                    <p className="text-small-semibold">
                        Стоимость: от &nbsp;
                        {price}
                        &nbsp; руб
                    </p>
                </div>
            </div>

            <div className={cx("wrapperDialog", { wrapperGrid: !images.length })}>
                <p className={cx("text-small", "textPosition", { hiddenText: showText })}>{DESCRIPTION}</p>

                <button className={cx("buttonExpand", { removeMargins: !images.length })} onClick={showTextHandler}>
                    <p className="text-small-semibold">посмотреть весь текст</p>
                </button>

                {images.length ? renderSlider(images, `Исполнитель ${performer.id}`) : <></>}

                <Link href="#">
                    <Button className="text-small">Перейти в чат</Button>
                </Link>
            </div>
        </Card>
    );
};
