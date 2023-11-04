import React from "react";
import classNames from "classnames/bind";

import styles from "./checkbox.module.scss";
import { Icon } from "@src/components/icon";

const cx = classNames.bind(styles);

export type CheckboxInputProps = {
    textLabel?: string;
    error?: boolean;
    errorMessage?: string;
    checked?: boolean;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
    onChange?: (e) => void;
};

export const CheckboxInput = (props: CheckboxInputProps) => {
    const { textLabel, error, errorMessage, checked = false, disabled, onClick } = props;

    return (
        <>
            <label className={cx(styles.container, props.className)}>
                <input type="checkbox" className={cx("checkboxFieldHide")} onChange={() => onClick?.()} />

                <button
                    type="button"
                    disabled={disabled}
                    onClick={onClick}
                    className={cx("checkboxField", {
                        checked: checked,
                        disabled: disabled,
                        error: error && !disabled && !checked,
                    })}>
                    {!disabled && (
                        <Icon
                            className={cx("checkboxFieldIcon", { checkboxFieldIconHide: checked === false })}
                            glyph="checked"
                        />
                    )}
                </button>

                <span
                    className={cx("label", {
                        warning: error && !disabled && !checked,
                    })}>
                    {textLabel}
                </span>
            </label>

            {errorMessage && error && !disabled && !checked && (
                <span className={cx("message", "errorTextMargins")}>{errorMessage}</span>
            )}
        </>
    );
};
