import { HTMLAttributes } from "react";
import classNames from "classnames/bind";

import styles from "./form-helper-text.module.scss";

const cx = classNames.bind(styles);

export interface IFormHelperText extends HTMLAttributes<HTMLParagraphElement> {
    disabled?: boolean;
    error?: boolean;
}

export const FormHelperText = (props: IFormHelperText) => {
    const { children, className, disabled = false, error = false, ...restProps } = props;

    return disabled === false ? (
        <p className={cx("text", { textError: error }, { resetMargin: !className }, className)} {...restProps}>
            {children}
        </p>
    ) : (
        <></>
    );
};
