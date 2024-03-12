import React, { HTMLAttributes } from "react";
import styles from "./error-message.module.scss";

type Props = {} & HTMLAttributes<HTMLDivElement>;

export const ErrorMessage = ({ children, ...props }: Props) => {
  return (
    <p className={styles.text} {...props}>
      {children}
    </p>
  );
};
