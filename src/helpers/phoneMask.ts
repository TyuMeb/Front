import { ChangeEvent } from "react";

const PATTERN = /\D/g;

const getInputNumbersValue = (value: string) => value.replace(PATTERN, "");

const changePhoneNumber = (e: ChangeEvent<HTMLInputElement>, previousValue: string) => {
    const input = e.target;
    const selectionStart = input.selectionEnd;

    // Когда изменяем номер
    if (input.value.length !== selectionStart) {
        // Первые 2 символа должны быть +7
        if (e.target.value.slice(0, 2) !== "+7") {
            input.value = previousValue;
            return e;
        }

        // Длина не может быть больше 16
        if (e.target.value.length > 16) {
            input.value = previousValue;
            return e;
        }

        // Пробелов не может быть больше или меньше 5
        if (e.target.value.split(" ").length < 5 || e.target.value.split(" ").length > 5) {
            input.value = previousValue;
            return e;
        }

        // Длинна элементов не должна быть боль 3
        if (e.target.value.split(" ").some((str) => str.length > 3)) {
            input.value = previousValue;
            return e;
        }

        // Только числа и + в начале
        if (/^[+][\d]+$/.test(e.target.value.split(" ").join(""))) {
            console.log("yes");
            return e;
        }
    }
};

const phoneNumberMask = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;

    let inputNumbersValue = getInputNumbersValue(input.value);
    let formattedInputValue = "";

    // Маска для при вводе +
    if (input.value[0] === "+") {
        input.value = "+7";
    }

    // Подстановка символов
    if (inputNumbersValue[0]) {
        if (inputNumbersValue.length > 0) {
            formattedInputValue += "+7";
        }

        if (inputNumbersValue.length > 1) {
            formattedInputValue += " " + inputNumbersValue.substring(1, 4);
        }

        if (inputNumbersValue.length > 4) {
            formattedInputValue += " " + inputNumbersValue.substring(4, 7);
        }

        if (inputNumbersValue.length > 7) {
            formattedInputValue += " " + inputNumbersValue.substring(7, 9);
        }

        if (inputNumbersValue.length > 9) {
            formattedInputValue += " " + inputNumbersValue.substring(9, 11);
        }

        input.value = formattedInputValue;
    } else if (input.value[0] === "+") {
        input.value = "+7";
    } else {
        input.value = "";
    }

    return e;
};

export const phoneMask = (e: ChangeEvent<HTMLInputElement>, previousValue: string = "") => {
    const event = changePhoneNumber(e, previousValue);
    if (event) {
        return event;
    }

    return phoneNumberMask(e);
};
