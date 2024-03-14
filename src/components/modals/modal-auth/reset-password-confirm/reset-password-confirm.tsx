import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@src/redux/hooks";
import { setTypeModal } from "@src/redux/slices/modal-slice";
import { usePostUsersResetPasswordConfirmMutation } from "@src/redux/api/users-api-slice";
import { useParams, useRouter } from "next/navigation";

import styles from "./reset-password-confirm.module.scss";
import { ModalAuth } from "@src/components/modals/modal-auth";
import { PasswordInput } from "@src/shared/ui/inputs";
import { Button } from "@src/shared/ui/button";
import { useForm } from "react-hook-form";
import { Icon } from "@src/components/icon";
import { cn } from "@src/shared/lib/cn";
import { ErrorMessage } from "@src/components/message/error-message";
import { SuccessMessage } from "@src/components/message/success-message";
import { PATTERN_PASSWORD, SETTINGS_PASSWORD, VALIDATIONS_PASSWORD } from "@src/shared/constants/fields";
import { handleDefaultErrors } from "@src/shared/lib/handle-default-errors";

type FormProps = { confirm_password: string; new_password: string };

export const ResetPasswordConfirm = () => {
  const dispatch = useAppDispatch();

  const params = useParams();
  const router = useRouter();

  const {
    register,
    trigger,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "onChange",
  });

  const [resetPasswordConfirm, { isLoading, isSuccess }] = usePostUsersResetPasswordConfirmMutation();

  const [messageError, setMessageError] = useState<string | null>(null);

  // Зависимость паролей друг от друга, для синхронной валидации.
  const password = watch("new_password");
  const confirmPassword = watch("confirm_password");
  useEffect(() => {
    if (password || confirmPassword) {
      trigger("new_password");
      trigger("confirm_password");
    }
  }, [password, confirmPassword, trigger]);

  const onSubmit = ({ new_password }: FormProps) => {
    resetPasswordConfirm({ new_password: new_password, uid: params.uid as string, token: params.token as string })
      .unwrap()
      .then(() => {
        router.push("/");
        dispatch(setTypeModal("signIn"));
      })
      .catch((error) => {
        console.log("🚀 ~ file: reset-password-confirm.tsx:58 ~ onSubmit ~ error:", error);
        handleDefaultErrors<FormProps>(error.data, setError);

        if (error.data.hasOwnProperty("token")) {
          setMessageError("Недействительная ссылка для подтверждения пароля");
        }
      });
  };

  const setModalSignIn = () => dispatch(setTypeModal("signIn"));

  return (
    <ModalAuth>
      <div className={styles.container}>
        <Icon className={styles.background} glyph="resetPassword" />

        <div className={styles.content}>
          <div className={styles.containerTitle}>
            <h2 className={cn(styles.title, styles.headline2)}>Новый пароль</h2>
            <p className="text-medium">Чтобы изменить пароль, нужно ввести новый пароль.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.containerInputs}>
              <PasswordInput
                type={SETTINGS_PASSWORD.type}
                label={SETTINGS_PASSWORD.label}
                placeholder={SETTINGS_PASSWORD.placeholder}
                id="newPassword"
                error={Boolean(errors.new_password?.message)}
                errorMessage={errors.new_password?.message}
                {...register("new_password", {
                  required: {
                    value: true || Boolean(confirmPassword),
                    message: VALIDATIONS_PASSWORD.required,
                  },
                  minLength: { ...VALIDATIONS_PASSWORD.minLength },
                  maxLength: { ...VALIDATIONS_PASSWORD.maxLength },
                  pattern: { ...PATTERN_PASSWORD },
                  validate: VALIDATIONS_PASSWORD.validate,
                })}
              />

              <PasswordInput
                type={SETTINGS_PASSWORD.type}
                label="Повторите новый пароль"
                placeholder={SETTINGS_PASSWORD.placeholder}
                id="confirmPassword"
                error={Boolean(errors.confirm_password?.message)}
                errorMessage={errors.confirm_password?.message}
                {...register("confirm_password", {
                  required: {
                    value: true || Boolean(password),
                    message: VALIDATIONS_PASSWORD.required,
                  },
                  minLength: { ...VALIDATIONS_PASSWORD.minLength },
                  maxLength: { ...VALIDATIONS_PASSWORD.maxLength },
                  pattern: { ...PATTERN_PASSWORD },
                  validate: {
                    passwordMatches: (value = "") => {
                      if (value.length && value !== password) {
                        return "Пароли не совпадают";
                      }
                    },
                    ...VALIDATIONS_PASSWORD.validate,
                  },
                })}
              />
            </div>

            {messageError && <ErrorMessage>{messageError}</ErrorMessage>}
            {isSuccess && <SuccessMessage>Ваш пароль успешно изменен</SuccessMessage>}

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
