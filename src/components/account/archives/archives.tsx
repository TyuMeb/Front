"use client";

import React, { HTMLAttributes } from "react";

import styles from "./archives.module.scss";
import { Slider } from "@src/components/account/slider";
import { Card } from "@src/components/account/card";
import { ListItem } from "@src/components/account/card/list-item";
import { orders } from "./data";

type ArchivesProps = {} & HTMLAttributes<HTMLDivElement>;

export const Archives = (props: ArchivesProps) => {
  const renderOrders = () => {
    return orders.map((order) => {
      const cardList = [
        { name: "Дата заказа:", value: order.description.date, isDate: true },
        {
          name: "Статус заказа:",
          value: "Закрыт",
        },
        {
          name: "Предложения:",
          value: order.description.countOffer,
          selected: true,
        },
      ];

      return (
        <li key={order.id}>
          <Card className={styles.backgroundColor}>
            <div className="wrapperHead">
              <h2 className="subtitle2">{order.title}</h2>
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

              {order.images?.length ? <Slider images={order.images} alt={order.title} /> : <></>}
            </div>
          </Card>
        </li>
      );
    });
  };

  return (
    <section className={styles.wrapperArchives} {...props}>
      {orders.length ? <ul className={styles.wrapperArchives}>{renderOrders()}</ul> : <></>}
    </section>
  );
};
