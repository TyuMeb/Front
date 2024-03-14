import React from "react";

import { useAppDispatch } from "@src/redux/hooks";
import { closeModal, setTypeModal } from "@src/redux/slices/modal-slice";

import styles from "./signin.module.scss";
import { ModalAuth } from "@src/components/modals/modal-auth";
import { Icon } from "@src/components/icon";

import { Input, PasswordInput } from "@src/shared/ui/inputs";
import { Button } from "@src/shared/ui/button";
import { useForm } from "react-hook-form";
import { useCreateTokenMutation } from "@src/redux/api/jwt-api-slice";
import { setCookie, removeCookie } from "typescript-cookie";
import { useLazyGetUserQuery, useVerifyUserQuery } from "@src/redux/api/auth-api-slice";
import { setUser } from "@src/redux/slices/users-slice";
import { useRouter, useParams } from "next/navigation";
import { cn } from "@src/shared/lib/cn";
import { SuccessMessage } from "@src/components/message/success-message";
import { ErrorMessage } from "@src/components/message/error-message";
import {
  PATTERN_EMAIL,
  PATTERN_PASSWORD,
  SETTINGS_EMAIL,
  SETTINGS_PASSWORD,
  VALIDATIONS_EMAIL,
  VALIDATIONS_PASSWORD,
} from "@src/shared/constants/fields";

type SignInForm = {
  email: string;
  password: string;
};

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
  } = useForm<SignInForm>({
    mode: "onChange",
  });

  const [createToken, { isLoading: isLoadingToken }] = useCreateTokenMutation();
  const [getUser, { isLoading: isLoadingUser }] = useLazyGetUserQuery();

  const dispatch = useAppDispatch();

  const onSubmit = (data: SignInForm) => {
    createToken(data)
      .unwrap()
      .then(({ access, refresh }) => {
        setCookie("access_token", access);
        setCookie("refresh_token", refresh);

        getUser()
          .unwrap()
          .then((user) => {
            dispatch(setUser(user));
            dispatch(closeModal());
            user.role === "client" ? router.push("/account/my-offer") : router.push("/account/my-orders");
          });
      })
      .catch((error) => {
        setError("email", { message: error?.data?.detail || "Аккаунт не найден" });
        removeCookie("access_token");
        removeCookie("refresh_token");
      });
  };

  const setModalResetPassword = () => dispatch(setTypeModal("resetPassword"));

  return (
    <ModalAuth>
      <div className={styles.container}>
        <Icon className={styles.background} glyph="signin" />

        <h2 className={cn(styles.title, "headline2")}>Добро пожаловать!</h2>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.containerForm}>
            <Input
              type={SETTINGS_EMAIL.type}
              label={SETTINGS_EMAIL.label}
              placeholder={SETTINGS_EMAIL.placeholder}
              id="email"
              error={Boolean(errors.email?.message)}
              errorMessage={errors.email?.message}
              {...register("email", {
                required: VALIDATIONS_EMAIL.required,
                minLength: { ...VALIDATIONS_EMAIL.minLength },
                maxLength: { ...VALIDATIONS_EMAIL.maxLength },
                pattern: { ...PATTERN_EMAIL },
              })}
            />

            <PasswordInput
              type={SETTINGS_PASSWORD.type}
              label={SETTINGS_PASSWORD.label}
              placeholder={SETTINGS_PASSWORD.placeholder}
              id="password"
              error={Boolean(errors.password?.message)}
              errorMessage={errors.password?.message}
              {...register("password", {
                required: VALIDATIONS_PASSWORD.required,
                minLength: { ...VALIDATIONS_PASSWORD.minLength },
                maxLength: { ...VALIDATIONS_PASSWORD.maxLength },
                pattern: { ...PATTERN_PASSWORD },
                validate: VALIDATIONS_PASSWORD.validate,
              })}
            />
          </div>

          <button className={styles.link} type="button" onClick={setModalResetPassword}>
            Забыли пароль?
          </button>

          {isSuccessVerify && <SuccessMessage>Ваш аккаунт подтвержден</SuccessMessage>}
          {errorVerify && <ErrorMessage>Ссылка для подтверждения неактивна</ErrorMessage>}

          <Button isLoading={isLoadingToken || isLoadingUser} type="submit">
            Войти
          </Button>
        </form>
      </div>
    </ModalAuth>
  );
};
