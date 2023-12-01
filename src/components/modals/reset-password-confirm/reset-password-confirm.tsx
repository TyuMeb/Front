import React, { useState } from "react";
import classNames from "classnames/bind";
import { useAppDispatch } from "@src/redux/hooks";
import { setTypeModal } from "@src/redux/slices/modal-slice";
import { usePostUsersResetPasswordConfirmMutation } from "@src/redux/api/users-api-slice";
import { useParams, useRouter } from "next/navigation";

import styles from "@src/components/modals/modal-auth/modal-auth.module.scss";
import { ModalAuth } from "@src/components/modals/modal-auth";
import { PasswordInput } from "@src/shared/ui/inputs";
import { Button } from "@src/shared/ui/button";
import { useForm } from "react-hook-form";
import { Icon } from "@src/components/icon";

const cx = classNames.bind(styles);

type FormT = {
    new_password: string;
    confirm_password: string;
};

export const ResetPasswordConfirm = () => {
    const dispatch = useAppDispatch();

    const params = useParams();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormT>({
        values: {
            new_password: "",
            confirm_password: "",
        },
    });

    const [error, setError] = useState("");

    const [resetPasswordConfirm, { isLoading, isSuccess }] = usePostUsersResetPasswordConfirmMutation();

    const onSubmit = (data: Form) => {
        setError("");

        resetPasswordConfirm({ ...data, uid: params.uid as string, token: params.token as string })
            .unwrap()
            .then(() => {
                router.push("/");
                dispatch(setTypeModal("signIn"));
            })
            .catch((error) => {
                const { uid, new_password } = error?.data || {};
                setError((uid || new_password)?.join(""));
            });
    };

    return (
        <ModalAuth>
            <Icon className={cx("backgroundResetPassword")} glyph="resetPassword" />

            <h2 className={cx("title", "titleSubtext")}>Новый пароль</h2>

            <p className={cx("text", "subtext")}>Чтобы изменить пароль, нужно ввести новый пароль.</p>

            <form onSubmit={handleSubmit(onSubmit)} className={cx("form")}>
                <div className={cx("inputsResetPassword")}>
                    <PasswordInput
                        {...register("new_password", {
                            required: { value: true, message: "Данное поле обязательно" },
                            minLength: {
                                value: 8,
                                message: "Минимальная длинна 8 символов",
                            },
                        })}
                        label="Пароль"
                        placeholder="Введите свой пароль"
                        error={Boolean(errors.new_password?.message)}
                        errorMessage={errors.new_password?.message}
                        id="new_password"
                    />
                    <PasswordInput
                        {...register("confirm_password", {
                            required: { value: true, message: "Данное поле обязательно" },
                            minLength: {
                                value: 8,
                                message: "Минимальная длинна 8 символов",
                            },
                            validate: (value) => {
                                if (watch("new_password") !== value) {
                                    return "Пароли не совпадают";
                                }
                            },
                        })}
                        label="Повторите пароль"
                        placeholder="Повторите свой пароль"
                        error={Boolean(errors.confirm_password?.message)}
                        errorMessage={errors.confirm_password?.message}
                        id="confirm_password"
                    />
                </div>

                {error && <p className={cx("textError", { warningText: true })}>{error}</p>}
                {isSuccess && <p className={cx("textSuccess")}>Ваш пароль успешно изменен</p>}

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
