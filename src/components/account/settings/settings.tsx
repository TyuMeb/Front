"use client";

import React, { useState } from "react";

import styles from "@src/components/account/settings/settings.module.scss";
import { Button } from "@src/shared/ui/button";
import { Input } from "@src/shared/ui/inputs";
import { CheckboxInput } from "@src/shared/ui/inputs";
import { PasswordInput } from "@src/shared/ui/inputs";
import { PhoneInput } from "@src/shared/ui/inputs";
import { useInput } from "@src/hooks/use-input";

const Settings = () => {
    const firstNameField = useInput("");
    const lastNameField = useInput("");
    const emailField = useInput("");
    const passwordField = useInput("");
    const repeatPasswordField = useInput("");
    const phoneField = useInput("");

    const [noticeEmail, setNoticeEmail] = useState(false);
    const [notNotice, setNotNotice] = useState(false);

    const handleChangeNoticeEmail = () => {
        setNotNotice(false);
        setNoticeEmail(true);
    };
    const handleChangeNotNotice = () => {
        setNotNotice(true);
        setNoticeEmail(false);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log({
            noticeEmail,
            notNotice,
            firstNameField,
            lastNameField,
            emailField,
            passwordField,
            repeatPasswordField,
            phoneField,
        });
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className={styles.inputsRegistration}>
                <Input label="Имя" placeholder="Введите свое имя" disabled id="firstName" {...firstNameField} />

                <Input label="Фамилия" placeholder="Введите свою фамилию" disabled id="lastName" {...lastNameField} />

                <PhoneInput label="Телефон" placeholder="Введите номер телефона" disabled id="phone" {...phoneField} />

                <Input
                    type="email"
                    label="E-mail"
                    placeholder="Введите свою почту"
                    disabled
                    id="email"
                    {...emailField}
                />

                <PasswordInput
                    label="Пароль"
                    placeholder="Введите свой пароль"
                    id="password"
                    disabled
                    {...passwordField}
                />

                <PasswordInput
                    label="Повторить пароль"
                    placeholder="Повторите свой пароль"
                    id="passwordRepeat"
                    disabled
                    {...repeatPasswordField}
                />
            </div>

            <Button className={styles.marginButton} onClick={() => {}}>
                Редактировать
            </Button>

            <div className={styles.wrapperCheckbox}>
                <h2 className={styles.title}>Получать уведомления</h2>

                <ul className={styles.list}>
                    <CheckboxInput
                        className={styles.checkbox}
                        textLabel="на e-mail"
                        checked={noticeEmail}
                        onClick={handleChangeNoticeEmail}
                    />
                    <CheckboxInput
                        className={styles.checkbox}
                        textLabel="не получать"
                        checked={notNotice}
                        onClick={handleChangeNotNotice}
                    />
                </ul>
            </div>

            <div className={styles.row}>
                <h2 className={styles.title}>Удаление профиля</h2>
                <p className={styles.text}>
                    Если вы хотите удалить профиль, пожалуйста, <br />
                    свяжитесь с нашей технической поддержкой на <br />
                    вкладке «помощь»
                </p>
            </div>
        </form>
    );
};

export default Settings;
