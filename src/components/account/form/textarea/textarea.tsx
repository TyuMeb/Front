import React, { InputHTMLAttributes, KeyboardEvent, forwardRef } from "react";
import classNames from "classnames/bind";

import styles from "./textarea.module.scss";

const cx = classNames.bind(styles);

export type TextareaT = {} & InputHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaT>(
    ({ disabled = false, className, ...props }: TextareaT, ref) => {
        const setAutomaticHeight = (e: KeyboardEvent<HTMLTextAreaElement>) => {
            const textarea = e.target as HTMLTextAreaElement;

            if (e.key === "Backspace" && textarea.selectionStart === 0) {
                textarea.style.height = "";
            }

            if (textarea && textarea.scrollHeight > 178) {
                return;
            }

            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        };

        return (
            <textarea
                ref={ref}
                className={cx("textarea", "text", { disabled }, className)}
                disabled={disabled}
                onKeyUp={setAutomaticHeight}
                {...props}
            />
        );
    }
);

Textarea.displayName = "Textarea";
