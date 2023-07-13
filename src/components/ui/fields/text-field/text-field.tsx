import React from "react";
import classNames from "classnames/bind";

import styles from "../fields.module.scss";

const cx = classNames.bind(styles);

interface ITextField {
    value: string;
    errorText?: string;
    placeholder?: string;
    type?: "text" | "phone";
    onChange: (value: string) => void;
}

const TextField = ({ value, placeholder, errorText, type, onChange }: ITextField) => {
    const handlerOnChange = (value: string) => onChange(value);

    return (
        <>
            <input
                className={cx("textField")}
                type={type || "text"}
                placeholder={placeholder}
                value={value}
                onChange={(e) => handlerOnChange(e.target.value)}
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
