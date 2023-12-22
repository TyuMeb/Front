"use client";

import React, { HTMLAttributes } from "react";
import styles from "./performers.module.scss";
import { PerformerCard } from "@src/components/account/performers/performer-card";
import desk from "@public/account/desk.jpg";
import slide from "@public/home/s_slide00.jpg";

type PerformersProps = {} & HTMLAttributes<HTMLUListElement>;

export const performers = [
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

export const Performers = (props: PerformersProps) => {
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
        <ul className={styles.wrapperPerformers} {...props}>
            {renderPerformers()}
        </ul>
    );
};
