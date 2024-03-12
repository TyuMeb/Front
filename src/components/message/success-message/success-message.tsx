import React, { HTMLAttributes } from "react";
import styles from "./success-message.module.scss";

type Props = {} & HTMLAttributes<HTMLDivElement>;

export const SuccessMessage = ({ children, ...props }: Props) => {
  return (
    <p className={styles.text} {...props}>
      {children}
    </p>
  );
};
