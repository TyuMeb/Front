import React, { forwardRef } from "react";
import classNames from "classnames/bind";

import styles from "./checkbox.module.scss";
import { Icon } from "@src/components/icon";
import { cn } from "@src/shared/lib/cn";

const cx = classNames.bind(styles);

export type CheckboxInputProps = {
    textLabel?: string;
    error?: boolean;
    errorMessage?: string;
    checked?: boolean;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
    ({ textLabel, error, errorMessage, checked, disabled, ...props }, ref) => {
        return (
            <>
                <label htmlFor={props.id} className={cn(styles.container, props.className)}>
                    <input {...props} checked={checked} type="checkbox" className={cx("checkboxFieldHide")} ref={ref} />

                    <span className={cx("checkboxField", { checked, disabled, error: error && !disabled && !checked })}>
                        {!disabled && (
                            <Icon
                                className={cx("checkboxFieldIcon", { checkboxFieldIconHide: checked === false })}
                                glyph="checked"
                            />
                        )}
                    </span>

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
    }
);

CheckboxInput.displayName = "CheckboxInput";
