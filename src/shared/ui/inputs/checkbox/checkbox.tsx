import React, { forwardRef } from "react";
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
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  ({ textLabel, error, errorMessage, checked, disabled, type = "checkbox", ...props }, ref) => {
    return (
      <div className={props.className}>
        <label htmlFor={props.id} className={cx(styles.container)}>
          <input
            {...props}
            disabled={disabled}
            checked={checked}
            type={type}
            className={cx("checkboxFieldHide")}
            ref={ref}
          />

          <span className={cx("checkboxField", { checked, disabled, error: error && !disabled && !checked })}>
            <Icon className={cx("checkboxFieldIcon", { checkboxFieldIconHide: checked === false })} glyph="checked" />
          </span>

          <span className={cx("text-medium")}>{textLabel}</span>
        </label>

        {errorMessage && error && !disabled && !checked && (
          <span className={cx("text-small", "errorMessage")}>{errorMessage}</span>
        )}
      </div>
    );
  }
);

CheckboxInput.displayName = "CheckboxInput";
