import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import useInput from "@src/hooks/use-Input";
import { СheckboxField } from "@src/components/shared/ui/fields";

import styles from "@src/components/modals/modal-auth/modal-auth.module.scss";
import ModalAuth from "@src/components/modals/modal-auth";
import InputPhone from "@src/components/shared/ui/inputs/phone";
import { Input, InputEmail, InputPassword } from "@src/components/shared/ui/inputs";
import { submitForm, lengthCheck } from "../validation";

const cx = classNames.bind(styles);

const Registration = () => {
    const firstNameField = useInput("");
    const lastNameField = useInput("");
    const emailField = useInput("");
    const passwordField = useInput("");
    const passwordRepeatField = useInput("");
    const phoneField = useInput("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordRepeatError, setPasswordRepeatError] = useState("");

    const [checked, setChecked] = useState(false);

    const handleChange = () => setChecked((state) => !state);

    // Проверка работы валидации
    const formValidation = () => {
        setFirstNameError("");
        setLastNameError("");
        setEmailError("");
        setPhoneError("");
        setPasswordError("");
        setPasswordRepeatError("");

        lengthCheck(firstNameField.value, setFirstNameError);
        lengthCheck(lastNameField.value, setLastNameError);

        lengthCheck(emailField.value, setEmailError);
        lengthCheck(phoneField.value, setPhoneError);

        lengthCheck(passwordField.value, setPasswordError);
        lengthCheck(passwordRepeatField.value, setPasswordRepeatError);
    };

    useEffect(() => {
        formValidation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstNameField, lastNameField, emailField, passwordField, passwordRepeatField, phoneField]);

    const renderError = () => {
        return (
            firstNameError ||
            lastNameError ||
            emailError ||
            phoneError ||
            passwordError ||
            (passwordRepeatError && (
                <ul className={cx("errorsText")}>
                    <li className={cx("textError", { warningText: firstNameError })}>{firstNameError}</li>
                    <li className={cx("textError", { warningText: lastNameError })}>{lastNameError}</li>
                    <li className={cx("textError", { warningText: emailError })}>{emailError}</li>
                    <li className={cx("textError", { warningText: emailError })}>{phoneError}</li>
                    <li className={cx("textError", { warningText: emailError })}>{passwordError}</li>
                    <li className={cx("textError", { warningText: emailError })}>{passwordRepeatError}</li>
                </ul>
            ))
        );
    };

    return (
        <ModalAuth>
            <h2 className={cx("title", "titleSubtext")}>Создание аккаунта</h2>

            <p className={cx("text", "subtext")}>Заполните все поля, чтобы создать свой заказ</p>

            <form className={cx("form")}>
                <div className={cx("inputsRegistration")}>
                    <div style={{ width: "296px" }}>
                        <Input
                            textLabel="Имя"
                            placeholder="Введите свое имя"
                            error={Boolean(firstNameError)}
                            id="firstName"
                            {...firstNameField}
                        />
                    </div>

                    <div style={{ width: "296px" }}>
                        <Input
                            textLabel="Фамилия"
                            placeholder="Введите свою фамилию"
                            error={Boolean(lastNameError)}
                            id="lastName"
                            {...lastNameField}
                        />
                    </div>

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
                        <InputPhone
                            textLabel="Телефон"
                            placeholder="Введите номер телефона"
                            error={Boolean(phoneError)}
                            id="phone"
                            {...phoneField}
                        />
                    </div>

                    <div style={{ width: "296px" }}>
                        <InputPassword
                            textLabel="Пароль"
                            placeholder="Введите свой пароль"
                            error={Boolean(passwordError)}
                            id="password"
                            {...passwordField}
                        />
                    </div>

                    <div style={{ width: "296px" }}>
                        <InputPassword
                            textLabel="Повторить пароль"
                            placeholder="Повторите свой пароль"
                            error={Boolean(passwordRepeatError)}
                            id="passwordRepeat"
                            {...passwordField}
                        />
                    </div>
                </div>

                {renderError()}

                <label className={cx("checkboxLabel")}>
                    <СheckboxField checked={checked} handleChange={() => handleChange()} />
                    <p className={cx("textCheckbox", "text")}>Вы соглашаетесь с обработкой персональных данных</p>
                </label>

                <button
                    className={cx("text", "button", "positionCenter")}
                    type="submit"
                    onClick={(e) =>
                        submitForm({
                            e,
                            fields: {
                                firstName: firstNameField.value,
                                lastName: lastNameField.value,
                                email: emailField.value,
                                password: passwordField.value,
                                passwordRepeat: passwordRepeatField.value,
                                phone: phoneField.value,
                            },
                        })
                    }>
                    Зарегистрироваться
                </button>
            </form>
        </ModalAuth>
    );
};

export default Registration;
