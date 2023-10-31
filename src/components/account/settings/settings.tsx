"use client";

import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "@src/components/modals/modal-auth/modal-auth.module.scss";
import { Button } from "@src/shared/ui/button";
import { Input } from "@src/shared/ui/inputs";
import { CheckboxInput } from "@src/shared/ui/inputs";
import { PasswordInput } from "@src/shared/ui/inputs";
import { PhoneInput } from "@src/shared/ui/inputs";
import { useInput } from "@src/hooks/use-Input";
import { submitForm } from "@src/components/modals/validation";

const cx = classNames.bind(styles);

const Settings = () => {
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
        </form>

        // <div className={styles.wrapperSettings}>
        //     <div className={styles.wrapperInput}>
        //         <ul className={styles.string}>
        //             <div className={styles.name}>
        //                 <h4 className={styles.title}>Имя</h4>
        //                 <Input />
        //             </div>
        //             <div className={styles.name}>
        //                 <h4 className={styles.title}>Фамилия</h4>
        //                 <Input />
        //             </div>
        //         </ul>
        //         <ul className={styles.string}>
        //             <div className={styles.name}>
        //                 <h4 className={styles.title}>Телефон</h4>
        //                 <PhoneInput />
        //             </div>
        //             <div className={styles.name}>
        //                 <h4 className={styles.title}>E-mail</h4>
        //                 <Input />
        //             </div>
        //         </ul>
        //         <ul className={styles.string}>
        //             <div className={styles.name}>
        //                 <h4 className={styles.title}>Пароль</h4>
        //                 <PasswordInput />
        //             </div>
        //             <div className={styles.name}>
        //                 <h4 className={styles.title}>Повторите пароль</h4>
        //                 <PasswordInput />
        //             </div>
        //         </ul>
        //     </div>
        //     <div className={styles.wrapperButton}>
        //         <Button onClick={() => {}}>Редактировать</Button>
        //     </div>
        //     <div className={styles.wrapperCheckbox}>
        //         <h4>Получать уведомления</h4>
        //         <ul className={styles.string}>
        //             <CheckboxInput />
        //             <h5>по sms</h5>
        //             <CheckboxInput />
        //             <h5>на e-mail</h5>
        //             <CheckboxInput />
        //             <h5>не получать</h5>
        //         </ul>
        //     </div>
        //     <div className={styles.delete}>
        //         <ul className={styles.row}>
        //             <li>Удаление профиля</li>
        //             <li>
        //                 Если вы хотите удалить профиль, пожалуйста, <br />
        //                 свяжитесь с нашей технической поддержкой на <br />
        //                 вкладке «помощь»
        //             </li>
        //         </ul>
        //     </div>
        // </div>
    );
};

export default Settings;
