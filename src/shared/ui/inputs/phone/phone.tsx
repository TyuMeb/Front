import React, { ChangeEvent, forwardRef } from "react";
import { phoneMask } from "@src/shared/lib/phoneMask";
import { InputProps, Input } from "../input";

export const PhoneInput = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange?.(phoneMask(e, String(props.value)));
    };

    return <Input ref={ref} {...props} onChange={(e) => handlePhoneChange(e)} />;
});

PhoneInput.displayName = "PhoneInput";
