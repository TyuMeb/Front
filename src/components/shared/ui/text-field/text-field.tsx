import React, { ChangeEvent, useMemo, useState } from "react";
import Image from "next/image";
import classNames from "classnames/bind";

import styles from "./text-field.module.scss";
import { Input, InputPassword, InputLabel, FormErrorText, InputPhone } from "@src/components/shared/ui/fields-new";
import warning from "@public/icons/warning.svg";

const cx = classNames.bind(styles);

export interface ITextField {
    id?: string;
    className?: string;
    type?: "text" | "password" | "tel" | "email";
    size?: "m";
    variant?: "standard" | "inside";
    disabled?: boolean;
    autoFocus?: boolean;
    label?: string;
    placeholder?: string;
    errorText?: string;
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = (props: ITextField) => {
    const { className, placeholder, size, variant, label, errorText, ...restProps } = props;

    const [activeInput, setActiveInput] = useState(false);

    const onFocus = () => setActiveInput(true);

    const onBlur = () => {
        if (restProps.value?.length === 0) setActiveInput(false);
    };

    useMemo(() => {
        (variant === "inside" && restProps.value?.length) === 0 ? setActiveInput(false) : setActiveInput(true);
    }, [restProps.value, variant]);

    const constructInput = () => {
        switch (restProps.type) {
            case "password":
                return (
                    <InputPassword
                        className={cx("textField", {
                            sizeMediumField: size === "m",
                            errorInput: errorText && !restProps.disabled,
                        })}
                        onFocus={variant === "inside" ? onFocus : undefined}
                        onBlur={variant === "inside" ? onBlur : undefined}
                        placeholder={activeInput ? placeholder : ""}
                        error={errorText && !restProps.disabled ? true : false}
                        {...restProps}
                    />
                );
            case "tel":
                return (
                    <InputPhone
                        className={cx("textField", {
                            sizeMediumField: size === "m",
                            errorInput: errorText && !restProps.disabled,
                        })}
                        onFocus={variant === "inside" ? onFocus : undefined}
                        onBlur={variant === "inside" ? onBlur : undefined}
                        placeholder={activeInput ? placeholder : ""}
                        error={errorText && !restProps.disabled ? true : false}
                        {...restProps}
                    />
                );
            default:
                return (
                    <Input
                        className={cx("textField", {
                            sizeMediumField: size === "m",
                            errorInput: errorText && !restProps.disabled,
                        })}
                        onFocus={variant === "inside" ? onFocus : undefined}
                        onBlur={variant === "inside" ? onBlur : undefined}
                        placeholder={activeInput ? placeholder : ""}
                        error={errorText && !restProps.disabled ? true : false}
                        {...restProps}
                    />
                );
        }
    };

    return (
        <div className={cx("container", { sizeMedium: size === "m" }, className)}>
            <InputLabel
                disabled={label ? false : true}
                error={errorText && !restProps.disabled ? true : false}
                htmlFor={restProps.id}
                className={cx({
                    labelInside: variant === "inside",
                    labelStandard: variant === "standard",
                    labelInsideFocus: activeInput,
                })}>
                {errorText && !restProps.disabled && (
                    <Image priority src={warning} alt={""} className={cx("warningIcon")} />
                )}

                {label}
            </InputLabel>

            {constructInput()}

            <FormErrorText
                disabled={errorText && !restProps.disabled ? false : true}
                className={cx("errorTextMargins")}
                variant={"standard"}>
                {errorText}
            </FormErrorText>
        </div>
    );
};
