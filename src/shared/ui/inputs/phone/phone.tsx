import React, { ChangeEvent } from "react";
import { phoneMask } from "@src/helpers/phoneMask";
import { InputProps, Input } from "../input";

export const PhoneInput = (props: InputProps) => {
    const { onChange, ...restProps } = props;

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>): ChangeEvent<HTMLInputElement> =>
        phoneMask(e, String(props.value));

    return <Input onChange={(e) => onChange?.(handlePhoneChange(e))} {...restProps} />;
};
