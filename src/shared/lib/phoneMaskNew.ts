import { ChangeEvent } from "react";

const PATTERN = /\D/g;

const getInputNumbersValue = (value: string) => value.replace(PATTERN, "");

const formatString = (s: string): string => {
    let result = "+7 ";

    for (let i = 0; i < s.length; i++) {
        if (i === 0) {
            result += `(${s[i]}`;
        } else if (i === 2) {
            result += `${s[i]}) `;
        } else if (i === 3 || i === 6 || i == 8) {
            result += ` ${s[i]})`;
        } else {
            result += `${s[i]})`;
        }
    }
    return result;
};

const maskString = (newVal: string, prevVal: string): string => {
    const newNums = newVal.replace("+7", "").replace(PATTERN, "");
    const prevNums = prevVal.replace("+7", "").replace(PATTERN, "");
    console.log(prevNums);
    return newNums !== prevNums ? formatString(newNums) : formatString(prevNums);
};

export const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>, prev: string) => {
    const newInputValue = maskString(prev, e.target.value);
    console.log(newInputValue);
    return newInputValue;
};

// export const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
//     const input = e.target as HTMLInputElement;
//     let inputNumbersValue: string = getInputNumbersValue(input.value);
//     let formattedInputValue: string = "";
//     const selectionStart = input.selectionStart;

//     console.log(inputNumbersValue);

//     if(!inputNumbersValue) {
//         return (input.value = "");
//     }

//     if(input.value.length !== selectionStart) {
//         return;
//     }

//     if(["7", "8"].indexOf(inputNumbersValue[0]) > -1) {
//         if(inputNumbersValue[0] === "8") {
//             inputNumbersValue = `7 ${inputNumbersValue}`;
//         }

//         // const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
//         const firstSymbols = "+7";
//         formattedInputValue = `${firstSymbols} `;

//         if (inputNumbersValue.length > 1) {
//             formattedInputValue += `(${inputNumbersValue.substring(1,3)}`;
//         }

//         if (inputNumbersValue.length >= 5) {
//             formattedInputValue += `) ${inputNumbersValue.substring(4,7)}`;
//         }

//         if (inputNumbersValue.length >= 8) {
//             formattedInputValue += ` ${inputNumbersValue.substring(7,9)}`;
//         }

//         if (inputNumbersValue.length >= 10) {
//             formattedInputValue += ` ${inputNumbersValue.substring(9,11)}`;
//         }
//     } else {
//         formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
//     }

//     input.value = formattedInputValue;
// };

// export const phoneMask = (e: ChangeEvent<HTMLInputElement>, previousValue: string = "") => {
//     const event = changePhoneNumber(e, previousValue);
//     if (event) {
//         return event;
//     }

//     return phoneNumberMask(e);
// };
