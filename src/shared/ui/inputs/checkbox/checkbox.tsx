import React from "react";
import classNames from "classnames/bind";

import styles from "./checkbox.module.scss";
import Icon from "@src/components/icon";

const cx = classNames.bind(styles);

export interface ICheckboxField {
    textLabel?: string;
    error?: boolean;
    errorMessage?: string;
    checked?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}

export const CheckboxField = (props: ICheckboxField) => {
    const { textLabel, error, errorMessage, checked = false, disabled, onClick } = props;

    return (
        <>
            <div className={cx("container")}>
                <input className={cx("checkboxFieldHide")} />

                <div
                    onClick={disabled ? undefined : onClick}
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
                </div>

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

export default CheckboxField;
