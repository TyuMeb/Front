"use client";

import React, { useEffect, HTMLAttributes } from "react";
import styles from "./chats.module.scss";
import { PerformerCard } from "@src/components/account/performers/performer-card";
import { NoOrdersCard } from "@src/components/account/my-orders/no-orders-card";
import desk from "@public/account/desk.jpg";
import slide from "@public/home/s_slide00.jpg";
import { useGetChatsQuery } from "@src/redux/api/chat-api-slice";

type ChatsProps = {} & HTMLAttributes<HTMLUListElement>;

const performers = [
    {
        id: "1",
        name: "Schattdecor AG",
        termOfExecution: "45-50",
        images: [desk, desk, slide],
        cost: 120000,
    },
    {
        id: "2",
        name: "Мебельная фабрика Три Бобра",
        termOfExecution: "70",
        images: [],
        cost: 100000,
    },
];

export const Chats = (props: ChatsProps) => {
    const { data } = useGetChatsQuery();

    const renderPerformers = () => {
        return performers.map((performer) => {
            return (
                <li key={performer.id}>
                    <PerformerCard performer={performer} />
                </li>
            );
        });
    };

    return (
        <section className={styles.wrapperPerformers} {...props}>
            {!performers.length && <NoOrdersCard />}

            {performers.length && <ul className={styles.wrapperPerformers}>{renderPerformers()}</ul>}
        </section>
    );
};
