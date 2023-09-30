import React, { ChangeEvent, useState } from "react";
import classNames from "classnames/bind";
import Icon from "@src/components/icon";

import { IFields } from "../fields.props";
import styles from "../fields.module.scss";

const cx = classNames.bind(styles);

interface IPasswordField extends IFields {}

export const PasswordField = (props: IPasswordField) => {
    const { value, placeholder, errorText, maxLength, className, minLength, required, onChange } = props;

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e);

    return (
        <>
            <input
                className={cx("textField", className)}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                value={value}
                onChange={(e) => handlerOnChange(e)}
                minLength={maxLength}
                maxLength={minLength}
                required={required}
            />

            <button
                className={cx("buttonShowPassword")}
                type="button"
                onMouseDown={() => setShowPassword(true)}
                onMouseUp={() => setShowPassword(false)}>
                {showPassword ? <Icon glyph="open_eye" /> : <Icon glyph="eye" />}
            </button>

            {errorText && (
                <div className={cx("warning")}>
                    <p className={cx("textError")}>{errorText}</p>
                </div>
            )}
        </>
    );
};

export default PasswordField;
