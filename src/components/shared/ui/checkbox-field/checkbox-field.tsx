import React from "react";
import Image from "next/image";
import checkedImage from "@public/icons/checked.svg";
import classNames from "classnames/bind";

import styles from "./checkbox-field.module.scss";
import { InputLabel, FormHelperText } from "@src/components/shared/ui/fields-new";

const cx = classNames.bind(styles);

interface ICheckboxField {
    id?: string;
    label?: string;
    helperText?: string;
    error?: boolean;
    checked?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}

export const CheckboxField = (props: ICheckboxField) => {
    const { id, label, helperText, error = false, checked = false, disabled, onClick } = props;

    return (
        <>
            <div className={cx("container")}>
                <input className={cx("checkboxFieldHide")} />

                <div
                    onClick={onClick}
                    className={cx("checkboxField", {
                        checked: checked,
                        disabled: disabled,
                        error: error && !disabled,
                    })}>
                    <Image
                        className={cx("checkboxFieldIcon", { checkboxFieldIconHide: checked === false })}
                        priority
                        src={checkedImage}
                        alt={""}
                    />
                </div>

                <InputLabel disabled={label ? false : true} htmlFor={id} className={cx("labelText")}>
                    {label}
                </InputLabel>
            </div>

            <FormHelperText disabled={helperText ? false : true} error={error} className={cx("helperText")}>
                {helperText}
            </FormHelperText>
        </>
    );
};

export default CheckboxField;
