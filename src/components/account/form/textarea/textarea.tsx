import React, { InputHTMLAttributes, ChangeEvent, forwardRef } from "react";
import classNames from "classnames/bind";

import styles from "./textarea.module.scss";

const cx = classNames.bind(styles);

export type TextareaT = {} & InputHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaT>(
    ({ disabled, className, onChange, ...props }: TextareaT, ref) => {
        const setAutomaticHeight = (element: HTMLTextAreaElement, maxHeight: number) => {
            const height = element.style.height;
            const scrollHeight = `${element.scrollHeight}px`;

            if (element.scrollHeight > maxHeight) {
                return;
            }

            if (height !== scrollHeight) {
                element.style.height = "auto";
                element.style.height = scrollHeight;
            }
        };

        const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
            onChange && onChange(event);

            const textarea = event.currentTarget;
            setAutomaticHeight(textarea, 178);
        };

        return (
            <textarea
                ref={ref}
                className={cx("textarea", "text", className)}
                disabled={disabled}
                onChange={onChangeHandler}
                {...props}
            />
        );
    }
);

Textarea.displayName = "Textarea";
