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
        const newNums: string = newVal.slice(0, 18).replace("+7", "").replace(PATTERN, "").slice(0, 10);
        const prevNums: string = prevVal.replace("+7", "").replace(PATTERN, "").slice(0, 10);
        return newNums !== prevNums ? formatString(newNums) : formatString(prevNums);
    };

    const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
        let selStart: number = Number(e.target.selectionStart);

        if (e.target.value.length > 18) {
            e.target.value = inputValue;
            e.target.setSelectionRange(selStart - 1, selStart - 1);
            return;
        }

        if (e.target.value.length > inputValue.length && inputValue === maskString(e.target.value, inputValue)) {
            e.target.value = inputValue;
            e.target.setSelectionRange(selStart - 1, selStart - 1);
            return;
        }

        if (e.target.value.length < inputValue.length) {
            if (e.target.value[0] !== "+") e.target.value = `+${e.target.value}`;
            if (e.target.value[1] !== "7") e.target.value.replace("+", "+7");
            if (inputValue === maskString(e.target.value, inputValue)) {
                e.target.value = inputValue;
                console.log("here");
                if (selStart < 4) e.target.setSelectionRange(4, 4);
                else e.target.setSelectionRange(selStart + 1, selStart + 1);
                return;
            }
        }

        if (e.target.value.length < 4) {
            setInputValue("+7 ");
            e.target.value = "+7 ";
            e.target.setSelectionRange(4, 4);
            return;
        }

        if (selStart < 4) {
            e.target.setSelectionRange(5, 5);
            return;
        }

        if (e.target.value.length < 19) {
            const newValue: string = maskString(e.target.value, inputValue);
            setInputValue(newValue);
            e.target.value = newValue;
            const dif: number = newValue.length - inputValue.length;
            if (dif > 0) {
                if (selStart != newValue.length - 1) {
                    if (selStart === 8) selStart += dif + 2;
                    if (selStart === 7 || selStart === 12 || selStart === 15) selStart += dif;
                    if (selStart === 17) selStart;
                } else {
                    if (selStart === 17) selStart;
                    else selStart += dif + 1;
                }
            }
            e.target.setSelectionRange(selStart, selStart);
            return;
        }
    };

    return {
        inputValue,
        handlePhoneInput,
    };
}
