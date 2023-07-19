import React, { KeyboardEvent, ChangeEvent } from "react";
import classNames from "classnames/bind";

import { IFields } from "../fields.props";
import styles from "../fields.module.scss";

const cx = classNames.bind(styles);

interface IPhoneField extends IFields {}

const getInputNumbersValue = (value: string) => value.replace(/\D/g, "");

export const PhoneField = (props: IPhoneField) => {
    const { value, placeholder, errorText, maxLength, minLength, required, onChange } = props;

    const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        let newValue = getInputNumbersValue(value);

        let formattedInputValue = newValue;

        if (newValue[0] === "9") {
            newValue = "7" + newValue;
        }

        if (newValue[0]) {
            const firstSymbols = newValue[0] === "8" ? "8" : "+7";

            formattedInputValue = firstSymbols + " ";

            if (newValue.length > 1) {
                formattedInputValue += "(" + newValue.substring(1, 4);
            }

            if (newValue.length >= 5) {
                formattedInputValue += ") " + newValue.substring(4, 7);
            }

            if (newValue.length >= 8) {
                formattedInputValue += "-" + newValue.substring(7, 9);
            }

            if (newValue.length >= 10) {
                formattedInputValue += "-" + newValue.substring(9, 11);
            }
        }

        onChange(formattedInputValue);
    };

    const handlerOnKey = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code == "Backspace" && getInputNumbersValue(value).length === 1) {
            onChange("");
        }
    };

    return (
        <>
            <input
                className={cx("textField")}
                type="tel"
                placeholder={placeholder}
                value={value}
                onChange={handlerOnChange}
                onKeyDown={handlerOnKey}
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

export default PhoneField;
