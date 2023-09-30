import React, { useEffect, MouseEvent } from "react";
import classNames from "classnames/bind";

import useInput from "@src/hooks/use-Input";
import { TextField, PasswordField, СheckboxField } from "@src/components/shared/ui/fields";
import TextFieldModal from "@src/components/modals/text-field-modal";

import styles from "@src/components/modals/modal-auth/modal-auth.module.scss";
import ModalAuth from "@src/components/modals/modal-auth";
import InputPhone from "@src/components/shared/ui/inputs/phone";

const cx = classNames.bind(styles);

const Registration = () => {
    const firstNameField = useInput("");
    const lastNameField = useInput("");
    const emailField = useInput("");
    const passwordField = useInput("");
    const passwordRepeatField = useInput("");
    const phoneField = useInput("");

    const firstNameError = useInput("");
    const lastNameError = useInput("");
    const emailError = useInput("");
    const passwordError = useInput("");
    const passwordRepeatError = useInput("");
    const phoneError = useInput("");

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => setChecked((state) => !state);

    const submitForm = (e: MouseEvent<HTMLButtonElement>) => {
        try {
            console.log({
                firstName: firstNameField.value,
                lastName: lastNameField.value,
                email: emailField.value,
                password: passwordField.value,
                password_repeat: passwordRepeatField.value,
                phone: phoneField.value,
                checked,
            });
            firstNameField.value = "";
            lastNameField.value = "";
            emailField.value = "";
            phoneField.value = "";
            passwordField.value = "";
            passwordRepeatField.value = "";
        } catch {
            console.log("Ошибка регистрации");
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
        firstNameError.value = "";
        lastNameError.value = "";
        emailError.value = "";
        phoneError.value = "";
        passwordError.value = "";
        passwordRepeatError.value = "";

        lengthCheck(firstNameField.value, firstNameError.onChange);
        lengthCheck(lastNameField.value, lastNameError.onChange);

        lengthCheck(emailField.value, emailError.onChange);
        lengthCheck(phoneField.value, phoneError.onChange);

        lengthCheck(passwordField.value, passwordError.onChange);
        lengthCheck(passwordRepeatField.value, passwordRepeatError.onChange);
    };

    useEffect(() => {
        formValidation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstNameField, lastNameField, emailField, passwordField, passwordRepeatField, phoneField]);

    const renderError = (value: string) =>
        value && <li className={cx("textError", { warningText: value })}>{value}</li>;

    return (
        <ModalAuth>
            <h2 className={cx("title", "titleSubtext")}>Создание аккаунта</h2>

            <p className={cx("text", "subtext")}>Заполните все поля, чтобы создать свой заказ</p>

            <form className={cx("form")}>
                <div className={cx("inputsRegistration")}>
                    <TextFieldModal isError={Boolean(firstNameError.value)} labelText="Имя">
                        <TextField className="inputAuth" placeholder="Введите свое имя" {...firstNameField} />
                    </TextFieldModal>

                    <TextFieldModal isError={Boolean(lastNameError.value)} labelText="Фамилия">
                        <TextField className="inputAuth" placeholder="Введите свою фамилию" {...lastNameField} />
                    </TextFieldModal>

                    <TextFieldModal isError={Boolean(emailError.value)} labelText="E-mail">
                        <TextField className="inputAuth" placeholder="Введите свою почту" {...emailField} />
                    </TextFieldModal>

                    <div style={{ width: "296px" }}>
                        <InputPhone textLabel="Телефон" placeholder="Введите номер телефона" {...phoneField} />
                    </div>

                    <TextFieldModal isError={Boolean(passwordError.value)} labelText="Пароль">
                        <PasswordField className="inputAuth" placeholder="Введите свой пароль" {...passwordField} />
                    </TextFieldModal>

                    <TextFieldModal isError={Boolean(passwordRepeatError.value)} labelText="Повторить пароль">
                        <PasswordField
                            className="inputAuth"
                            placeholder="Повторите свой пароль"
                            {...passwordRepeatField}
                        />
                    </TextFieldModal>
                </div>

                {(firstNameError.value ||
                    lastNameError.value ||
                    emailError.value ||
                    phoneError.value ||
                    passwordError.value ||
                    passwordRepeatError.value) && (
                    <ul className={cx("errorsText")}>
                        {renderError(firstNameError.value)}
                        {renderError(lastNameError.value)}

                        {renderError(emailError.value)}
                        {renderError(phoneError.value)}

                        {renderError(passwordError.value)}
                        {renderError(passwordRepeatError.value)}
                    </ul>
                )}

                <label className={cx("checkboxLabel")}>
                    <СheckboxField checked={checked} handleChange={() => handleChange()} />
                    <p className={cx("textCheckbox", "text")}>Вы соглашаетесь с обработкой персональных данных</p>
                </label>

                <button className={cx("text", "button", "positionCenter")} type="submit" onClick={submitForm}>
                    Зарегистрироваться
                </button>
            </form>
        </ModalAuth>
    );
};

export default Registration;
