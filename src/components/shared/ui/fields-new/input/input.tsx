import { ChangeEvent, HTMLAttributes, useState } from "react";
import classNames from "classnames/bind";

import styles from "./input.module.scss";

const cx = classNames.bind(styles);

export interface IInput extends HTMLAttributes<HTMLInputElement> {
    disabled?: boolean;
    error?: boolean;
    type?: string;
    value?: string;
    // onChange: () => void;
}

export const Input = (props: IInput) => {
    const {
        className,
        type = "text",
        disabled = false,
        error = false,
        autoFocus = false,
        onChange,
        value,
        ...restProps
    } = props;

    return (
        <>
            <input
                className={cx(className, {
                    disabled: disabled,
                    error: error,
                })}
                value={value}
                autoFocus={autoFocus}
                type={type}
                onChange={onChange}
                disabled={disabled}
                {...restProps}
            />
        </>
    );
};
