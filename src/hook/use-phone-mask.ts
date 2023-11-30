import { ChangeEvent, useState, useEffect } from "react";

export function usePhoneMask(initialValue: string) {
    const [inputValue, setInputValue] = useState<string>("+7");

    useEffect(() => {
        setInputValue(checkPhoneMask("+7", initialValue));
    }, []);

    function checkPhoneMask(prevVal: string, newVal: string) {
        if (/^\+7/.test(prevVal) && !/^\+7/.test(newVal)) return prevVal;

        const pr = prevVal.split(" ").join("").replace("+7", "").replace("(", "").replace(")", "");
        const res = newVal.split(" ").join("").replace("+7", "").replace("(", "").replace(")", "");
        console.log(`pr=${pr}, res=${res}`);

        if (pr !== res) {
            if (/^\d{0,10}$/.test(res)) {
                let acc: string = "";
                for (let i = 0; i < res.length; i++) {
                    if (i === 0) acc += `+7 (${res[i]}`;
                    else if (i === 3) acc += `) ${res[i]}`;
                    else if (i === 6 || i === 8 || i === 10) acc += ` ${res[i]}`;
                    else acc += res[i];
                }
                return acc;
            }
        }
        return prevVal;
    }

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        console.log(e.target.selectionStart);
        const carretPos: number = Number(e.target.selectionStart);
        const temp = checkPhoneMask(inputValue, e.target.value);

        console.log(`value = ${e.target.value} mask = ${temp}`);

        if (temp === e.target.value) return;

        setInputValue(temp);
        e.target.selectionStart = carretPos;
        e.target.selectionEnd = carretPos;
    }

    return {
        inputValue,
        onChange,
    };
}
