import { ChangeEvent, useState } from "react";

const PATTERN = /\D/g;

export interface TUsePhoneMaskHook {
    inputValue: string;
    handlePhoneInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function usePhoneMask(initialValue: string): TUsePhoneMaskHook {
    const [inputValue, setInputValue] = useState<string>(initialValue);

    const formatString = (s: string): string => {
        let result: string = "+7 ";
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
        const newNums: string = newVal.replace("+7", "").replace(PATTERN, "").slice(0, 10);
        const prevNums: string = prevVal.replace("+7", "").replace(PATTERN, "").slice(0, 10);
        return newNums !== prevNums ? formatString(newNums) : formatString(prevNums);
    };

    const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
        let eValue: string = e.target.value.length > 18 ? e.target.value.slice(0, 18) : e.target.value;

        if (e.target.value.length < 4) {
            setInputValue("+7 ");
            eValue = "+7 ";
            e.target.value = eValue;
            return;
        }

        let selStart: number = Number(e.target.selectionStart);
        if (selStart < 4) {
            e.target.setSelectionRange(5, 5);
            return;
        }

        if (e.target.value.length < 19) {
            const newValue: string = maskString(e.target.value, inputValue);
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

    return {
        inputValue,
        handlePhoneInput,
    };
}
