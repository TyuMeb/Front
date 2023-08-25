import React, { ChangeEvent, useMemo, useState } from "react";
import Image from "next/image";
import classNames from "classnames/bind";

import styles from "./text-field.module.scss";
import { Input, InputPassword, InputLabel, FormHelperText, InputPhone } from "@src/components/shared/ui/fields-new";
import warning from "@public/icons/warning.svg";

const cx = classNames.bind(styles);

export interface ITextField {
    id?: string;
    className?: string;
    type?: "text" | "password" | "tel" | "email";
    size?: "m";
    variant?: "standard" | "inside";
    disabled?: boolean;
    error?: boolean;
    autoFocus?: boolean;
    required?: boolean;
    label?: string;
    placeholder?: string;
    helperText?: string;
    maxLength?: number;
    minLength?: number;
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = (props: ITextField) => {
    const { className, placeholder, size, variant, label, helperText, required, ...restProps } = props;

    const [activeInput, setActiveInput] = useState(false);

    const onFocus = () => setActiveInput(true);

    const onBlur = () => {
        if (restProps.value?.length === 0) setActiveInput(false);
    };

    useMemo(() => {
        variant === "inside" && restProps.value?.length === 0 ? setActiveInput(false) : setActiveInput(true);
    }, [restProps.value, variant]);

    const constructInput = () => {
        switch (restProps.type) {
            case "password":
                return (
                    <InputPassword
                        className={cx("textField")}
                        onFocus={variant === "inside" ? onFocus : undefined}
                        onBlur={variant === "inside" ? onBlur : undefined}
                        placeholder={activeInput ? placeholder : ""}
                        {...restProps}
                    />
                );
            case "tel":
                return (
                    <InputPhone
                        className={cx("textField")}
                        onFocus={variant === "inside" ? onFocus : undefined}
                        onBlur={variant === "inside" ? onBlur : undefined}
                        placeholder={activeInput ? placeholder : ""}
                        {...restProps}
                    />
                );
            default:
                return (
                    <Input
                        className={cx("textField")}
                        onFocus={variant === "inside" ? onFocus : undefined}
                        onBlur={variant === "inside" ? onBlur : undefined}
                        placeholder={activeInput ? placeholder : ""}
                        {...restProps}
                    />
                );
        }
    };

    return (
        <div className={cx("container")}>
            <InputLabel
                disabled={label ? false : true}
                error={restProps.error}
                htmlFor={restProps.id}
                className={cx({
                    labelInside: variant === "inside",
                    labelStandard: variant === "standard",
                    labelInsideFocus: activeInput,
                })}>
                {restProps.error && <Image priority src={warning} alt={""} className={cx("warningIcon")} />}
                {label}
            </InputLabel>

            {constructInput()}

            <FormHelperText disabled={helperText ? false : true} error={restProps.error} className={cx("helperText")}>
                {helperText}
            </FormHelperText>
        </div>
    );
};
