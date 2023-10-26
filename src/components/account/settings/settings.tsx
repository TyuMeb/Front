"use client";

import { HTMLAttributes } from "react";
import styles from "./settings.module.scss";
import { Button } from "@src/shared/ui/button/button";
import { Input } from "@src/shared/ui/inputs";
import { CheckboxInput } from "@src/shared/ui/inputs";
import { PasswordInput } from "@src/shared/ui/inputs";
import { PhoneInput } from "@src/shared/ui/inputs";

interface SettingsI extends HTMLAttributes<HTMLDivElement> {}

const Settings = (props: SettingsI) => {
    return (
        <div className={styles.wrapperSettings}>
            <div className={styles.wrapperInput}>
                <ul className={styles.string}>
                    <div className={styles.name}>
                        <h4 className={styles.title}>Имя</h4>
                        <Input />
                    </div>
                    <div className={styles.name}>
                        <h4 className={styles.title}>Фамилия</h4>
                        <Input />
                    </div>
                </ul>
                <ul className={styles.string}>
                    <div className={styles.name}>
                        <h4 className={styles.title}>Телефон</h4>
                        <PhoneInput />
                    </div>
                    <div className={styles.name}>
                        <h4 className={styles.title}>E-mail</h4>
                        <Input />
                    </div>
                </ul>
                <ul className={styles.string}>
                    <div className={styles.name}>
                        <h4 className={styles.title}>Пароль</h4>
                        <PasswordInput />
                    </div>
                    <div className={styles.name}>
                        <h4 className={styles.title}>Повторите пароль</h4>
                        <PasswordInput />
                    </div>
                </ul>
            </div>
            <div className={styles.wrapperButton}>
                <Button onClick={() => {}}>Редактировать</Button>
            </div>
            <div className={styles.wrapperCheckbox}>
                <h4>Получать уведомления</h4>
                <ul className={styles.string}>
                    <CheckboxInput />
                    <h5>по sms</h5>
                    <CheckboxInput />
                    <h5>на e-mail</h5>
                    <CheckboxInput />
                    <h5>не получать</h5>
                </ul>
            </div>
            <div className={styles.delete}>
                <ul className={styles.row}>
                    <li>Удаление профиля</li>
                    <li>
                        Если вы хотите удалить профиль, пожалуйста, <br />
                        свяжитесь с нашей технической поддержкой на <br />
                        вкладке «помощь»
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Settings;
