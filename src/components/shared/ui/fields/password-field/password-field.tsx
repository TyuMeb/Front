import React, { useState } from "react";
import classNames from "classnames/bind";

import { IFields } from "../fields.props";
import styles from "../fields.module.scss";

const cx = classNames.bind(styles);

interface IPasswordField extends IFields {
    icon_type?: "eye";
}

export const PasswordField = (props: IPasswordField) => {
    const {
        value,
        placeholder,
        errorText,
        icon_type = "eye",
        maxLength,
        className,
        minLength,
        required,
        onChange,
    } = props;

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handlerOnChange = (value: string) => onChange(value);

    return (
        <>
            <input
                className={cx("textField", className)}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                value={value}
                onChange={(e) => handlerOnChange(e.target.value)}
                minLength={maxLength}
                maxLength={minLength}
                required={required}
            />

            <button
                className={cx("buttonShowPassword", {
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
