"use client";

import React, { HTMLAttributes } from "react";
import styles from "./chats.module.scss";
import { PerformerCard } from "@src/components/account/performers/performer-card";
import { NoCard } from "@src/components/account/card/no-card";
import Link from "next/link";

type ChatsProps = {} & HTMLAttributes<HTMLUListElement>;

const performers = [
    {
        id: "1",
        name: "Schattdecor AG",
        termOfExecution: "45-50",
        cost: 120000,
        showGallery: true,
    },
    {
        id: "2",
        name: "Мебельная фабрика Три Бобра",
        termOfExecution: "70",
        cost: 100000,
        showGallery: false,
    },
];

export const Chats = (props: ChatsProps) => {
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
            {!performers.length ? (
                <NoCard name="У вас пока нет заказов. Но вы всегда можете исправить это, создав его.">
                    <Link href="/">Сделать заказ</Link>
                </NoCard>
            ) : (
                <></>
            )}

            {performers.length && <ul className={styles.wrapperPerformers}>{renderPerformers()}</ul>}
        </section>
    );
};
