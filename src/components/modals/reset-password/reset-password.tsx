import React, { useEffect } from "react";
import classNames from "classnames/bind";

import { useAppDispatch } from "@src/redux/hooks";
import { setTypeModal } from "@src/redux/slices/modal-slice";
import { TextField } from "@src/components/shared/ui/fields";
import TextFieldModal from "@src/components/modals/text-field-modal";
import useInput from "@src/hooks/use-Input";

import styles from "@src/components/modals/modal-auth/modal-auth.module.scss";
import ModalAuth from "@src/components/modals/modal-auth";
import Icon from "@src/components/icon";

const cx = classNames.bind(styles);

export const ResetPassword = () => {
    const dispatch = useAppDispatch();

    const emailField = useInput("");

    const emailError = useInput("");

    const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            console.log({ email: emailField.value });
            emailField.onChange("");
        } catch {
            console.log("Ошибка востановления пароля");
        } finally {
            e.preventDefault();
        }
    };

    const lengthCheck = (field: string, onChange: any, length: number = 12) => {
        if (field.length >= length) {
            onChange(`Длина ${field} не может быть больше ${length} символов!`);
        }
    };

    // Проверка работы валидации
    const formValidation = () => {
        emailError.onChange("");
        lengthCheck(emailField.value, emailError.onChange);
    };

    useEffect(() => {
        formValidation();
    }, [emailField]);

    const renderError = (value: string) =>
        value && <li className={cx("textError", { warningText: value })}>{value}</li>;

    return (
        <ModalAuth>
            <Icon className={cx("backgroundResetPassword")} glyph="resetPassword" />

            <h2 className={cx("title", "titleSubtext")}>Восстановление пароля</h2>

            <p className={cx("text", "subtext")}>
                Введите E-mail, который вы указывали при регистрации. Туда придет инструкция по сбросу пароля.
            </p>

            <form className={cx("form")}>
                <div className={cx("inputsResetPassword")}>
                    <TextFieldModal isError={Boolean(emailError.value)} labelText="E-mail">
                        <TextField className="inputAuth" placeholder="Введите свою почту" {...emailField} />
                    </TextFieldModal>
                </div>

                {emailError.value && <ul className={cx("errorsText")}>{renderError(emailError.value)}</ul>}

                <ul className={cx("listButtons")}>
                    <li className={cx("itemButtons")}>
                        <button className={cx("text", "button")} type="submit" onClick={submitForm}>
                            Сбросить пароль
                        </button>
                    </li>

                    <li className={cx("itemButtons")}>
                        <button
                            className={cx("text", "button", "buttonWhite")}
                            type="button"
                            onClick={() => dispatch(setTypeModal("signIn"))}>
                            Отмена
                        </button>
                    </li>
                </ul>
            </form>
        </ModalAuth>
    );
};

export default ResetPassword;
