import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "../fields.module.scss";

const cx = classNames.bind(styles);

interface IPasswordField {
    value: string;
    errorText?: string;
    placeholder?: string;
    icon_type?: "eye";
    onChange: (value: string) => void;
}

const PasswordField = ({ value, placeholder, errorText, icon_type = "eye", onChange }: IPasswordField) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handlerOnChange = (value: string) => onChange(value);

    return (
        <>
            <input
                className={cx("textField")}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                value={value}
                onChange={(e) => handlerOnChange(e.target.value)}
            />

            <button
                className={cx("button", {
                    iconEye: icon_type === "eye" && !showPassword,
                    iconOpenEye: icon_type === "eye" && showPassword,
                })}
                type="button"
                onMouseDown={() => setShowPassword(true)}
                onMouseUp={() => setShowPassword(false)}
            />

            {errorText && (
                <div className={cx("warning")}>
                    <p className={cx("textError")}>{errorText}</p>
                </div>
            )}
        </>
    );
};

export default PasswordField;
