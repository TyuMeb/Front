import { InputHTMLAttributes, forwardRef } from "react";
import classNames from "classnames/bind";
import { Icon } from "@src/components/icon";

import styles from "./input.module.scss";
import { cn } from "@src/shared/lib/cn";

const cx = classNames.bind(styles);

export type InputProps = {
  label?: string;
  error?: boolean;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, errorMessage, error = false, label, disabled, className, ...props }: InputProps, ref) => {
    return (
      <div className={cn(styles.container, className)}>
        {label && (
          <label className={cx("text", "label", { warning: error && !disabled })} htmlFor={id}>
            {error && <Icon glyph="warning" className={cx("warningIcon")} />}

            {label}
          </label>
        )}

        <input
          ref={ref}
          disabled={disabled}
          className={cx("input", "text", { disabled }, { error }, className)}
          {...props}
        />

        {errorMessage && error && <span className={cx("message")}>{errorMessage}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
