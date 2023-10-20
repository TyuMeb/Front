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
