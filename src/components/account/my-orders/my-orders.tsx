"use client";

import React, { HTMLAttributes } from "react";
import styles from "./my-orders.module.scss";
import OrderCard from "@src/components/account/my-orders/order-card";
import NoOrdersCard from "@src/components/account/my-orders/no-orders-card";

const orders = [
    {
        id: "1",
        title: "Полка настенная",
        notOffer: false,
        description: {
            date: "24.04.2024",
            status: "сбор предложений окончен",
            countOffer: 4,
        },
    },
    {
        id: "2",
        title: "Комод",
        notOffer: true,
        description: {
            date: "24.04.2024",
            status: "сбор предложений окончен",
            countOffer: 0,
        },
    },
    {
        id: "2",
        title: "Комод",
        notOffer: false,
        description: {
            date: "24.04.2024",
            status: "сбор предложений окончен",
            countOffer: 0,
        },
    },
];

interface MyOrdersI extends HTMLAttributes<HTMLDivElement> {}

const MyOrders = (props: MyOrdersI) => {
    const renderOrders = () => {
        return orders.map((order) => {
            return (
                <li key={order.id}>
                    <OrderCard title={order.title} notOffer={order.notOffer} description={order.description} />
                </li>
            );
        });
    };

    return (
        <section className={styles.wrapperOrders}>
            {!orders.length && <NoOrdersCard />}

            <ul className={styles.wrapperOrders}>{renderOrders()}</ul>
        </section>
    );
};

export default MyOrders;
