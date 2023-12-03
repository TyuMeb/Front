import React, { HTMLAttributes } from "react";
import styles from "./form.module.scss";

type ChatFormT = {} & HTMLAttributes<HTMLFormElement>;

export const Form = ({ className, children, ...props }: ChatFormT) => {
    return (
        <div className={styles.wrapper}>
            <form className={`${styles.formChat} ${className}`} {...props}>
                {children}
            </form>
        </div>
    );
};
