import React, { useState } from "react";
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

type FormProps = {
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
  } = useForm<FormProps>({
    values: {
      new_password: "",
      confirm_password: "",
    },
  });

  const [error, setError] = useState("");

  const [resetPasswordConfirm, { isLoading, isSuccess }] = usePostUsersResetPasswordConfirmMutation();

  const onSubmit = (data: FormProps) => {
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

            {error && <ErrorMessage>{error}</ErrorMessage>}
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
