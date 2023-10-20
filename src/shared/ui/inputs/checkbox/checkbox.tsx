import React from "react";
import classNames from "classnames/bind";

import styles from "./checkbox.module.scss";
import Icon from "@src/components/icon";

const cx = classNames.bind(styles);

export type CheckboxInputProps = {
    textLabel?: string;
    error?: boolean;
    errorMessage?: string;
    checked?: boolean;
    disabled?: boolean;
    onClick?: () => void;
};

export const CheckboxInput = (props: CheckboxInputProps) => {
    const { textLabel, error, errorMessage, checked = false, disabled, onClick } = props;

    return (
        <>
            <div className={cx("container")}>
                <input className={cx("checkboxFieldHide")} />

                <button
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

                <label
                    className={cx("label", {
                        warning: error && !disabled && !checked,
                    })}>
                    {textLabel}
                </label>
            </div>

            {errorMessage && error && !disabled && !checked && (
                <span className={cx("message", "errorTextMargins")}>{errorMessage}</span>
            )}
        </>
    );
};
