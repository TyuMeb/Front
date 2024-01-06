"use client";

import React, { HTMLAttributes } from "react";
import styles from "./performers.module.scss";
import { PerformerCard } from "@src/components/account/performers/performer-card";
import { performers } from "@src/shared/data/customer-account";

type PerformersProps = {} & HTMLAttributes<HTMLUListElement>;

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
