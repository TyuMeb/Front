"use client";

import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "@src/components/account/settings/settings.module.scss";
import { Button } from "@src/shared/ui/button";
import { Input } from "@src/shared/ui/inputs";
import { CheckboxInput } from "@src/shared/ui/inputs";
import { PasswordInput } from "@src/shared/ui/inputs";
import { PhoneInput } from "@src/shared/ui/inputs";
import { useInput } from "@src/hooks/use-Input";

const cx = classNames.bind(styles);

const Settings = () => {
    const firstNameField = useInput("");
    const lastNameField = useInput("");
    const emailField = useInput("");
    const passwordField = useInput("");
    const phoneField = useInput("");

    const [firstNameError] = useState("");
    const [lastNameError] = useState("");
    const [emailError] = useState("");
    const [phoneError] = useState("");
    const [passwordError] = useState("");
    const [passwordRepeatError] = useState("");

    const [checked, setChecked] = useState(false);

    const handleChange = () => setChecked((state) => !state);

    return (
        <form className={cx("form")}>
            <div className={cx("inputsRegistration")}>
                <div className={cx("wrapperField")}>
                    <Input
                        label="Имя"
                        placeholder="Введите свое имя"
                        error={Boolean(firstNameError)}
                        disabled
                        id="firstName"
                        {...firstNameField}
                    />
                </div>

                <div className={cx("wrapperField")}>
                    <Input
                        label="Фамилия"
                        placeholder="Введите свою фамилию"
                        error={Boolean(lastNameError)}
                        disabled
                        id="lastName"
                        {...lastNameField}
                    />
                </div>

                <div className={cx("wrapperField")}>
                    <PhoneInput
                        label="Телефон"
                        placeholder="Введите номер телефона"
                        error={Boolean(phoneError)}
                        disabled
                        id="phone"
                        {...phoneField}
                    />
                </div>

                <div className={cx("wrapperField")}>
                    <Input
                        type="email"
                        label="E-mail"
                        placeholder="Введите свою почту"
                        error={Boolean(emailError)}
                        disabled
                        id="email"
                        {...emailField}
                    />
                </div>

                <div className={cx("wrapperField")}>
                    <PasswordInput
                        label="Пароль"
                        placeholder="Введите свой пароль"
                        error={Boolean(passwordError)}
                        id="password"
                        disabled
                        {...passwordField}
                    />
                </div>

                <div className={cx("wrapperField")}>
                    <PasswordInput
                        label="Повторить пароль"
                        placeholder="Повторите свой пароль"
                        error={Boolean(passwordRepeatError)}
                        id="passwordRepeat"
                        disabled
                        {...passwordField}
                    />
                </div>
            </div>

            <Button className={cx("positionLeft")} onClick={() => {}}>
                Редактировать
            </Button>

            <div className={styles.wrapperCheckbox}>
                <h4 className={styles.title}>Получать уведомления</h4>
                <ul className={styles.string}>
                    <CheckboxInput className={styles.checkbox} textLabel="по sms" checked={checked} disabled />
                    <CheckboxInput
                        className={styles.checkbox}
                        textLabel="на e-mail"
                        checked={checked}
                        onClick={() => handleChange()}
                    />
                    <CheckboxInput
                        className={styles.checkbox}
                        textLabel="не получать"
                        checked={checked}
                        onClick={() => handleChange()}
                    />
                </ul>
            </div>

            <div className={styles.delete}>
                <ul className={styles.row}>
                    <li>Удаление профиля</li>
                    <li className={styles.text}>
                        Если вы хотите удалить профиль, пожалуйста, <br />
                        свяжитесь с нашей технической поддержкой на <br />
                        вкладке «помощь»
                    </li>
                </ul>
            </div>
        </form>
    );
};

export default Settings;
