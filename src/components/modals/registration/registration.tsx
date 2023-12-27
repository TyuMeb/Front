import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "@src/components/modals/modal-auth/modal-auth.module.scss";
import { ModalAuth } from "@src/components/modals/modal-auth";
import { Input, PasswordInput, PhoneInput } from "@src/shared/ui/inputs";
import { CheckboxInput } from "@src/shared/ui/inputs/checkbox";
import { Button } from "@src/shared/ui/button";
import { useRegisterUserMutation } from "@src/redux/api/auth-api-slice";
import { useForm } from "react-hook-form";
import { UserCreate } from "@src/redux/api/generated";

const cx = classNames.bind(styles);

type FormProps = UserCreate & { confirm_password: string };

export const Registration = () => {
    const [checked, setChecked] = useState(false);
    const [registerUser, { isSuccess, isLoading }] = useRegisterUserMutation();

    const {
        register,
        handleSubmit,
        watch,
        setError,
        reset,
        formState: { errors },
    } = useForm<FormProps>({
        values: {
            email: "",
            name: "",
            surname: "",
            password: "",
            person_telephone: "",
            confirm_password: "",
        },
    });

    const onSubmit = (data: FormProps) => {
        const { confirm_password, person_telephone, ...rest } = data;

        registerUser({ ...rest, person_telephone: person_telephone?.replaceAll(" ", "") })
            .unwrap()
            .then(() => {
                reset();
            })
            .catch((error) => {
                console.log("🚀 ~ file: registration.tsx:48 ~ onSubmit ~ error:", error);
                const keys = Object.keys(error?.data || {}) as unknown as Array<keyof FormProps>;

                keys.forEach((key) => {
                    setError(key, { message: error.data[key]?.join(", ") });
                });
            });
    };

    return (
        <ModalAuth>
            <h2 className={cx("title", "titleSubtext")}>Создание аккаунта</h2>

            <p className={cx("text", "subtext")}>Заполните все поля, чтобы создать свой заказ</p>

            <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
                <div className={cx("inputsRegistration")}>
                    <div className={cx("wrapperField")}>
                        <Input
                            error={Boolean(errors.name?.message)}
                            errorMessage={errors.name?.message}
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Данное поле обязательно",
                                },
                            })}
                            label="Имя"
                            placeholder="Введите свое имя"
                            id="name"
                        />
                    </div>

                    <div className={cx("wrapperField")}>
                        <Input
                            error={Boolean(errors.surname?.message)}
                            errorMessage={errors.surname?.message}
                            {...register("surname", {
                                required: {
                                    value: true,
                                    message: "Данное поле обязательно",
                                },
                            })}
                            label="Фамилия"
                            placeholder="Введите свою фамилию"
                            id="surname"
                        />
                    </div>

                    <div className={cx("wrapperField")}>
                        <Input
                            error={Boolean(errors.email?.message)}
                            errorMessage={errors.email?.message}
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Данное поле обязательно",
                                },
                            })}
                            type="email"
                            label="E-mail"
                            placeholder="Введите свою почту"
                            id="email"
                        />
                    </div>

                    <div className={cx("wrapperField")}>
                        <PhoneInput
                            error={Boolean(errors.person_telephone?.message)}
                            errorMessage={errors.person_telephone?.message}
                            {...register("person_telephone", {
                                required: {
                                    value: true,
                                    message: "Данное поле обязательно",
                                },
                            })}
                            label="Телефон"
                            placeholder="Введите номер телефона"
                            id="person_telephone"
                        />
                    </div>

                    <div className={cx("wrapperField")}>
                        <PasswordInput
                            error={Boolean(errors.password?.message)}
                            errorMessage={errors.password?.message}
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Данное поле обязательно",
                                },
                                minLength: {
                                    value: 8,
                                    message: "Минимальная длинна 8 символов",
                                },
                            })}
                            label="Пароль"
                            placeholder="Введите свой пароль"
                            id="password"
                        />
                    </div>

                    <div className={cx("wrapperField")}>
                        <PasswordInput
                            error={Boolean(errors.confirm_password?.message)}
                            errorMessage={errors.confirm_password?.message}
                            {...register("confirm_password", {
                                required: {
                                    value: true,
                                    message: "Данное поле обязательно",
                                },
                                minLength: {
                                    value: 8,
                                    message: "Минимальная длинна 8 символов",
                                },
                                validate: (value) => {
                                    if (watch("password") !== value) {
                                        return "Пароли не совпадают";
                                    }
                                },
                            })}
                            label="Повторить пароль"
                            placeholder="Повторите свой пароль"
                            id="confirm_password"
                        />
                    </div>
                </div>

                <CheckboxInput
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                    required
                    defaultChecked={false}
                    id="agreement"
                    className={styles.checkbox}
                    textLabel="Вы соглашаетесь с обработкой персональных данных"
                />

                {isSuccess && (
                    <p className={styles.textSuccess}>На вашу почту отправлено письмо для подтверждения аккаунта</p>
                )}

                <Button isLoading={isLoading} className={cx("positionCenter")} type="submit">
                    Зарегистрироваться
                </Button>
            </form>
        </ModalAuth>
    );
};
