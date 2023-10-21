import React, { ChangeEvent } from "react";
import { phoneMask } from "@src/helpers/phoneMask";
import { InputProps, Input } from "../input";

export const PhoneInput = (props: InputProps) => {
    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange?.(phoneMask(e, String(props.value)));
    };

    return <Input {...props} onChange={(e) => handlePhoneChange(e)} />;
};
