"use client";

import React, { useState, useEffect, useMemo, Fragment, useId } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "@src/components/account/settings/settings.module.scss";
import { Button } from "@src/shared/ui/button";
import { Input } from "@src/shared/ui/inputs";
import { CheckboxInput } from "@src/shared/ui/inputs";
import { PasswordInput } from "@src/shared/ui/inputs";
// TODO: заменил PhoneInput на Input, из-за проблем с валидацией PhoneInput из-за некорректной работы. Нужно доработать маску.
import { PhoneInputNew } from "@src/shared/ui/inputs/phone/phoneNew";
//import { PhoneInput } from "@src/shared/ui/inputs";
// Вместо хуков использования инпутов используется ReactHookForm
//import { useInput } from "@src/hook/use-input";

export interface TSettings {
    name: string;
    surname: string;
    email: string;
    phone: string;
    currentPass: string;
    newPass: string;
    newPassRepeat: string;
    notice: boolean;
    empty: string;
}

const Settings = () => {
    //TODO: стейт чекбокса подписки (недоделано)
    const [noticeEmail, setNoticeEmail] = useState(true);
    //Режим изменения данных (общий)
    const [isModifyMode, setIsModifyMode] = useState(false);
    //Режим изменения данных пользователя
    const [isPassModifyMode, setIsPassModifyMode] = useState(false);
    //Режим изменения пароля
    const [isDataModifyMode, setIsDataModifyMode] = useState(false);
    //Данные пользователя (тестовый хардкод)
    const [userData, setUserData] = useState<TSettings>({
        name: "John",
        surname: "Doe",
        email: "JohnDoe@yahoo.com",
        phone: "+7 (123) 456 78 90",
        currentPass: "",
        newPass: "",
        newPassRepeat: "",
        notice: true,
        empty: "",
    });
    //Заглушка для выключения autoComplete
    const id = useId();

    const {
        register,
        handleSubmit,
        reset,
        resetField,
        getValues,
        getFieldState,
        trigger,
        formState: { errors, isDirty, dirtyFields },
    } = useForm<TSettings>({
        defaultValues: useMemo(() => {
            return userData;
        }, [userData]),
        mode: "onChange",
    });

    //Включение режимов изменения данных при изменении соответствующих полей
    useEffect(() => {
        if (dirtyFields.name || dirtyFields.surname || dirtyFields.phone) {
            setIsDataModifyMode(true);
            console.log("data Modify");
        } else {
            setIsDataModifyMode(false);
            console.log("NO data Modify");
        }
        if (dirtyFields.currentPass) {
            setIsPassModifyMode(true);
            console.log("pass Modify");
        } else {
            setIsPassModifyMode(false);
            console.log("NO pass Modify");
        }
    }, [dirtyFields.name, dirtyFields.surname, dirtyFields.phone, dirtyFields.currentPass]);

    //Сброс полей формы при обновлении данных пользователя
    useEffect(() => {
        reset(userData);
    }, [userData]);

    //Тут должно быть обращение к API для изменения состояния подписки на значение notice
    const handleChangeNotice = (notice: boolean) => {
        setNoticeEmail(notice);
        console.log(`Информирование ${notice ? "включено" : "выключено"}`);
    };

    //включение режима изменения данных
    const handleModifyModeOn = () => {
        setIsModifyMode(true);
    };

    //выключение режима изменения данных
    const handleModifyModeOff = () => {
        setIsModifyMode(false);
        setIsDataModifyMode(false);
        setIsPassModifyMode(false);
    };

    //сброс данных в инпутах, связанных со сменой данных пользователя
    const handleResetDataInputs = () => {
        resetField("name");
        resetField("surname");
        resetField("phone");
        resetField("email");
    };

    //вызов API изменения данных пользователя
    const handlePatchUserData = () => {
        //заглушка с выводом новых данных
        console.log({
            name: getValues().name,
            surname: getValues().surname,
            email: getValues().email,
            person_telephone: getValues().phone,
            role: "client",
        });
        //заглушка с обновлением данных пользователя
        setUserData({
            ...userData,
            name: getValues().name,
            surname: getValues().surname,
            email: getValues().email,
            phone: getValues().phone,
        });
    };

    //сброс данных в инпутах, связанных со сменой пароля
    const handleResetPassInputs = () => {
        resetField("currentPass");
        resetField("newPass");
        resetField("newPassRepeat");
    };

    //вызов API изменения пароля
    const handleChangePassword = () => {
        //заглушка с выводом новых данных
        console.log({
            current_password: getValues().currentPass,
            new_password: getValues().newPass,
            re_new_password: getValues().newPassRepeat,
        });
    };

    const handleSaveModiifications = () => {
        if (isDataModifyMode) {
            handlePatchUserData();
            //тут должна быть обработка ошибок при обращении к API
            handleResetDataInputs();
            setIsDataModifyMode(false);
        }
        if (isPassModifyMode) {
            handleChangePassword();
            //тут должна быть обработка ошибок при обращении к API
            handleResetPassInputs();
            setIsPassModifyMode(false);
        }
        handleModifyModeOff();
        reset();
    };

    //обработка выхода из режима изменения данных по кнопке Отмена
    const handleCancelModiifications = () => {
        handleModifyModeOff();
        reset();
    };

    //обработка сабмита формы
    const submit: SubmitHandler<TSettings> = () => {
        handleSaveModiifications();
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
                    autoComplete="new-password"
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
                    autoComplete="new-password"
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

                <PhoneInputNew
                    type="text"
                    label="Телефон"
                    placeholder="Введите номер телефона"
                    disabled={isModifyMode ? false : true}
                    id="phone"
                    value={getValues().phone}
                    autoComplete="new-password"
                    error={errors.phone ? true : false}
                    errorMessage={errors?.phone ? errors.phone.message : ""}
                    {...register("phone", {
                        required: "Поле должно быть заполнено",
                        minLength: {
                            message: "Номер должен начинаться с + и включать не менее 11 цифр",
                            value: 18,
                        },
                        maxLength: {
                            message: "Номер должен начинаться с + и включать не более 11 цифр",
                            value: 19,
                        },
                        pattern: {
                            message: "Может включать только префикс + и цифры",
                            value: RegExp("^\\+7\\s{1}\\(\\d{3}\\)\\s{1}\\d{3}\\s{1}\\d{2}\\s{1}\\d{2,3}$"),
                        },
                    })}
                />

                <Input
                    type="email"
                    label="E-mail"
                    placeholder="Введите свою почту"
                    disabled
                    id="email"
                    autoComplete="Off"
                    error={errors.email ? true : false}
                    errorMessage={errors?.email ? errors.email.message : ""}
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
                    autoComplete={id}
                    error={errors.currentPass ? true : false}
                    errorMessage={errors?.currentPass ? errors.currentPass.message : ""}
                    disabled={isModifyMode ? false : true}
                    {...register("currentPass", {
                        minLength: {
                            message: "Длина пароля не менее 8 символов",
                            value: 8,
                        },
                        maxLength: {
                            message: "Длина пароля не более 64 символов",
                            value: 64,
                        },
                        pattern: {
                            message:
                                "Указан некорректный пароль. Используйте: A-Z, a-z, 0-9, ~!?@#$%^&*_-+()[]{}></|\"'. Длина пароля: 8-64 символов.",
                            value: RegExp("^[a-zA-Z0-9~!?@#\\$\\%^\\&\\*\\_\\-\\+\\(\\)\\[\\]\\{\\}><\\/\\|\"\\']*$"),
                        },
                        validate: (value) => {
                            if (value === "") {
                                resetField("newPass");
                                resetField("newPassRepeat");
                            } else if (isPassModifyMode && value === getValues().currentPass) {
                                trigger("newPass");
                            }
                            return undefined;
                        },
                    })}
                />

                <PasswordInput
                    type="password"
                    label="Новый пароль"
                    placeholder="Введите новый пароль"
                    id="newPassword"
                    autoComplete={id}
                    error={errors.newPass ? true : false}
                    errorMessage={errors?.newPass ? errors.newPass.message : ""}
                    disabled={isModifyMode && isPassModifyMode ? false : true}
                    {...register("newPass", {
                        required: isPassModifyMode ? "Поле должно быть заполнено" : false,
                        minLength: {
                            message: "Длина пароля не менее 8 символов",
                            value: 8,
                        },
                        maxLength: {
                            message: "Длина пароля не более 64 символов",
                            value: 64,
                        },
                        pattern: {
                            message:
                                "Указан некорректный пароль. Используйте: A-Z, a-z, 0-9, ~!?@#$%^&*_-+()[]{}></|\"'. Длина пароля: 8-64 символов.",
                            value: RegExp("^[a-zA-Z0-9~!?@#\\$\\%^\\&\\*\\_\\-\\+\\(\\)\\[\\]\\{\\}><\\/\\|\"\\']*$"),
                        },
                        validate: (value) => {
                            if (isPassModifyMode && value === getValues().currentPass) {
                                trigger("newPassRepeat");
                                return "Новый пароль должен отличаться";
                            }
                        },
                    })}
                />

                <PasswordInput
                    type="password"
                    label="Повторите пароль"
                    placeholder="Повторите новый пароль"
                    id="newPasswordRepeat"
                    autoComplete={id}
                    error={errors.newPassRepeat ? true : false}
                    errorMessage={errors?.newPassRepeat ? errors.newPassRepeat.message : ""}
                    disabled={isModifyMode && isPassModifyMode && !errors.newPass && getValues().newPass ? false : true}
                    {...register("newPassRepeat", {
                        required: isPassModifyMode ? "Поле должно быть заполнено" : false,
                        minLength: {
                            message: "Длина пароля не менее 8 символов",
                            value: 8,
                        },
                        maxLength: {
                            message: "Длина пароля не более 64 символов",
                            value: 64,
                        },
                        pattern: {
                            message:
                                "Указан некорректный пароль. Используйте: A-Z, a-z, 0-9, ~!?@#$%^&*_-+()[]{}></|\"'. Длина пароля: 8-64 символов.",
                            value: RegExp("^[a-zA-Z0-9~!?@#\\$\\%^\\&\\*\\_\\-\\+\\(\\)\\[\\]\\{\\}><\\/\\|\"\\']*$"),
                        },
                        validate: (value) => {
                            if (isPassModifyMode && value !== getValues().newPass) {
                                return "Пароли не совпадают";
                            }
                        },
                    })}
                />
                {
                    <input
                        type="password"
                        style={{ display: "none" }}
                        autoComplete="new-password"
                        {...register("empty", {})}
                        disabled
                    />
                }
            </div>

            <div className={styles.buttonsSection}>
                {!isModifyMode && (
                    <Button type="button" onClick={handleModifyModeOn}>
                        Редактировать
                    </Button>
                )}

                {isModifyMode && (
                    <>
                        <Button
                            disabled={
                                //Если нет изменений в инпутах формы или
                                !isDirty ||
                                //включен режим смены пароля и какой-то из инпутов невалиден
                                (isPassModifyMode &&
                                    (getFieldState("currentPass").invalid ||
                                        getFieldState("newPass").invalid ||
                                        getFieldState("newPassRepeat").invalid)) ||
                                //включен режим редактирования данных и какой-то из инпутов невалиден
                                (isDataModifyMode &&
                                    (getFieldState("name").invalid ||
                                        getFieldState("surname").invalid ||
                                        getFieldState("phone").invalid ||
                                        getFieldState("email").invalid))
                            }>
                            Сохранить
                        </Button>
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
                        onClick={() => handleChangeNotice(true)}
                        {...register("notice")}
                    />
                    <CheckboxInput
                        className={styles.checkbox}
                        textLabel="не получать"
                        checked={!noticeEmail}
                        onChange={() => handleChangeNotice(false)}
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
