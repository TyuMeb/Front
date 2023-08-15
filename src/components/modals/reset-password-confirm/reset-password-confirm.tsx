import React, { useEffect } from "react";
import classNames from "classnames/bind";
import { useAppDispatch, useAppSelector } from "@src/redux/hooks";
import { setTypeModal } from "@src/redux/slices/modal-slice";
import { PasswordField } from "@src/components/shared/ui/fields";
import TextFieldModal from "@src/components/modals/text-field-modal";
import useInput from "@src/hooks/use-Input";
import { usePostUsersResetPasswordConfirmMutation } from "@src/redux/api/users-api-slice";

import styles from "@src/components/modals/modal-auth/modal-auth.module.scss";
import ModalAuth from "@src/components/modals/modal-auth";

const cx = classNames.bind(styles);

export const ResetPasswordConfirm = () => {
    const dispatch = useAppDispatch();

    const passwordField = useInput("");

    const passwordError = useInput("");

    const [ResetPasswordConfirm] = usePostUsersResetPasswordConfirmMutation();

    const { passwordResetConfirm } = useAppSelector((store) => store.query);

    const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (passwordResetConfirm) {
            ResetPasswordConfirm({ new_password: passwordField.value, ...passwordResetConfirm })
                .unwrap()
                .then((data) => {
                    console.log(data);
                    dispatch(setTypeModal("signIn"));
                })
                .catch((e) => console.log("Ошибка востановления пароля1", e));

            passwordField.onChange("");
        }
    };

    const lengthCheck = (field: string, onChange: any, length: number = 12) => {
        if (field.length >= length) {
            onChange(`Длина ${field} не может быть больше ${length} символов!`);
        }
    };

    // Проверка работы валидации
    const formValidation = () => {
        passwordError.onChange("");
        lengthCheck(passwordError.value, passwordError.onChange);
    };

    useEffect(() => {
        formValidation();
    }, [passwordField]);

    const renderError = (value: string) =>
        value && <li className={cx("textError", { warningText: value })}>{value}</li>;

    return (
        <ModalAuth>
            <h2 className={cx("title", "titleSubtext")}>Новый пароль</h2>

            <p className={cx("text", "subtext")}>Чтобы изменить пароль, нужно ввести новый пароль.</p>

            <form className={cx("form")}>
                <div className={cx("inputsResetPassword")}>
                    <TextFieldModal isError={Boolean(passwordError.value)} labelText="Новый пароль">
                        <PasswordField className="inputAuth" placeholder="Введите новый пароль" {...passwordField} />
                    </TextFieldModal>
                </div>

                {passwordError.value && <ul className={cx("errorsText")}>{renderError(passwordField.value)}</ul>}

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

export default ResetPasswordConfirm;
