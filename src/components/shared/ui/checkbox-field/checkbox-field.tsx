import React from "react";
import Image from "next/image";
import checkedImage from "@public/icons/checked.svg";
import classNames from "classnames/bind";

import styles from "./checkbox-field.module.scss";
import { InputLabel, FormErrorText } from "@src/components/shared/ui/fields-new";

const cx = classNames.bind(styles);

export interface ICheckboxField {
    id?: string;
    label?: string;
    error?: boolean;
    errorText?: string;
    checked?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}

export const CheckboxField = (props: ICheckboxField) => {
    const { id, label, error, errorText, checked = false, disabled, onClick } = props;

    return (
        <>
            <div className={cx("container")}>
                <input className={cx("checkboxFieldHide")} />

                <div
                    onClick={disabled ? undefined : onClick}
                    className={cx("checkboxField", {
                        checked: checked,
                        disabled: disabled,
                        error: error && !disabled && !checked,
                    })}>
                    {!disabled && (
                        <Image
                            className={cx("checkboxFieldIcon", { checkboxFieldIconHide: checked === false })}
                            priority
                            src={checkedImage}
                            alt={""}
                        />
                    )}
                </div>

                <InputLabel disabled={label ? false : true} htmlFor={id} className={cx("labelText")}>
                    {label}
                </InputLabel>
            </div>

            {error && (
                <FormErrorText
                    disabled={!checked && !disabled ? false : true}
                    className={cx("errorTextMargins")}
                    variant={"standard"}>
                    {errorText}
                </FormErrorText>
            )}
        </>
    );
};

export default CheckboxField;
