import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { useAppDispatch } from "@src/redux/hooks";
import { setTypeModal } from "@src/redux/slices/modal-slice";
import useInput from "@src/hooks/use-Input";
import { InputEmail, InputPassword } from "@src/components/shared/ui/inputs";

import styles from "@src/components/modals/modal-auth/modal-auth.module.scss";
import ModalAuth from "@src/components/modals/modal-auth";
import Icon from "@src/components/icon";

import { useCreateTokenMutation } from "@src/redux/api/jwt-api-slice";
import { setCookie, removeCookie } from "typescript-cookie";
import { lengthCheck, submitForm } from "../validation";

const cx = classNames.bind(styles);

const SignIn = () => {
    // const [createToken] = useCreateTokenMutation();
    // const data = {
    //     email: "rustamaaa@bk.ru",
    //     password: "rustamaaa1",
    // };

    // useEffect(() => {
    //     createToken(data)
    //         .unwrap()
    //         .then((res) => {
    //             setCookie("accessToken", res.access);
    //             localStorage.setItem("refreshToken", res.refresh);
    //             console.log("Авторизация прошла успешно");
    //         })
    //         .catch((error) => {
    //             console.log("Неверный логин или пароль");
    //             removeCookie("accessToken");
    //             localStorage.removeItem("refreshToken");
    //             console.log(error);
    //         });
    // }, []);

    const dispatch = useAppDispatch();

    const emailField = useInput("");
    const passwordField = useInput("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // Проверка работы валидации
    const formValidation = () => {
        setEmailError("");
        setPasswordError("");

        lengthCheck(emailField.value, setEmailError);
        lengthCheck(passwordField.value, setPasswordError);
    };

    useEffect(() => {
        formValidation();
    }, [emailField, passwordError]);

    const renderError = () =>
        (emailError || passwordError) && (
            <ul className={cx("errorsText")}>
                {emailError && <li className={cx("textError", { warningText: emailError })}>{emailError}</li>}
                {passwordError && <li className={cx("textError", { warningText: passwordError })}>{passwordError}</li>}
            </ul>
        );

    return (
        <ModalAuth>
            <Icon className={cx("backgroundSignIn")} glyph="signin" />

            <h2 className={cx("title")}>Добро пожаловать!</h2>

            <form className={cx("form")}>
                <div className={cx("inputsSignin")}>
                    <div style={{ width: "296px" }}>
                        <InputEmail
                            textLabel="E-mail"
                            placeholder="Введите свою почту"
                            error={Boolean(emailError)}
                            id="email"
                            {...emailField}
                        />
                    </div>

                    <div style={{ width: "296px" }}>
                        <InputPassword
                            textLabel="Пароль"
                            placeholder="Введите пароль"
                            error={Boolean(passwordError)}
                            id="password"
                            {...passwordField}
                        />
                    </div>
                </div>

                {renderError()}

                <button
                    className={cx("linkText")}
                    type="button"
                    onClick={() => dispatch(setTypeModal("resetPassword"))}>
                    Забыли пароль?
                </button>

                <button
                    className={cx("text", "button")}
                    type="submit"
                    onClick={(e) =>
                        submitForm({
                            e,
                            fields: {
                                emailField: emailField.value,
                                passwordField: passwordField.value,
                            },
                        })
                    }>
                    Войти
                </button>
            </form>
        </ModalAuth>
    );
};

export default SignIn;
