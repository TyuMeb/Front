"use client";

import React, { HTMLAttributes } from "react";

import styles from "./chat.module.scss";

type ChatProps = {
  heightForm: number;
  heightDialog: number;
} & HTMLAttributes<HTMLDivElement>;

export const Chat = ({ heightForm, heightDialog, children, ...props }: ChatProps) => {
  return (
    <div
      style={{
        marginBottom: `${heightForm + 28}px`,
        marginTop: `${heightDialog}px`,
      }}
      className={styles.wrapper}
      {...props}
    >
      {children}
    </div>
  );
};
