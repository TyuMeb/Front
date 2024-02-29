"use client";

import { useAppSelector } from "@src/redux/hooks";
import React from "react";
import { ModalNotify } from "./modal-notify";
import styles from "./notify.module.scss";

export const Notify = () => {
  const { createdModal } = useAppSelector((store) => store.modalNotify);

  return createdModal.length ? (
    <div className={styles.container}>
      {createdModal.map((modal, i) => {
        const { name, typeNotify, textNotify, delayMessage } = modal;

        return <ModalNotify key={i} name={name} type={typeNotify} text={textNotify} delay={delayMessage} />;
      })}
    </div>
  ) : (
    <></>
  );
};
