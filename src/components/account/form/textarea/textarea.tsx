import React, { InputHTMLAttributes, KeyboardEvent, forwardRef } from "react";
import classNames from "classnames/bind";

import styles from "./textarea.module.scss";

const cx = classNames.bind(styles);

export interface ITextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>((props: ITextareaProps, ref) => {
    const { disabled, className, ...restProps } = props;

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
            {...restProps}
        />
    );
});

Textarea.displayName = "Textarea";

export default Textarea;
