import { HTMLAttributes } from "react";
import classNames from "classnames/bind";

import styles from "./form-error-text.module.scss";

const cx = classNames.bind(styles);

export interface IFormHelperText extends HTMLAttributes<HTMLParagraphElement> {
    disabled?: boolean;
    variant: "standard";
}

export const FormErrorText = (props: IFormHelperText) => {
    const { children, className, disabled, ...restProps } = props;

    return disabled === false ? (
        <p className={cx("textError", { resetMargin: !className }, className)} {...restProps}>
            {children}
        </p>
    ) : (
        <></>
    );
};
