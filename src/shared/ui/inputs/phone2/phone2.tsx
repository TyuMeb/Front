import React, { /*FC, ChangeEvent, */ forwardRef } from "react";
/*import { phoneMask } from "@src/shared/lib/phoneMask";*/
import { InputProps, Input } from "../input";
import { usePhoneMask } from "@src/hook/use-phone-mask";

export const PhoneInput2 = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
    const { inputValue, onChange } = usePhoneMask(props.value ? String(props.value) : "");

    return <Input ref={ref} {...props} value={inputValue} onChange={onChange} />;
});

PhoneInput2.displayName = "PhoneInput2";
