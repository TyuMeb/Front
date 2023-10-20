import { InputHTMLAttributes } from "react";
import classNames from "classnames/bind";
import Icon from "@src/components/icon";

import styles from "./input.module.scss";

const cx = classNames.bind(styles);

export type InputProps = {
    textLabel?: string;
    errorMessage?: string;
    error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ id, errorMessage, error = false, textLabel, disabled, className, ...props }: InputProps) => {
    return (
        <>
            {textLabel && (
                <label className={cx("text", "label", { warning: error && !disabled })} htmlFor={id}>
                    {error && !disabled && <Icon glyph="warning" className={cx("warningIcon")} />}

                    {textLabel}
                </label>
            )}

            <input className={cx("input", "text", { disabled }, { error }, className)} {...props} />

            {errorMessage && error && !disabled && <span className={cx("message")}>{errorMessage}</span>}
        </>
    );
};
