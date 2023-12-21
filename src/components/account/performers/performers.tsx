"use client";

import React, { HTMLAttributes } from "react";
import styles from "./performers.module.scss";
import { PerformerCard } from "@src/shared/ui/performer-card";

type PerformersProps = {} & HTMLAttributes<HTMLUListElement>;

export const performers = [
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
