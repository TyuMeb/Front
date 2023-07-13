import React, { HTMLAttributes } from "react";
import classNames from "classnames/bind";

import styles from "./text-field-modal.module.scss";

const cx = classNames.bind(styles);

interface ITextFieldModal extends HTMLAttributes<HTMLDivElement> {
    isError: boolean;
    labelText: string;
}

const TextFieldModal = ({ isError, labelText, children }: ITextFieldModal) => {
    return (
        <label className={cx("label")}>
            <p className={cx("textLabel", "text", { warningText: isError })}>
                {isError && <span className={cx("warningIcon")} />}
                {labelText}
            </p>

            {children}
        </label>
    );
};

export default TextFieldModal;
