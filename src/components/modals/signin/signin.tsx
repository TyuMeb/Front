import React, { useEffect } from "react";
import classNames from "classnames/bind";

import { useAppDispatch } from "@src/redux/hooks";
import { setTypeModal } from "@src/redux/slices/modal-slice";
import useInput from "@src/hooks/use-Input";
import { TextField, PasswordField } from "@src/components/shared/ui/fields";
import TextFieldModal from "@src/components/modals/text-field-modal";

import styles from "@src/components/modals/modal-auth/modal-auth.module.scss";
import ModalAuth from "@src/components/modals/modal-auth";
import Icon from "@src/components/icon";

import { useCreateTokenMutation } from "@src/redux/api/jwt-api-slice";
import { setCookie, removeCookie } from "typescript-cookie";

const cx = classNames.bind(styles);

const SignIn = () => {
    const [createToken] = useCreateTokenMutation();
    const data = {
        email: "rustamaaa@bk.ru",
        password: "rustamaaa1",
    };

    useEffect(() => {
        createToken(data)
            .unwrap()
            .then((res) => {
                setCookie("accessToken", res.access);
                localStorage.setItem("refreshToken", res.refresh);
                console.log("Авторизация прошла успешно");
            })
            .catch((error) => {
                console.log("Неверный логин или пароль");
                removeCookie("accessToken");
                localStorage.removeItem("refreshToken");
                console.log(error);
            });
    }, []);

    const dispatch = useAppDispatch();

    /**
    // TODO Удалить код, при добавлении React Hook Form (валидации).
    */
    const emailField = useInput("");
    const passwordField = useInput("");

    const emailError = useInput("");
    const passwordError = useInput("");

    const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            console.log({
                email: emailField.value,
                password: passwordField.value,
            });
            emailField.onChange("");
            passwordField.onChange("");
        } catch {
            console.log("Ошибка");
        } finally {
            e.preventDefault();
        }
    };

    const lengthCheck = (field: string, onChange: any, length: number, labelText: string) => {
        if (field.length >= length) {
            onChange(`Длина поля ${labelText} не может быть больше ${length} символов!`);
        }
    };

    // Проверка работы валидации
    const formValidation = () => {
        emailError.onChange("");
        passwordError.onChange("");

        lengthCheck(emailField.value, emailError.onChange, 12, "E-mail");
        lengthCheck(passwordField.value, passwordError.onChange, 12, "Пароль");
    };

    useEffect(() => {
        formValidation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [emailField, passwordError]);

    const renderError = (value: string) =>
        value && <li className={cx("textError", { warningText: value })}>{value}</li>;
    /**
    // TODO Удалить код, при добавлении React Hook Form (валидации).
    */

    return (
        <ModalAuth>
            <Icon className={cx("backgroundSignIn")} glyph="signin" />
            <h2 className={styles.signinTitleSubtext}>Добро пожаловать!</h2>
            <form className={cx("form")}>
                <div className={cx("inputsSignin")}>
                    <TextFieldModal isError={Boolean(emailError.value)} labelText="E-mail">
                        <TextField className="inputAuth" placeholder="Введите почту" {...emailField} />
                    </TextFieldModal>

                    <TextFieldModal isError={Boolean(passwordError.value)} labelText="Пароль">
                        <PasswordField className="inputAuth" placeholder="Введите пароль" {...passwordField} />
                    </TextFieldModal>
                </div>

                {(emailError.value || passwordError.value) && (
                    <ul className={cx("errorsText")}>
                        {renderError(emailError.value)}
                        {renderError(passwordError.value)}
                    </ul>
                )}

                <button
                    className={cx("linkText")}
                    type="button"
                    onClick={() => dispatch(setTypeModal("resetPassword"))}>
                    Забыли пароль?
                </button>

                <button className={cx("text", "button")} type="submit" onClick={submitForm}>
                    Войти
                </button>
            </form>
        </ModalAuth>
    );
};

export default SignIn;
