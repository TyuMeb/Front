import React, { InputHTMLAttributes } from "react";
import classNames from "classnames/bind";

import styles from "./file.module.scss";

const cx = classNames.bind(styles);

export type FileInputProps = {} & InputHTMLAttributes<HTMLInputElement>;

export const FileInput = ({ disabled, children, className, ...props }: FileInputProps) => {
  return (
    <label className={cx("wrapperFile", { disabled }, className)}>
      <input type="file" className={cx("inputFile")} disabled={disabled} {...props} />
      {children}
    </label>
  );
};
