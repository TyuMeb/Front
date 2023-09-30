import { MouseEvent } from "react";

export const submitForm = ({ e, fields }: { e: MouseEvent<HTMLButtonElement>; fields: {} }) => {
    try {
        console.log({ ...fields });
    } catch {
        console.log("Ошибка регистрации");
    } finally {
        e.preventDefault();
    }
};

export const lengthCheck = (field: string, onChange: any, length: number = 12) => {
    if (field.length >= length) {
        onChange(`Длина ${field} не может быть больше ${length} символов!`);
    }
};
