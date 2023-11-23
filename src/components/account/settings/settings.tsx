"use client";

import React, { useState, useEffect, useCallback, FormEvent, Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "@src/components/account/settings/settings.module.scss";
import { Button } from "@src/shared/ui/button";
import { Input } from "@src/shared/ui/inputs";
import { CheckboxInput } from "@src/shared/ui/inputs";
import { PasswordInput } from "@src/shared/ui/inputs";
import { PhoneInput } from "@src/shared/ui/inputs";
import { useInput } from "@src/hook/use-input";

export interface TSettings {
    name: string;
    surname: string;
    email: string;
    phone: string;
    currentPass: string;
    newPass: string;
    newPassRepeat: string;
    notice: boolean;
}

const Settings = () => {
    const [noticeEmail, setNoticeEmail] = useState(true);
    const [isModifyMode, setIsModifyMode] = useState(false);
    const [userData, setUserData] = useState<TSettings>({
        name: "",
        surname: "",
        email: "",
        phone: "",
        currentPass: "",
        newPass: "",
        newPassRepeat: "",
        notice: false,
    });

    const {
        register,
        handleSubmit,
        reset,
        getValues,
        setError,
        clearErrors,
        formState: { errors, isValid, isDirty },
    } = useForm<TSettings>({
        defaultValues: {
            name: "John",
            surname: "Doe",
            email: "JohnDoe@yahoo.com",
            phone: "+71234567890",
            currentPass: "12345678",
            newPass: "12345678",
            newPassRepeat: "12345678",
            notice: true,
        },
        mode: "onChange",
    });

    const handleModifyModeOn = () => {
        setIsModifyMode(true);
    };

    const handleModifyModeOff = () => {
        setIsModifyMode(false);
    };

    const handleSaveModiifications = () => {
        handleModifyModeOff();
    };

    const handleCancelModiifications = () => {
        handleModifyModeOff();
        reset();
    };

    const handleChangeNotice = () => {
        setNoticeEmail(true);
    };

    const handleChangeNotNotice = () => {
        setNoticeEmail(false);
    };

    const submit: SubmitHandler<TSettings> = (data) => {
        console.log(data);
        handleSaveModiifications();
    };

    const handleNewPassChange = (flag: boolean) => {
        if (getValues().newPass !== getValues().newPassRepeat) {
            setError("newPassRepeat", { type: "custom", message: "пароли не совпадают" });
            return flag ? "Пароли не совпадают" : undefined;
        } else {
            clearErrors("newPassRepeat");
            clearErrors("newPass");
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className={styles.inputsRegistration}>
                <Input
                    className={styles.firstCol}
                    type="text"
                    label="Имя"
                    placeholder="Введите свое имя"
                    disabled={isModifyMode ? false : true}
                    id="firstName"
                    error={errors.name ? true : false}
                    errorMessage={errors?.name ? errors.name.message : ""}
                    {...register("name", {
                        required: "Поле должно быть заполнено",
                        minLength: {
                            message: "Длина имени не менее 2 символов",
                            value: 2,
                        },
                        maxLength: {
                            message: "Длина имени не более 40 символов",
                            value: 40,
                        },
                        pattern: {
                            message: "Может включать только заглавные и строчные буквы и символ -",
                            value: RegExp("^[a-zA-Zа-яА-ЯеЁ\\-_]{2,}$"),
                        },
                    })}
                />

                <Input
                    type="text"
                    label="Фамилия"
                    placeholder="Введите свою фамилию"
                    disabled={isModifyMode ? false : true}
                    id="lastName"
                    error={errors.surname ? true : false}
                    errorMessage={errors?.surname ? errors.surname.message : ""}
                    {...register("surname", {
                        required: "Поле должно быть заполнено",
                        minLength: {
                            message: "Длина фамилии не менее 2 символов",
                            value: 2,
                        },
                        maxLength: {
                            message: "Длина фамилии не более 40 символов",
                            value: 40,
                        },
                        pattern: {
                            message: "Может включать только заглавные и строчные буквы и символ -",
                            value: RegExp("^[a-zA-Zа-яА-ЯеЁ\\-_]{2,}$"),
                        },
                    })}
                />

                <p></p>

                <Input
                    type="text"
                    label="Телефон"
                    placeholder="Введите номер телефона"
                    disabled={isModifyMode ? false : true}
                    id="phone"
                    error={errors.phone ? true : false}
                    errorMessage={errors?.phone ? errors.phone.message : ""}
                    autoComplete="new-password"
                    {...register("phone", {
                        required: "Поле должно быть заполнено",
                        minLength: {
                            message: "Номер должен начинаться с + и включать не менее 11 цифр",
                            value: 12,
                        },
                        maxLength: {
                            message: "Номер должен начинаться с + и включать не более 11 цифр",
                            value: 12,
                        },
                        pattern: {
                            message: "Может включать только префикс + и цифры",
                            //                            value: RegExp("^\\+[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}$")},
                            value: RegExp("^\\+[0-9]{11}$"),
                        },
                    })}
                />

                <Input
                    type="email"
                    label="E-mail"
                    placeholder="Введите свою почту"
                    disabled
                    id="email"
                    error={errors.email ? true : false}
                    errorMessage={errors?.email ? errors.email.message : ""}
                    autoComplete="new-password"
                    {...register("email", {
                        required: "Поле должно быть заполнено",
                        minLength: {
                            message: "Длина адреса электронной почты не менее 8 символов",
                            value: 8,
                        },
                        maxLength: {
                            message: "Длина адреса электронной почты не более 40 символов",
                            value: 40,
                        },
                        pattern: {
                            message: "Указан некорректный адрес электронной почты",
                            value: RegExp(
                                "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
                            ),
                        },
                    })}
                />

                <p></p>

                <PasswordInput
                    className={styles.firstCol}
                    type="password"
                    label="Старый пароль"
                    placeholder="Введите свой пароль"
                    id="password"
                    error={errors.currentPass ? true : false}
                    errorMessage={errors?.currentPass ? errors.currentPass.message : ""}
                    autoComplete="new-password"
                    disabled={isModifyMode ? false : true}
                    {...register("currentPass", {
                        required: "Поле должно быть заполнено",
                        minLength: {
                            message: "Длина пароля не менее 8 символов",
                            value: 8,
                        },
                        maxLength: {
                            message: "Длина пароля не более 64 символов",
                            value: 64,
                        },
                        pattern: {
                            message: "Указан некорректный пароль",
                            value: RegExp(
                                "^[a-zA-Z0-9~!?@#\\$\\%^\\&\\*\\_\\-\\+\\(\\)\\[\\]\\{\\}><\\/\\|\"\\']{8,64}$"
                            ),
                        },
                    })}
                />

                <PasswordInput
                    type="password"
                    label="Новый пароль"
                    placeholder="Введите новый пароль"
                    id="newPassword"
                    error={errors.newPass ? true : false}
                    errorMessage={errors?.newPass ? errors.newPass.message : ""}
                    autoComplete="new-password"
                    disabled={isModifyMode ? false : true}
                    {...register("newPass", {
                        required: "Поле должно быть заполнено",
                        minLength: {
                            message: "Длина пароля не менее 8 символов",
                            value: 8,
                        },
                        maxLength: {
                            message: "Длина пароля не более 64 символов",
                            value: 64,
                        },
                        pattern: {
                            message: "Указан некорректный пароль",
                            value: RegExp(
                                "^[a-zA-Z0-9~!?@#\\$\\%^\\&\\*\\_\\-\\+\\(\\)\\[\\]\\{\\}><\\/\\|\"\\']{8,64}$"
                            ),
                        },
                        validate: () => handleNewPassChange(false),
                    })}
                />

                <PasswordInput
                    type="password"
                    label="Повторите пароль"
                    placeholder="Повторите новый пароль"
                    id="newPasswordRepeat"
                    error={errors.newPassRepeat ? true : false}
                    errorMessage={errors?.newPassRepeat ? errors.newPassRepeat.message : ""}
                    autoComplete="new-password"
                    disabled={isModifyMode ? false : true}
                    {...register("newPassRepeat", {
                        required: "Поле должно быть заполнено",
                        minLength: {
                            message: "Длина пароля не менее 8 символов",
                            value: 8,
                        },
                        maxLength: {
                            message: "Длина пароля не более 64 символов",
                            value: 64,
                        },
                        pattern: {
                            message: "Указан некорректный пароль",
                            value: RegExp(
                                "^[a-zA-Z0-9~!?@#\\$\\%^\\&\\*\\_\\-\\+\\(\\)\\[\\]\\{\\}><\\/\\|\"\\']{8,64}$"
                            ),
                        },
                        validate: () => handleNewPassChange(true),
                    })}
                />
            </div>

            <div className={styles.buttonsSection}>
                {!isModifyMode && (
                    <Button type="button" onClick={handleModifyModeOn}>
                        Редактировать
                    </Button>
                )}

                {isModifyMode && (
                    <>
                        <Button disabled={!isValid || !isDirty}>Сохранить</Button>
                        <Button type="button" onClick={handleCancelModiifications}>
                            Отменить
                        </Button>
                    </>
                )}
            </div>

            <div className={styles.wrapperCheckbox}>
                <h2 className={styles.title}>Получать уведомления</h2>

                <ul className={styles.list}>
                    <CheckboxInput
                        className={styles.checkbox}
                        textLabel="на e-mail"
                        checked={noticeEmail}
                        onClick={handleChangeNotice}
                        disabled={isModifyMode ? false : true}
                        {...register("notice")}
                    />
                    <CheckboxInput
                        className={styles.checkbox}
                        textLabel="не получать"
                        checked={!noticeEmail}
                        onChange={handleChangeNotNotice}
                        disabled={isModifyMode ? false : true}
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
