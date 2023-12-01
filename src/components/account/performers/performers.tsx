"use client";

import React, { HTMLAttributes } from "react";
import styles from "./performers.module.scss";
import PerformerCard from "@src/components/account/performers/performer-card";

type PerformersT = {} & HTMLAttributes<HTMLUListElement>;

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

const Performers = (props: PerformersT) => {
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

export default Performers;
