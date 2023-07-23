import React, { HTMLAttributes } from "react";
import classNames from "classnames/bind";

import styles from "@src/components/shared/ui/fields/fields.module.scss";

const cx = classNames.bind(styles);

interface ITextFieldModal extends HTMLAttributes<HTMLLabelElement> {
    isError: boolean;
    labelText: string;
}

const TextFieldModal = ({ isError, labelText, children }: ITextFieldModal) => {
    return (
        <label className={cx("label")}>
            {children}

            <p className={cx("textLabel", "text", { warningText: isError })}>
                {isError && <span className={cx("warningIcon")} />}
                {labelText}
            </p>
        </label>
    );
};

export default TextFieldModal;
