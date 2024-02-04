"use client";

import React, { HTMLAttributes } from "react";

import styles from "./my-orders.module.scss";
import { NoCard } from "@src/components/account/card/no-card";
import { AddFiles } from "@src/components/account/my-orders/add-files";
import { Icon } from "src/components/icon";
import { getFiles } from "@src/helpers";
import { FilesList } from "@src/components/account/wrapper-form";
import { Slider } from "@src/components/account/slider";
import { Button } from "@src/shared/ui/button";
import { Card } from "@src/components/account/card";
import { ListItem } from "../card/list-item/list-item";
import { orders } from "./data";
import Link from "next/link";

type MyOrdersProps = {} & HTMLAttributes<HTMLDivElement>;

export const MyOrders = (props: MyOrdersProps) => {
  const settingsInput = {
    maxSizeFile: 1000000,
    maxSizeImage: 100000,
    maxCountFiles: 6,
    multiple: true,
    accept: ".png, .jpg, .jpeg",
  };

  const onChangeHandler = (data: FilesList[]) => {
    // TODO отправка на сервер изображения
    const files = getFiles(data);

    const formFiles = new FormData();
    files.forEach((file) => formFiles.append(`file-${file.id}`, file.file));

    console.log({ files, formData: formFiles });
  };

  const renderOrders = () => {
    return orders.map((order) => {
      const cardList = [
        { name: "Дата заказа:", value: order.description.date, isDate: true },
        {
          name: "Статус заказа:",
          value:
            order.description.status === "notSelected"
              ? "сбор предложений окончен"
              : "предложения появятся через 23 ч 58 мин",
        },
        {
          name: "Предложения:",
          value: `${order.description.countOffer} ${order.description.status !== "notSelected" ? "предложения" : ""}`,
          selected: true,
        },
      ];

      const renderButton =
        order.description.status === "notSelected" ? (
          <Button className={styles.wrapperButton} onClick={() => {}}>
            Повторить заказ
          </Button>
        ) : (
          <></>
        );

      return (
        <li key={order.id}>
          <Card>
            <div className="wrapperHead">
              <h2 className="subtitle2">{order.title}</h2>

              {order.description.status === "notSelected" && (
                <p className={`text-small-semibold ${styles.colorPink}`}>
                  К сожалению, никто не выбрал ваш заказ. Попробуйте его изменить и создать заново.
                </p>
              )}
            </div>

            <div className="wrapperList">
              <ul className="list">
                {cardList.map((item, i) => {
                  return (
                    <li key={i}>
                      <ListItem description={item} />
                    </li>
                  );
                })}
              </ul>

              {order.images?.length ? (
                <Slider images={order.images} alt={order.title} />
              ) : (
                <AddFiles className={styles.marginCenter} {...settingsInput} onChangeHandler={onChangeHandler}>
                  <div className={styles.addPhoto}>
                    <Icon width={30} height={30} glyph={"plus"} />
                    <p className="text-small-semibold">Добавить фото</p>
                  </div>
                </AddFiles>
              )}
            </div>

            <div className={styles.wrapperButton}>{renderButton}</div>
          </Card>
        </li>
      );
    });
  };

  return (
    <section className={styles.wrapperOrders} {...props}>
      {!orders.length ? (
        <NoCard name="У вас пока нет заказов. Но вы всегда можете исправить это, создав его.">
          <Link href="/order">Сделать заказ</Link>
        </NoCard>
      ) : (
        <></>
      )}

      {orders.length ? <ul className={styles.wrapperOrders}>{renderOrders()}</ul> : <></>}
    </section>
  );
};
