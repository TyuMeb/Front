import React from "react";
import classNames from "classnames/bind";

import { useAppDispatch } from "@src/redux/hooks";
import { setTypeModal } from "@src/redux/slices/modal-slice";

import styles from "@src/components/modals/modal-auth/modal-auth.module.scss";
import { ModalAuth } from "@src/components/modals/modal-auth";
import { Icon } from "@src/components/icon";

import { Input, PasswordInput } from "@src/shared/ui/inputs";
import { Button } from "@src/shared/ui/button";
import { useForm } from "react-hook-form";
import { useCreateTokenMutation } from "@src/redux/api/jwt-api-slice";
import { setCookie, removeCookie } from "typescript-cookie";
import { useLazyGetUserQuery, useVerifyUserQuery } from "@src/redux/api/auth-api-slice";
import { setUser } from "@src/redux/slices/users-slice";
import { TokenObtainPair } from "@src/redux/api/generated";
import { useRouter, useParams } from "next/navigation";

const cx = classNames.bind(styles);

export const SignIn = () => {
    const router = useRouter();

    const params = useParams();

    const token = params.token as string;
    const uid = params.uid as string;

    const { error: errorVerify, isSuccess: isSuccessVerify } = useVerifyUserQuery(
        { token, uid },
        { refetchOnReconnect: true, skip: !token || !uid }
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({
        mode: "onBlur",
        values: {
            email: "",
            password: "",
        },
    });

    const [createToken, { isLoading: isLoadingToken }] = useCreateTokenMutation();
    const [getUser, { isLoading: isLoadingUser }] = useLazyGetUserQuery();

    const dispatch = useAppDispatch();

    const onSubmit = (data: TokenObtainPair) => {
        createToken(data)
            .unwrap()
            .then(({ access, refresh }) => {
                setCookie("access_token", access);
                setCookie("refresh_token", refresh);

                getUser()
                    .unwrap()
                    .then((user) => {
                        dispatch(setUser(user));
                        router.push("/account/chats");
                    });
            })
            .catch((error) => {
                setError("email", { message: error?.data?.detail || "Аккаунт не найден" });
                removeCookie("access_token");
                removeCookie("refresh_token");
            });
    };

    return (
        <ModalAuth>
            <Icon className={cx("backgroundSignIn")} glyph="signin" />

            <h2 className={cx("title")}>Добро пожаловать!</h2>

            <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
                <div className={cx("inputsSignin")}>
                    <div>
                        <Input
                            label="E-mail"
                            placeholder="Введите свою почту"
                            error={Boolean(errors.email?.message)}
                            errorMessage={errors.email?.message}
                            id="email"
                            type="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Данное поле обязательно",
                                },
                                validate: (value) => {
                                    if (!value.includes("@")) {
                                        return "Некорректная почта";
                                    }
                                },
                            })}
                        />
                    </div>

                    <div>
                        <PasswordInput
                            label="Пароль"
                            placeholder="Введите пароль"
                            error={Boolean(errors.password?.message)}
                            errorMessage={errors.password?.message}
                            id="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Данное поле обязательно",
                                },
                            })}
                        />
                    </div>
                </div>

                <button
                    className={cx("linkText")}
                    type="button"
                    onClick={() => dispatch(setTypeModal("resetPassword"))}>
                    Забыли пароль?
                </button>

                {isSuccessVerify && <p className={styles.textSuccess}>Ваш аккаунт подтвержден</p>}
                {errorVerify && (
                    <p className={cx("textError", { warningText: true })}>Ссылка для подтверждения неактивна</p>
                )}

                <Button isLoading={isLoadingToken || isLoadingUser} className={cx("text", "button")} type="submit">
                    Войти
                </Button>
            </form>
        </ModalAuth>
    );
};
