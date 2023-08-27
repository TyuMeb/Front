import { ChangeEvent, HTMLAttributes } from "react";
import classNames from "classnames/bind";

import styles from "./input.module.scss";

const cx = classNames.bind(styles);

export interface IInput extends HTMLAttributes<HTMLInputElement> {
    disabled?: boolean;
    error?: boolean;
    type?: string;
    value?: string;
}

export const Input = (props: IInput) => {
    const {
        id,
        className,
        type = "text",
        disabled = false,
        error = false,
        autoFocus = false,
        placeholder,
        value,
        onChange,
        onFocus,
        onBlur,
        ...restProps
    } = props;

    const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => onChange && onChange(e);

    return (
        <>
            <input
                className={cx(className, {
                    disabled: disabled,
                    error: error,
                })}
                autoFocus={autoFocus}
                placeholder={placeholder}
                type={type}
                disabled={disabled}
                id={id}
                value={value}
                onChange={(e) => handlerOnChange(e)}
                onFocus={onFocus}
                onBlur={onBlur}
                {...restProps}
            />
            <span></span>
        </>
    );
};
