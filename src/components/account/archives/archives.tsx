"use client";

import React, { HTMLAttributes } from "react";
import styles from "./archives.module.scss";
import { OrderCard } from "@src/components/account/my-orders/order-card";
import { NoOrdersCard } from "@src/components/account/my-orders/no-orders-card";

const orders = [
    {
        id: "1",
        title: "Полка настенная",
        description: {
            date: "24.04.2024",
            status: "сбор предложений окончен",
            countOffer: 4,
        },
    },
    {
        id: "2",
        title: "Комод",
        description: {
            date: "24.04.2024",
            status: "сбор предложений окончен",
            countOffer: 0,
        },
    },
    {
        id: "2",
        title: "Комод",
        description: {
            date: "24.04.2024",
            status: "сбор предложений окончен",
            countOffer: 0,
        },
    },
];

type ArchivesT = {} & HTMLAttributes<HTMLDivElement>;

export const Archives = (props: ArchivesT) => {
    const renderOrders = () => {
        return orders.map((order) => {
            return (
                <li key={order.id}>
                    <OrderCard className={styles.backgroundColor} title={order.title} description={order.description} />
                </li>
            );
        });
    };

    return (
        <section className={styles.wrapperOrders} {...props}>
            {!orders.length && <NoOrdersCard />}

            <ul className={styles.wrapperOrders}>{renderOrders()}</ul>
        </section>
    );
};
