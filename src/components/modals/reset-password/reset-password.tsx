import React from "react";
import classNames from "classnames/bind";

import { useAppDispatch } from "@src/redux/hooks";
import { setTypeModal } from "@src/redux/slices/modal-slice";
import { usePostUsersResetPasswordMutation } from "@src/redux/api/users-api-slice";

import styles from "@src/components/modals/modal-auth/modal-auth.module.scss";
import { ModalAuth } from "@src/components/modals/modal-auth";
import { Icon } from "@src/components/icon";
import { Input } from "@src/shared/ui/inputs";
import { Button } from "@src/shared/ui/button";
import { useForm } from "react-hook-form";
import { SendEmailReset } from "@src/redux/api/generated";

const cx = classNames.bind(styles);

export const ResetPassword = () => {
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        values: {
            email: "",
        },
    });

    const [resetPassword, { isLoading, isSuccess }] = usePostUsersResetPasswordMutation();

    const onSubmit = (data: SendEmailReset) => {
        resetPassword(data)
            .unwrap()
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                setError("email", { message: error?.data?.join("") });
            });
    };

    return (
        <ModalAuth>
            <Icon className={cx("backgroundResetPassword")} glyph="resetPassword" />

            <h2 className={cx("title", "titleSubtext")}>Восстановление пароля</h2>

            <p className={cx("text", "subtext")}>
                Введите E-mail, который вы указывали при регистрации. Туда придет инструкция по сбросу пароля.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className={cx("form")}>
                <div className={cx("inputsResetPassword")}>
                    <Input
                        label="E-mail"
                        placeholder="Введите свою почту"
                        error={Boolean(errors.email?.message)}
                        errorMessage={errors.email?.message}
                        id="email"
                        {...register("email", { required: { value: true, message: "Данное поле обязательно" } })}
                    />
                </div>

                {isSuccess && <p className={cx("textSuccess")}>Письмо с инструкцией отправлено на почту</p>}

                <ul className={cx("listButtons")}>
                    <li className={cx("itemButtons")}>
                        <Button isLoading={isLoading} type="submit">
                            Сбросить пароль
                        </Button>
                    </li>

                    <li className={cx("itemButtons")}>
                        <Button variant="cancel" type="button" onClick={() => dispatch(setTypeModal("signIn"))}>
                            Отмена
                        </Button>
                    </li>
                </ul>
            </form>
        </ModalAuth>
    );
};
