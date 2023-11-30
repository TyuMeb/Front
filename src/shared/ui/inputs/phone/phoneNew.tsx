import React, { ChangeEvent, forwardRef, useState } from "react";
import { InputProps, Input } from "../input";

const PATTERN = /\D/g;

export const PhoneInputNew = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
    const [inputValue, setInputValue] = useState<string>(props.value ? String(props.value) : "");

    const formatString = (s: string): string => {
        let result = "+7 ";
        for (let i = 0; i < s.length; i++) {
            if (i === 0) {
                result += `(${s[i]}`;
            } else if (i === 2) {
                result += `${s[i]}`;
            } else if (i === 3) {
                result += `) ${s[i]}`;
            } else if (i === 6 || i == 8) {
                result += ` ${s[i]}`;
            } else {
                result += `${s[i]}`;
            }
        }
        return result;
    };

    const maskString = (newVal: string, prevVal: string): string => {
        const newNums = newVal.replace("+7", "").replace(PATTERN, "").slice(0, 10);
        const prevNums = prevVal.replace("+7", "").replace(PATTERN, "").slice(0, 10);
        return newNums !== prevNums ? formatString(newNums) : formatString(prevNums);
    };

    const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
        const eValue = e.target.value.length > 18 ? e.target.value.slice(0, 18) : e.target.value;

        let selStart: number = Number(e.target.selectionStart);
        if (selStart < 4) {
            e.target.setSelectionRange(5, 5);
            return;
        }

        if (e.target.value.length < 19) {
            const newValue = maskString(e.target.value, inputValue);
            setInputValue(newValue);
            e.target.value = newValue;
            const dif: number = newValue.length - inputValue.length;
            if (dif > 0) selStart += dif + 1;
            e.target.setSelectionRange(selStart, selStart);
            return;
        }
        setInputValue(eValue);
        e.target.value = eValue;
    };

    return <Input ref={ref} {...props} value={inputValue} onInput={handlePhoneInput} />;
});

PhoneInputNew.displayName = "PhoneInputNew";
