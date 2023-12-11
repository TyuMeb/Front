import React, { HTMLAttributes } from "react";
import classNames from "classnames/bind";
import { Icon } from "@src/components/icon";

import styles from "@src/components/shared/ui/fields/fields.module.scss";

const cx = classNames.bind(styles);

type TextFieldModalProps = {
    isError: boolean;
    labelText: string;
} & HTMLAttributes<HTMLLabelElement>;

export const TextFieldModal = ({ isError, labelText, children }: TextFieldModalProps) => {
    return (
        <label className={cx("label")}>
            {children}

            <p className={cx("textLabel", "text", { warningText: isError })}>
                {isError && <Icon className={cx("warningIcon")} glyph="warning" />}
                {labelText}
            </p>
        </label>
    );
};
