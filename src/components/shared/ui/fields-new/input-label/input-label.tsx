import { HTMLAttributes } from "react";
import classNames from "classnames/bind";

import styles from "./input-label.module.scss";

const cx = classNames.bind(styles);

interface IInputLabel extends HTMLAttributes<HTMLLabelElement> {
    disabled?: boolean;
    error?: boolean;
    htmlFor?: string;
}

export const InputLabel = (props: IInputLabel) => {
    const { children, className, disabled = false, error = false, ...restProps } = props;

    return disabled === false ? (
        <label className={cx(className, "text", { warningText: error })} {...restProps}>
            {children}
        </label>
    ) : (
        <></>
    );
};
