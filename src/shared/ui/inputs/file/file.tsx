import React, { InputHTMLAttributes } from "react";
import classNames from "classnames/bind";

import styles from "./file.module.scss";

const cx = classNames.bind(styles);

export type FileInputI = {} & InputHTMLAttributes<HTMLInputElement>;

export const FileInput = ({ disabled, children, ...props }: FileInputI) => {
    return (
        <label className={cx("wrapperFile", { disabled })}>
            <input type="file" className={cx("inputFile")} disabled={disabled} {...props} />
            {children}
        </label>
    );
};
