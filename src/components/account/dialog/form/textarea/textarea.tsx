import React, { InputHTMLAttributes, KeyboardEvent } from "react";
import classNames from "classnames/bind";

import styles from "./textarea.module.scss";

const cx = classNames.bind(styles);

export interface ITextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    disabled?: boolean;
}

const setAutomaticHeight = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = e.target as HTMLTextAreaElement;
    textarea.style.height = "";

    if (e.key === "Backspace" && textarea.selectionStart === 0) {
        textarea.style.height = "";
    }

    if (textarea && textarea.clientHeight < 178) {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
    }
};

const Textarea = (props: ITextareaProps) => {
    const { disabled, className, ...restProps } = props;

    return (
        <textarea
            className={cx("textarea", "text", { disabled }, className)}
            disabled={disabled}
            onKeyUp={setAutomaticHeight}
            {...restProps}
        />
    );
};

export default Textarea;