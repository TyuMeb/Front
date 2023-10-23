"use client";

import React, { HTMLAttributes } from "react";
import classNames from "classnames/bind";
import styles from "./performers.module.scss";
import PerformerCard from "@src/components/account/performers/performer-card";

const cx = classNames.bind(styles);

interface PerformersI extends HTMLAttributes<HTMLDivElement> {}

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

const Performers = (props: PerformersI) => {
    const renderPerformers = () => {
        return performers.map((performer) => {
            return (
                <li key={performer.id}>
                    <PerformerCard performer={performer} />
                </li>
            );
        });
    };

    return <ul className={styles.wrapperPerformers}>{renderPerformers()}</ul>;
};

export default Performers;
