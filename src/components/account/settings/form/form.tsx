"use client";

import React, { Dispatch, HTMLAttributes, SetStateAction, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./form.module.scss";
import { Button } from "@src/shared/ui/button";
import { Input, PhoneInput } from "@src/shared/ui/inputs";
import { CheckboxInput } from "@src/shared/ui/inputs";
import { PasswordInput } from "@src/shared/ui/inputs";
import { UserAccount } from "@src/redux/api/generated";
import { useUser } from "@src/redux/slices/users-slice";
import { getUser } from "../lib/get-user";
import { SettingsForm } from "../settings";
import {
  PATTERN_EMAIL,
  PATTERN_FULLNAME,
  PATTERN_PASSWORD,
  SETTINGS_EMAIL,
  SETTINGS_NAME,
  SETTINGS_NEW_PASSWORD,
  SETTINGS_NEW_PASSWORD_REPEAT,
  SETTINGS_PHONE,
  SETTINGS_PREVIOUS_PASSWORD,
  SETTINGS_SURNAME,
  VALIDATIONS_EMAIL,
  VALIDATIONS_FULLNAME,
  VALIDATIONS_PASSWORD,
  VALIDATIONS_PHONE,
} from "@src/shared/constants/fields";

type Props = {
  noticeEmail: ["email"] | null;
  setNoticeEmail: Dispatch<SetStateAction<["email"] | null>>;
  isActiveForm: boolean;
  setIsActiveForm: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const Form = ({ noticeEmail, setNoticeEmail, isActiveForm, setIsActiveForm, isLoading, ...props }: Props) => {
  const user: UserAccount | null = useUser();

  const {
    register,
    reset,
    getValues,
    trigger,
    watch,
    formState: { errors, dirtyFields, isValid },
  } = useFormContext<SettingsForm>();

  // Зависимость паролей друг от друга, для синхронной валидации.
  const currentPassword = watch("current_password");
  const newPassword = watch("new_password");
  const newPassRepeat = watch("re_new_password");
  useEffect(() => {
    if (isActiveForm) {
      trigger("new_password");
      trigger("current_password");
      trigger("re_new_password");
    }
  }, [currentPassword, newPassword, newPassRepeat, trigger]);

  const enableForm = () => {
    setIsActiveForm(true);
  };

  const disableForm = () => {
    setIsActiveForm(false);
  };

  const resetForm = () => {
    disableForm();
    if (user) {
      reset(getUser(user));
    }
    setNoticeEmail(getValues().notifications === "email" ? ["email"] : null);
  };

  const handleChangeNotice = (notice: ["email"] | null) => {
    setNoticeEmail(notice);
  };

  const buttonsFormComponent = ({
    editedForm,
    isLoading,
    isDirty,
    isValidFields,
  }: {
    editedForm: boolean;
    isLoading: boolean;
    isDirty: boolean;
    isValidFields: boolean;
  }) => {
    return (
      <div className={styles.buttonsContainer}>
        {editedForm || isLoading ? (
          <>
            <Button isLoading={isLoading} disabled={!isDirty || !isValidFields}>
              Сохранить
            </Button>

            <Button type="button" onClick={resetForm}>
              Отменить
            </Button>
          </>
        ) : (
          <Button type="button" onClick={enableForm}>
            Редактировать
          </Button>
        )}
      </div>
    );
  };

  const checkboxFormComponent = ({
    editedForm,
    noticeEmail,
    onClick,
  }: {
    editedForm: boolean;
    noticeEmail: ["email"] | null;
    onClick: (notice: ["email"] | null) => void;
  }) => {
    const onClickEmailHandler = () => onClick(["email"]);
    const onClickOffHandler = () => onClick(null);

    return (
      <ul className={styles.listCheckbox}>
        <li>
          <CheckboxInput
            type="radio"
            className={styles.checkbox}
            textLabel="на e-mail"
            disabled={!editedForm}
            value="email"
            {...register("notifications")}
            checked={noticeEmail ? noticeEmail?.includes("email") : false}
            onClick={onClickEmailHandler}
          />
        </li>
        <li>
          <CheckboxInput
            type="radio"
            className={styles.checkbox}
            disabled={!editedForm}
            textLabel="не получать"
            value="off"
            {...register("notifications")}
            checked={noticeEmail === null}
            onClick={onClickOffHandler}
          />
        </li>
      </ul>
    );
  };

  const deletingProfileComponent = () => {
    return (
      <div className={styles.containerText}>
        <h2 className="subtitle2">Удаление профиля</h2>
        <p className="text-medium">
          Если вы хотите удалить профиль, пожалуйста, свяжитесь с нашей технической поддержкой на вкладке «помощь»
        </p>
      </div>
    );
  };

  return (
    <div className={styles.inputsRegistration} {...props}>
      <div className={styles.containerFields}>
        <Input
          label={SETTINGS_NAME.label}
          placeholder={SETTINGS_NAME.placeholder}
          disabled={isActiveForm === false}
          id="name"
          error={Boolean(errors.name?.message)}
          errorMessage={errors.name?.message}
          {...register("name", {
            validate: { ...VALIDATIONS_FULLNAME.validate },
            minLength: { ...VALIDATIONS_FULLNAME.minLength },
            maxLength: { ...VALIDATIONS_FULLNAME.maxLength },
            pattern: { ...PATTERN_FULLNAME },
          })}
        />

        <Input
          label={SETTINGS_SURNAME.label}
          placeholder={SETTINGS_SURNAME.placeholder}
          disabled={isActiveForm === false}
          id="surname"
          error={Boolean(errors.surname?.message)}
          errorMessage={errors.surname?.message}
          {...register("surname", {
            validate: { ...VALIDATIONS_FULLNAME.validate },
            minLength: { ...VALIDATIONS_FULLNAME.minLength },
            maxLength: { ...VALIDATIONS_FULLNAME.maxLength },
            pattern: { ...PATTERN_FULLNAME },
          })}
        />

        <PhoneInput
          className={styles.gridColumn}
          type={SETTINGS_PHONE.type}
          label={SETTINGS_PHONE.label}
          placeholder={SETTINGS_PHONE.placeholder}
          disabled={isActiveForm === false}
          error={Boolean(errors.person_telephone?.message)}
          errorMessage={errors.person_telephone?.message}
          value={watch("person_telephone")}
          {...register("person_telephone", {
            ...VALIDATIONS_PHONE,
          })}
        />

        <Input
          type={SETTINGS_EMAIL.type}
          label={SETTINGS_EMAIL.label}
          placeholder={SETTINGS_EMAIL.placeholder}
          disabled
          id="email"
          error={Boolean(errors.email?.message)}
          errorMessage={errors.email?.message}
          {...register("email", {
            minLength: { ...VALIDATIONS_EMAIL.minLength },
            maxLength: { ...VALIDATIONS_EMAIL.maxLength },
            pattern: { ...PATTERN_EMAIL },
          })}
        />

        <PasswordInput
          className={styles.gridColumn}
          type={SETTINGS_PREVIOUS_PASSWORD.type}
          label={SETTINGS_PREVIOUS_PASSWORD.label}
          placeholder={SETTINGS_PREVIOUS_PASSWORD.placeholder}
          disabled={isActiveForm === false}
          id="currentPassword"
          error={Boolean(errors.current_password?.message)}
          errorMessage={errors.current_password?.message}
          autoComplete="new-password"
          {...register("current_password", {
            validate: { ...VALIDATIONS_PASSWORD.validate },
            required: {
              value: Boolean(newPassword) || Boolean(newPassRepeat),
              message: VALIDATIONS_PASSWORD.required,
            },
            minLength: { ...VALIDATIONS_PASSWORD.minLength },
            maxLength: { ...VALIDATIONS_PASSWORD.maxLength },
            pattern: { ...PATTERN_PASSWORD },
          })}
        />

        <PasswordInput
          type={SETTINGS_NEW_PASSWORD.type}
          label={SETTINGS_NEW_PASSWORD.label}
          placeholder={SETTINGS_NEW_PASSWORD.placeholder}
          disabled={isActiveForm === false}
          id="newPassword"
          error={Boolean(errors.new_password?.message)}
          errorMessage={errors.new_password?.message}
          {...register("new_password", {
            required: {
              value: Boolean(currentPassword) || Boolean(newPassRepeat),
              message: VALIDATIONS_PASSWORD.required,
            },
            minLength: { ...VALIDATIONS_PASSWORD.minLength },
            maxLength: { ...VALIDATIONS_PASSWORD.maxLength },
            pattern: { ...PATTERN_PASSWORD },
            validate: {
              differentPassword: (value = "") => {
                if (value.length && value === currentPassword) {
                  return "Новый пароль должен отличаться";
                }
              },
              ...VALIDATIONS_PASSWORD.validate,
            },
          })}
        />

        <PasswordInput
          type={SETTINGS_NEW_PASSWORD_REPEAT.type}
          label={SETTINGS_NEW_PASSWORD_REPEAT.label}
          placeholder={SETTINGS_NEW_PASSWORD_REPEAT.placeholder}
          disabled={isActiveForm === false}
          id="newPasswordRepeat"
          error={Boolean(errors.re_new_password?.message)}
          errorMessage={errors.re_new_password?.message}
          {...register("re_new_password", {
            required: {
              value: Boolean(currentPassword) || Boolean(newPassword),
              message: VALIDATIONS_PASSWORD.required,
            },
            minLength: { ...VALIDATIONS_PASSWORD.minLength },
            maxLength: { ...VALIDATIONS_PASSWORD.maxLength },
            pattern: { ...PATTERN_PASSWORD },
            validate: {
              passwordMatches: (value = "") => {
                if (value.length && value !== newPassword) {
                  return "Пароли не совпадают";
                }
              },
              ...VALIDATIONS_PASSWORD.validate,
            },
          })}
        />
      </div>

      {buttonsFormComponent({
        editedForm: isActiveForm,
        isLoading,
        isDirty: Object.keys(dirtyFields).length > 0,
        isValidFields: isValid,
      })}

      <div className={styles.containerCheckbox}>
        <h2 className="subtitle2">Получать уведомления</h2>
        {checkboxFormComponent({
          editedForm: isActiveForm,
          noticeEmail,
          onClick: handleChangeNotice,
        })}
      </div>

      {deletingProfileComponent()}
    </div>
  );
};
