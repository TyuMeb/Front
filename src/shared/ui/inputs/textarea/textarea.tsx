import React, { forwardRef, useState, useCallback } from "react";
import classNames from "classnames/bind";

import styles from "./textarea.module.scss";

const cx = classNames.bind(styles);

export type TextareaProps = {
    autoHeight?: boolean;
} & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            value: valueFromProps,
            onChange: onChangeFromProps,
            defaultValue,
            autoHeight = false,
            rows: rowsFromProps = 3,
            className,
            ...props
        }: TextareaProps,
        ref
    ) => {
        // Determine if component is used in a controlled or uncontrolled
        // fashion.
        const isControlled = typeof valueFromProps != "undefined";
        const hasDefaultValue = typeof defaultValue != "undefined";
        const [internalValue, setInternalValue] = useState(hasDefaultValue ? defaultValue : "");

        // If component is controlled, take the value from the props,
        // otherwise take it from the value we track ourselves.
        const value = isControlled ? valueFromProps : internalValue;

        // The rows attribute is what will determine the height of our
        // textarea.  Notice how we only automatically determine the
        // rows attribute if props.autoHeight is true. In this case
        // we also use props.rows to set the minimum number of rows.
        const rows = autoHeight ? Math.max(rowsFromProps, String(value).split("\n").length) : rowsFromProps;

        // This a custom onChange handler that reports any changes
        // to props.onChange and also updates our internal value
        // in case the component is uncontrolled.
        const onChange = useCallback<React.ChangeEventHandler<HTMLTextAreaElement>>(
            (e) => {
                if (onChangeFromProps) {
                    onChangeFromProps(e);
                }
                if (!isControlled) {
                    setInternalValue(e.target.value);
                }
            },
            [isControlled, onChangeFromProps]
        );

        return (
            <textarea
                ref={ref}
                className={cx("textarea", "text-small", className)}
                rows={rows}
                value={value}
                onChange={onChange}
                {...props}
            />
        );
    }
);

Textarea.displayName = "Textarea";
