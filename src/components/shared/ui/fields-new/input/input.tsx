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
        className,
        type = "text",
        disabled = false,
        error = false,
        autoFocus = false,
        onChange,
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
                type={type}
                disabled={disabled}
                onChange={(e) => handlerOnChange(e)}
                {...restProps}
            />
        </>
    );
};
