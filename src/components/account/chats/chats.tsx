"use client";

import React, { HTMLAttributes } from "react";
import styles from "./chats.module.scss";
import { NoCard } from "@src/components/account/card/no-card";
import Link from "next/link";
import { performers } from "@src/shared/data/customer-account";
import { PerformerCard, PerformerCardProps } from "../performers/performer-card/performer-card";

type ChatsProps = {} & HTMLAttributes<HTMLUListElement>;

export const Chats = (props: ChatsProps) => {
  const renderPerformers = () => {
    return performers.map((performer) => {
      return (
        <li key={performer.id}>
          <PerformerCard performer={performer as unknown as PerformerCardProps} />
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
