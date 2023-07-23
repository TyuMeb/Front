import React from "react";
import classNames from "classnames/bind";

import { IFields } from "../fields.props";
import styles from "../fields.module.scss";

const cx = classNames.bind(styles);

interface ITextField extends IFields {
    type?: "text";
}

export const TextField = (props: ITextField) => {
    const { value, placeholder, errorText, type = "text", maxLength, minLength, className, required, onChange } = props;

    const handlerOnChange = (value: string) => onChange(value);

    return (
        <>
            <input
                className={cx("textField", className)}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => handlerOnChange(e.target.value)}
                minLength={maxLength}
                maxLength={minLength}
                required={required}
            />

            {errorText && (
                <div className={cx("warning")}>
                    <p className={cx("textError")}>{errorText}</p>
                </div>
            )}
        </>
    );
};

export default TextField;
