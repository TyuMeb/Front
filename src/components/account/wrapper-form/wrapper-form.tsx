import React, { HTMLAttributes } from "react";
import styles from "./wrapper-form.module.scss";

type ChatFormProps = {} & HTMLAttributes<HTMLDivElement>;

export const WrapperForm = ({ className, children, ...props }: ChatFormProps) => {
    return (
        <div className={`${styles.wrapperForm} ${className}`} {...props}>
            {children}
        </div>
    );
};
