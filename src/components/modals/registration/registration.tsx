import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import useInput from "@src/hooks/use-input";

import styles from "@src/components/modals/modal-auth/modal-auth.module.scss";
import ModalAuth from "@src/components/modals/modal-auth";
import { submitForm } from "../validation";
import { Input, PasswordInput, PhoneInput } from "@src/shared/ui/inputs";
import { CheckboxInput } from "@src/shared/ui/inputs/checkbox";
import { Button } from "@src/shared/ui/button";

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
    };

    useEffect(() => {
        formValidation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstNameField, lastNameField, emailField, passwordField, passwordRepeatField, phoneField]);

    const renderError = () => {
        return (
            (firstNameError || lastNameError || emailError || phoneError || passwordError || passwordRepeatError) && (
                <ul className={cx("errorsText")}>
                    {firstNameError && (
                        <li className={cx("textError", { warningText: firstNameError })}>{firstNameError}</li>
                    )}
                    {lastNameError && (
                        <li className={cx("textError", { warningText: lastNameError })}>{lastNameError}</li>
                    )}
                    {emailError && <li className={cx("textError", { warningText: emailError })}>{emailError}</li>}
                    {phoneError && <li className={cx("textError", { warningText: phoneError })}>{phoneError}</li>}
                    {passwordError && <li className={cx("textError", { warningText: emailError })}>{passwordError}</li>}
                    {passwordRepeatError && (
                        <li className={cx("textError", { warningText: emailError })}>{passwordRepeatError}</li>
                    )}
                </ul>
            )
        );
    };

    return (
        <ModalAuth>
            <h2 className={cx("title", "titleSubtext")}>Создание аккаунта</h2>

            <p className={cx("text", "subtext")}>Заполните все поля, чтобы создать свой заказ</p>

            <form className={cx("form")}>
                <div className={cx("inputsRegistration")}>
                    <div className={cx("wrapperField")}>
                        <Input
                            label="Имя"
                            placeholder="Введите свое имя"
                            error={Boolean(firstNameError)}
                            id="firstName"
                            {...firstNameField}
                        />
                    </div>

                    <div className={cx("wrapperField")}>
                        <Input
                            label="Фамилия"
                            placeholder="Введите свою фамилию"
                            error={Boolean(lastNameError)}
                            id="lastName"
                            {...lastNameField}
                        />
                    </div>

                    <div className={cx("wrapperField")}>
                        <Input
                            type="email"
                            label="E-mail"
                            placeholder="Введите свою почту"
                            error={Boolean(emailError)}
                            id="email"
                            {...emailField}
                        />
                    </div>

                    <div className={cx("wrapperField")}>
                        <PhoneInput
                            label="Телефон"
                            placeholder="Введите номер телефона"
                            error={Boolean(phoneError)}
                            id="phone"
                            {...phoneField}
                        />
                    </div>

                    <div className={cx("wrapperField")}>
                        <PasswordInput
                            label="Пароль"
                            placeholder="Введите свой пароль"
                            error={Boolean(passwordError)}
                            id="password"
                            {...passwordField}
                        />
                    </div>

                    <div className={cx("wrapperField")}>
                        <PasswordInput
                            label="Повторить пароль"
                            placeholder="Повторите свой пароль"
                            error={Boolean(passwordRepeatError)}
                            id="passwordRepeat"
                            {...passwordField}
                        />
                    </div>
                </div>

                {renderError()}

                <CheckboxInput
                    error={true}
                    errorMessage="234"
                    textLabel="Вы соглашаетесь с обработкой персональных данных"
                    checked={checked}
                    onClick={() => handleChange()}
                />

                <Button
                    className={cx("positionCenter")}
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
                </Button>
            </form>
        </ModalAuth>
    );
};

export default Registration;
