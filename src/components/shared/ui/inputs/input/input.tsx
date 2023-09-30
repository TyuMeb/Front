import { ChangeEvent, InputHTMLAttributes } from "react";
import classNames from "classnames/bind";
import Icon from "@src/components/icon";

import styles from "./input.module.scss";
import { inputMode, inputType } from "./types";

const cx = classNames.bind(styles);

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    className?: string;
    type?: inputType;
    inputMode?: inputMode;
    disabled?: boolean;
    autoFocus?: boolean;
    placeholder?: string;
    textLabel?: string;
    errorMessage?: string;
    error?: boolean;
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: IInputProps) => {
    const { id, errorMessage, error = false, textLabel, disabled, className, type = "text", ...restProps } = props;

    return (
        <>
            {textLabel && (
                <label className={cx("text", "label", { warning: error && !disabled })} htmlFor={id}>
                    {error && !disabled && <Icon glyph="warning" className={cx("warningIcon")} />}

                    {textLabel}
                </label>
            )}

            <input
                id={id}
                className={cx("input", "text", { disabled }, className)}
                type={type}
                disabled={disabled}
                {...restProps}
            />

            {error && !disabled && <span className={cx("message")}>{errorMessage}</span>}
        </>
    );
};
