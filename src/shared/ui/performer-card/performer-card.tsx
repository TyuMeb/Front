"use client";

import React, { FC, useState } from "react";
import styles from "./performer-card.module.scss";
import "src/components/account/wrapper-card/wrapper-card.module.scss";
import { Button } from "src/shared/ui/button";
import { cn } from "@src/shared/lib/cn";

export type PerformerCardProps = {
  id?: number;
  disabled?: boolean;
  name: string;
  product: string;
  termOfExecution: string;
  cost: number;
  // showGallery: boolean;
};

// Пока как заглушка. Не приходит с бэка. Нужна реализация сокетов.
// const DESCRIPTION = `
//     Продавец: Здравствуйте! Как я могу Вам помочь?
//     Покупатель: Добрый день! Я хочу купить новую мебель для своей квартиры.
//     Продавец: Конечно, мы имеем широкий выбор мебели в нашем магазине. Что именно Вы ищете?
//     Покупатель: Меня интересуют кресла и столы для гостиной.
//     Продавец: Отличная идея! У нас есть множество вариантов различных стилей и цветов. Например, у нас есть современные кресла из кожи или мягкой ткани. А также прочные деревянные столы.
//     Покупатель: Спасибо за информацию. Могу ли я посмотреть их более подробно?
//     Продавец: Конечно, давайте перейдем в отдел мебели. Там Вы можете ознакомиться со всеми моделями и проверить качество материалов.
//     Покупатель: Хорошо, я буду рад этому.
//     Продавец: Если у Вас возникнут какие-либо вопросы или нужна помощь при выборе, не стесняйтесь обращаться ко мне.
//     Покупатель: Благодарю Вас за помощь. Я думаю, что найду то, что мне нужно.
//     Продавец: Рад услужить! Будьте свободны вернуться, если у Вас поя
// `;
// Катя я правильно понимаю, что здесь должны приходить только последние непрочитанные сообщения?
//весь чат получаешь по кнопке Перейти в чат?
const DESCRIPTION = `
    Конечно, давайте перейдем в отдел мебели. Там Вы можете ознакомиться со всеми моделями и проверить качество материалов..
    Если у Вас возникнут какие-либо вопросы или нужна помощь при выборе, не стесняйтесь обращаться ко мне.
    Рад услужить! Будьте свободны вернуться, если у Вас поя
`;

export const PerformerCard: FC<PerformerCardProps> = ({ disabled = false, name, product, termOfExecution, cost }) => {
  const [showText, setShowText] = useState(false);

  const showTextHandler = () => setShowText(!showText);

  return (
    <section className={cn(styles.card, disabled && styles.card_disabled)}>
      <div className={cn(styles.about, disabled && styles.about_disabled)}>
        <div className={styles.workerInfo}>
          <span className={cn(styles.avatar, disabled && styles.avatar_disabled)} />
          <h2 className={styles.name}>{name}</h2>
          <button className={styles.wrapperDots}>
            <span className={styles.buttonDots} />
          </button>
        </div>
        <div className={styles.orderInfo}>
          <p>{product}</p>
          <p>Срок исполнения:&nbsp;{termOfExecution}&nbsp; дней</p>
          <p>Стоимость: от &nbsp;{cost.toLocaleString("ru-RU")}&nbsp;руб</p>
        </div>
      </div>

      <div className={styles.chat}>
        <div className={showText === false ? styles.message_last : styles.message_last_open}>{DESCRIPTION}</div>
        <button className={styles.buttonSwitch} onClick={showTextHandler}>
          посмотреть весь текст
        </button>
        <Button className={styles.button} disabled={disabled}>
          Перейти в чат
        </Button>
      </div>
    </section>
  );
};
