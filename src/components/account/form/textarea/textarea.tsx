import React, { InputHTMLAttributes, KeyboardEvent } from "react";
import classNames from "classnames/bind";

import styles from "./textarea.module.scss";

const cx = classNames.bind(styles);

export type TextareaT = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: any;
} & InputHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = (props: TextareaT) => {
    const { disabled, className, register, name, ...restProps } = props;

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
            className={cx("textarea", "text", { disabled }, className)}
            disabled={disabled}
            onKeyUp={setAutomaticHeight}
            {...register(name)}
            {...restProps}
        />
    );
};
