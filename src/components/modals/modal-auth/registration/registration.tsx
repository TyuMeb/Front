import React, { useEffect, useState } from "react";

import styles from "./registration.module.scss";
import { ModalAuth } from "@src/components/modals/modal-auth";
import { Input, PasswordInput, PhoneInput } from "@src/shared/ui/inputs";
import { CheckboxInput } from "@src/shared/ui/inputs/checkbox";
import { Button } from "@src/shared/ui/button";
import { useRegisterUserMutation } from "@src/redux/api/auth-api-slice";
import { useForm } from "react-hook-form";
import { cn } from "@src/shared/lib/cn";
import { SuccessMessage } from "@src/components/message/success-message";
import { handleDefaultErrors } from "@src/shared/lib/handle-default-errors";
import {
  PATTERN_EMAIL,
  PATTERN_FULLNAME,
  PATTERN_PASSWORD,
  SETTINGS_EMAIL,
  SETTINGS_NAME,
  SETTINGS_PASSWORD,
  SETTINGS_PHONE,
  SETTINGS_SURNAME,
  VALIDATIONS_EMAIL,
  VALIDATIONS_FULLNAME,
  VALIDATIONS_PASSWORD,
  VALIDATIONS_PHONE,
} from "@src/shared/constants/fields";

type RegistrationForm = {
  name: string;
  surname?: string;
  email: string;
  person_telephone?: string;
  password: string;
  confirm_password: string;
  agreement: boolean;
};

export const Registration = () => {
  const [checked, setChecked] = useState(false);
  const [registerUser, { isSuccess: isSuccessRegisterUser, isLoading: isLoadingRegisterUser }] =
    useRegisterUserMutation();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    trigger,
    formState: { errors },
  } = useForm<RegistrationForm>({
    mode: "onChange",
  });

  // Зависимость паролей друг от друга, для синхронной валидации.
  const password = watch("password");
  const confirmPassword = watch("confirm_password");
  useEffect(() => {
    if (password || confirmPassword) {
      trigger("password");
      trigger("confirm_password");
    }
  }, [password, confirmPassword, trigger]);

  const onSubmit = (data: RegistrationForm) => {
    const { confirm_password, person_telephone, name, surname, ...rest } = data;

    const dataUser = {
      name: name.trim(),
      surname: surname?.trim(),
      person_telephone: person_telephone?.replaceAll(" ", ""),
      ...rest,
    };

    registerUser(dataUser)
      .unwrap()
      .then(() => {
        reset();
      })
      .catch((error) => {
        console.log("🚀 ~ file: registration.tsx:48 ~ onSubmit ~ error:", error);
        handleDefaultErrors<RegistrationForm>(error.data, setError);
      });
  };

  const onClickToggleHandler = () => setChecked((prevValue) => !prevValue);

  return (
    <ModalAuth>
      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <h2 className={cn(styles.title, styles.headline2)}>Создание аккаунта</h2>
          <p className="text-medium">Заполните все поля, чтобы создать свой заказ</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.containerFields}>
            <Input
              label={SETTINGS_NAME.label}
              placeholder={SETTINGS_NAME.placeholder}
              id="name"
              error={Boolean(errors.name?.message)}
              errorMessage={errors.name?.message}
              {...register("name", {
                validate: { ...VALIDATIONS_FULLNAME.validate },
                required: VALIDATIONS_FULLNAME.required,
                minLength: { ...VALIDATIONS_FULLNAME.minLength },
                maxLength: { ...VALIDATIONS_FULLNAME.maxLength },
                pattern: { ...PATTERN_FULLNAME },
              })}
            />

            <Input
              label={SETTINGS_SURNAME.label}
              placeholder={SETTINGS_SURNAME.placeholder}
              id="surname"
              error={Boolean(errors.surname?.message)}
              errorMessage={errors.surname?.message}
              {...register("surname", {
                validate: { ...VALIDATIONS_FULLNAME.validate },
                required: VALIDATIONS_FULLNAME.required,
                minLength: { ...VALIDATIONS_FULLNAME.minLength },
                maxLength: { ...VALIDATIONS_FULLNAME.maxLength },
                pattern: { ...PATTERN_FULLNAME },
              })}
            />

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

            <PhoneInput
              type={SETTINGS_PHONE.type}
              label={SETTINGS_PHONE.label}
              placeholder={SETTINGS_PHONE.placeholder}
              id="person_telephone"
              error={Boolean(errors.person_telephone?.message)}
              errorMessage={errors.person_telephone?.message}
              value={watch("person_telephone")}
              {...register("person_telephone", {
                required: "Поле должно быть заполнено",
                ...VALIDATIONS_PHONE,
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
              label="Повторите пароль"
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

          <CheckboxInput
            error={Boolean(errors.agreement?.message)}
            errorMessage={errors.agreement?.message}
            checked={checked}
            onClick={onClickToggleHandler}
            id="agreement"
            className={styles.checkbox}
            textLabel="Вы соглашаетесь с обработкой персональных данных"
            {...register("agreement", {
              required: {
                value: true,
                message: "Данное поле обязательно",
              },
            })}
          />

          {isSuccessRegisterUser && (
            <SuccessMessage>На вашу почту отправлено письмо для подтверждения аккаунта</SuccessMessage>
          )}

          <Button isLoading={isLoadingRegisterUser} className={styles.positionCenter} type="submit">
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </ModalAuth>
  );
};
