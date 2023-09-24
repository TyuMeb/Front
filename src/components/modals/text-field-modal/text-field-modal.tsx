import React, { HTMLAttributes } from "react";
import classNames from "classnames/bind";
import Icon from "@src/components/icon";

import styles from "@src/components/shared/ui/fields/fields.module.scss";

const cx = classNames.bind(styles);

interface ITextFieldModal extends HTMLAttributes<HTMLLabelElement> {
    isError: boolean;
    labelText: string;
}

const TextFieldModal = ({ isError, labelText, children }: ITextFieldModal) => {
    return (
        <label className={cx("label")}>

            <p className={cx("textLabel", "text", { warningText: isError })}>
                {/* {isError && <Icon className={cx("warningIcon")} glyph="warning" />} */}

                {labelText}
            </p>
            {children}

        </label>
    );
};

export default TextFieldModal;
