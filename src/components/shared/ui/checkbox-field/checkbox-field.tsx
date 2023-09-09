import React from "react";
import Image from "next/image";
import checkedImage from "@public/icons/checked.svg";
import classNames from "classnames/bind";

import styles from "./checkbox-field.module.scss";
import { InputLabel, FormHelperText } from "@src/components/shared/ui/fields-new";

const cx = classNames.bind(styles);

export interface ICheckboxField {
    id?: string;
    label?: string;
    errorText?: string;
    checked?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}

export const CheckboxField = (props: ICheckboxField) => {
    const { id, label, errorText, checked = false, disabled, onClick } = props;

    return (
        <>
            <div className={cx("container")}>
                <input className={cx("checkboxFieldHide")} />

                <div
                    onClick={disabled ? undefined : onClick}
                    className={cx("checkboxField", {
                        checked: checked,
                        disabled: disabled,
                        error: errorText && !disabled && !checked,
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

            <FormHelperText
                disabled={errorText && !checked && !disabled ? false : true}
                className={cx("helperText")}
                variant={"standard"}>
                {errorText}
            </FormHelperText>
        </>
    );
};

export default CheckboxField;
