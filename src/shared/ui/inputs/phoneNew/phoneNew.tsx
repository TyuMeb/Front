import React, { forwardRef } from "react";
import { InputProps, Input } from "../input";
import { usePhoneMask } from "@src/hook/use-phone-mask";

export const PhoneInputNew = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  const { inputValue, handlePhoneInput } = usePhoneMask(props.value ? String(props.value) : "");

  return <Input ref={ref} {...props} value={inputValue} onInput={handlePhoneInput} />;
});

PhoneInputNew.displayName = "PhoneInputNew";
