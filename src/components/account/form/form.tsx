import React, { FormHTMLAttributes } from "react";

import styles from "./form.module.scss";

type FormType = {} & FormHTMLAttributes<HTMLFormElement>;

const Form = ({ children, ...props }: FormType) => {
    return (
        <div className={styles.wrapper}>
            <form className={styles.formChat} {...props}>
                {children}
            </form>
        </div>
    );
};

export default Form;
