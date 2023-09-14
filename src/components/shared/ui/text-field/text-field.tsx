import React, { ChangeEvent, useMemo, useState } from "react";
import Image from "next/image";
import classNames from "classnames/bind";

import styles from "./text-field.module.scss";
import {
    Input,
    InputPassword,
    InputLabel,
    FormErrorText,
    InputPhone,
    InputEmail,
} from "@src/components/shared/ui/fields-new";
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
    error?: boolean;
    errorText?: string;
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = (props: ITextField) => {
    const { className, placeholder, size, variant, label, error, errorText, ...restProps } = props;

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
                            errorInput: error && !restProps.disabled,
                        })}
                        onFocus={variant === "inside" ? onFocus : undefined}
                        onBlur={variant === "inside" ? onBlur : undefined}
                        placeholder={activeInput ? "Введите пароль" : ""}
                        error={error && !restProps.disabled ? true : false}
                        {...restProps}
                    />
                );
            case "tel":
                return (
                    <InputPhone
                        className={cx("textField", {
                            sizeMediumField: size === "m",
                            errorInput: error && !restProps.disabled,
                        })}
                        onFocus={variant === "inside" ? onFocus : undefined}
                        onBlur={variant === "inside" ? onBlur : undefined}
                        placeholder={activeInput ? "Введите свой номер телефона" : ""}
                        error={error && !restProps.disabled ? true : false}
                        {...restProps}
                    />
                );
            case "email":
                return (
                    <InputEmail
                        className={cx("textField", { sizeMediumField: size === "m" })}
                        onFocus={variant === "inside" ? onFocus : undefined}
                        onBlur={variant === "inside" ? onBlur : undefined}
                        placeholder={activeInput ? "Введите e-mail" : ""}
                        error={error && !restProps.disabled ? true : false}
                        // refEmail={refEmail}
                        {...restProps}
                    />
                );
            default:
                return (
                    <Input
                        className={cx("textField", {
                            sizeMediumField: size === "m",
                            errorInput: error && !restProps.disabled,
                        })}
                        onFocus={variant === "inside" ? onFocus : undefined}
                        onBlur={variant === "inside" ? onBlur : undefined}
                        placeholder={activeInput ? placeholder : ""}
                        error={error && !restProps.disabled ? true : false}
                        {...restProps}
                    />
                );
        }
    };

    const labelText = () => {
        switch (restProps.type) {
            case "password":
                return "Пароль";
            case "email":
                return "E-mail";
            case "tel":
                return "Телефон";
            default:
                return label;
        }
    };

    const errorTextData = () => {
        switch (restProps.type) {
            case "password":
                return "Неверный пароль";
            case "email":
                return "Неверный e-mail";
            case "tel":
                return "Неверный номер телефона";
            default:
                return errorText;
        }
    };

    return (
        <div className={cx("container", { sizeMedium: size === "m" }, className)}>
            <InputLabel
                disabled={label ? false : true}
                error={error && !restProps.disabled ? true : false}
                htmlFor={restProps.id}
                className={cx({
                    labelInside: variant === "inside",
                    labelStandard: variant === "standard",
                    labelInsideFocus: activeInput,
                })}>
                {error && !restProps.disabled && (
                    <Image priority src={warning} alt={""} className={cx("warningIcon")} />
                )}

                {labelText()}
            </InputLabel>

            {constructInput()}

            {error && (
                <FormErrorText
                    disabled={error && !restProps.disabled ? false : true}
                    className={cx("errorTextMargins")}
                    variant={"standard"}>
                    {errorTextData()}
                </FormErrorText>
            )}
        </div>
    );
};
