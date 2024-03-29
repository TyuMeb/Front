"use client";

import React, { HTMLAttributes } from "react";
import styles from "./performers.module.scss";
import { PerformerCard } from "@src/shared/ui/performer-card";
import desk from "@public/account/desk.jpg";
import slide from "@public/home/s_slide00.jpg";

type PerformersProps = {} & HTMLAttributes<HTMLUListElement>;

export const performers = [
  {
    id: "1",
    name: "Schattdecor AG",
    product: "Полка настенная",
    termOfExecution: "45-50",
    images: [desk, desk, slide],
    cost: 120000,
    disabled: false,
    //showGallery: true,
  },
  {
    id: "2",
    name: "Мебельная фабрика Три Бобра",
    product: "Полка настенная 2",
    termOfExecution: "70",
    images: [],
    cost: 100000,
    disabled: true,
    //showGallery: false,
  },
];

export const Performers = (props: PerformersProps) => {
  const renderPerformers = () => {
    return performers.map((performer) => {
      return (
        <li key={performer.id}>
          <PerformerCard
            disabled={performer.disabled}
            name={performer.name}
            product={performer.product}
            termOfExecution={performer.termOfExecution}
            cost={performer.cost}
          />
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
