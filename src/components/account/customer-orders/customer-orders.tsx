"use client";

import React, { HTMLAttributes } from "react";

import { Button } from "@src/shared/ui/button";
import { Card } from "@src/components/account/card";
import { ListItem } from "@src/components/account/card/list-item";

import styles from "./customer-orders.module.scss";
import Link from "next/link";
import { customerOrders, CustomerOrdersItems } from "@src/shared/data/performer-account";
import { Slider } from "@src/components/account/slider";

type MyOfferProps = {} & HTMLAttributes<HTMLDivElement>;

const cardList = (offer: CustomerOrdersItems) => {
  return [
    {
      name: "Дата заказа:",
      value: <time>{offer.description.date}</time>,
    },
    {
      name: "Предложения:",
      value: offer.description.countOffer,
    },
    {
      name: "Задача:",
      value: offer.description.task,
    },
  ];
};

export const CustomerOrders = (props: MyOfferProps) => {
  const renderOrders = () => {
    return customerOrders.map((order) => {
      return (
        <li key={order.id}>
          <Card>
            <div className="wrapperHead">
              <div className={styles.wrapperTitle}>
                <span
                  className={`${styles.statusIcon}
                                    ${order.offerType === "processing" && styles.backgroundBrown}
                                    ${order.offerType === "notReviewed" && styles.backgroundGreen}
                                    ${order.offerType === "notSelected" && styles.backgroundPink}`}
                />
                <h2 className="subtitle2">{order.name}</h2>
              </div>
            </div>

            <div className="wrapperList">
              <ul className="list">
                {cardList(order).map((item, i) => {
                  return (
                    <li key={i}>
                      <ListItem description={item} />
                    </li>
                  );
                })}
              </ul>

              {order.images?.length ? <Slider images={order.images} alt={order.name} /> : <></>}
            </div>

            <Link href={`/performer-account/customer-orders/addOffer-${order.id}`}>
              <Button className="text-small">Перейти к заявке</Button>
            </Link>
          </Card>
        </li>
      );
    });
  };

  return (
    <section className={styles.wrapperCustomerOrders} {...props}>
      {customerOrders.length ? <ul className={styles.wrapperCustomerOrders}>{renderOrders()}</ul> : <></>}
    </section>
  );
};
