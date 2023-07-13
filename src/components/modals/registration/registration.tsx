import React, { useEffect } from "react";
import classNames from "classnames/bind";

import useInpyt from "@src/shared/hooks/use-inpyt";
import TextField from "@src/components/ui/fields/text-field";
import PasswordField from "@src/components/ui/fields/password-field";
import TextFieldModal from "@src/components/modals/text-field-modal";

import styles from "@src/components/modals/modal-auth/modal-auth.module.scss";
import ModalAuth from "@src/components/modals/modal-auth";

const cx = classNames.bind(styles);

const Registration = () => {
    const firstNameField = useInpyt("");
    const lastNameField = useInpyt("");
    const emailField = useInpyt("");
    const passwordField = useInpyt("");
    const passwordRepeatField = useInpyt("");
    const phoneField = useInpyt("");

    const firstNameError = useInpyt("");
    const lastNameError = useInpyt("");
    const emailError = useInpyt("");
    const passwordError = useInpyt("");
    const passwordRepeatError = useInpyt("");
    const phoneError = useInpyt("");

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => setChecked((state) => !state);

    const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
            firstNameField.onChange("");
            lastNameField.onChange("");
            emailField.onChange("");
            passwordField.onChange("");
            passwordRepeatField.onChange("");
            phoneField.onChange("");
        } catch {
            console.log("Ошибка регистрации");
        } finally {
            e.preventDefault();
        }
    };

    const lengthCheck = (field: string, onChange: any, length: number = 12) => {
        if (field.length >= length) {
            onChange(`Длинна ${field} не может быть больше ${length} символов!`);
        }
    };

    // Проверка работы валидации
    const formValidation = () => {
        firstNameError.onChange("");
        lastNameError.onChange("");
        emailError.onChange("");
        phoneError.onChange("");
        passwordError.onChange("");
        passwordRepeatError.onChange("");

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
                        <TextField placeholder="Введите свое имя" {...firstNameField} />
                    </TextFieldModal>

                    <TextFieldModal isError={Boolean(lastNameError.value)} labelText="Фамилия">
                        <TextField placeholder="Введите свою фамилию" {...lastNameField} />
                    </TextFieldModal>

                    <TextFieldModal isError={Boolean(emailError.value)} labelText="E-mail">
                        <TextField placeholder="Введите свою почту" {...emailField} />
                    </TextFieldModal>

                    <TextFieldModal isError={Boolean(phoneError.value)} labelText="Телефон">
                        <TextField placeholder="Введите свой номер телефона" type="phone" {...phoneField} />
                    </TextFieldModal>

                    <TextFieldModal isError={Boolean(passwordError.value)} labelText="Пароль">
                        <PasswordField placeholder="Введите свой пароль" {...passwordField} />
                    </TextFieldModal>

                    <TextFieldModal isError={Boolean(passwordRepeatError.value)} labelText="Повторить пароль">
                        <PasswordField
                            placeholder="Повторите свой пароль"
                            errorText="Текст ошибки"
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
                    <input
                        className={cx("checkboxFieldHide")}
                        type="checkbox"
                        checked={checked}
                        onChange={handleChange}
                    />
                    <span className={cx("checkboxField")} />
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
