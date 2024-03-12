import React from "react";

import { useAppDispatch } from "@src/redux/hooks";
import { setTypeModal } from "@src/redux/slices/modal-slice";
import { usePostUsersResetPasswordMutation } from "@src/redux/api/users-api-slice";

import styles from "./reset-password.module.scss";
import { ModalAuth } from "@src/components/modals/modal-auth";
import { Icon } from "@src/components/icon";
import { Input } from "@src/shared/ui/inputs";
import { Button } from "@src/shared/ui/button";
import { useForm } from "react-hook-form";
import { SendEmailReset } from "@src/redux/api/generated";
import { cn } from "@src/shared/lib/cn";
import { SuccessMessage } from "@src/components/message/success-message";
import { PATTERN_EMAIL, SETTINGS_EMAIL, VALIDATIONS_EMAIL } from "@src/shared/constants/fields";

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
    mode: "onChange",
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

  const setModalSignIn = () => dispatch(setTypeModal("signIn"));

  return (
    <ModalAuth>
      <div className={styles.container}>
        <Icon className={styles.background} glyph="resetPassword" />

        <div className={styles.content}>
          <div className={styles.containerTitle}>
            <h2 className={cn(styles.title, styles.headline2)}>Восстановление пароля</h2>
            <p className="text-medium">
              Введите E-mail, который вы указывали при регистрации. Туда придет инструкция по сбросу пароля.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.containerInput}>
              <Input
                type={SETTINGS_EMAIL.type}
                label={SETTINGS_EMAIL.label}
                placeholder={SETTINGS_EMAIL.placeholder}
                id="email"
                autoComplete="on"
                error={Boolean(errors.email?.message)}
                errorMessage={errors.email?.message}
                {...register("email", {
                  required: VALIDATIONS_EMAIL.required,
                  minLength: { ...VALIDATIONS_EMAIL.minLength },
                  maxLength: { ...VALIDATIONS_EMAIL.maxLength },
                  pattern: { ...PATTERN_EMAIL },
                })}
              />
            </div>

            {isSuccess && <SuccessMessage>Письмо с инструкцией отправлено на почту</SuccessMessage>}

            <div className={styles.containerButtons}>
              <Button isLoading={isLoading} type="submit">
                Сбросить пароль
              </Button>

              <Button variant="cancel" type="button" onClick={setModalSignIn}>
                Отмена
              </Button>
            </div>
          </form>
        </div>
      </div>
    </ModalAuth>
  );
};
