"use client";

import React, { useState, useEffect, HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styles from "@src/components/account/settings/settings.module.scss";
import { CheckboxInput, Input, PhoneInput } from "@src/shared/ui/inputs";
import { PasswordInput } from "@src/shared/ui/inputs";
import { Button } from "@src/shared/ui/button";
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
} from "@src/shared/constants/fields";
import { usePatchUsersMeMutation, usePostUsersSetPasswordMutation } from "@src/redux/api/users-api-slice";
import { SettingsForm } from "../settings";

type Props = {
  isActiveForm: boolean;
  enableForm: () => void;
  disableForm: () => void;
  resetForm: () => void;
} & HTMLAttributes<HTMLDivElement>;

export const Form = ({ enableForm, disableForm, resetForm, isActiveForm, ...props }: Props) => {
  const [noticeEmail, setNoticeEmail] = useState<["email"] | null>(null);

  const [, { isLoading: isLoadingUsers }] = usePatchUsersMeMutation();
  const [, { isLoading: isLoadingSetPassword }] = usePostUsersSetPasswordMutation();

  const {
    register,
    trigger,
    watch,
    formState: { isValid, errors, isDirty },
  } = useFormContext<SettingsForm>();

  // Зависимость паролей друг от друга, для дальнейшей валидации полей пароля.
  const currentPass = watch("currentPass");
  const newPass = watch("newPass");
  const newPassRepeat = watch("newPassRepeat");
  useEffect(() => {
    if (isActiveForm) {
      trigger("newPass");
      trigger("currentPass");
      trigger("newPassRepeat");
    }
  }, [currentPass, newPass, newPassRepeat, trigger]);

  const handleChangeNotice = (notice: ["email"] | null) => {
    setNoticeEmail(notice);
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
      <ul className={styles.list}>
        <CheckboxInput
          type="radio"
          className={styles.checkbox}
          textLabel="на e-mail"
          disabled={!editedForm}
          value="email"
          {...register("notifications")}
          checked={noticeEmail !== null}
          onClick={onClickEmailHandler}
        />
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
      </ul>
    );
  };

  const buttonsFormComponent = ({
    editedForm,
    isLoading,
    formParameter,
  }: {
    editedForm: boolean;
    isLoading: { isLoadingUsers: boolean; isLoadingSetPassword: boolean };
    formParameter: {
      changesForm: boolean;
      isValidFields: boolean;
    };
  }) => {
    const { isLoadingUsers, isLoadingSetPassword } = isLoading;

    return (
      <div className={styles.buttonsSection} {...props}>
        {editedForm || isLoadingUsers || isLoadingSetPassword ? (
          <>
            <Button
              isLoading={isLoadingUsers || isLoadingSetPassword}
              disabled={!formParameter.changesForm || !formParameter.isValidFields}
            >
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

  return (
    <>
      <div className={styles.inputsRegistration}>
        <Input
          label={SETTINGS_NAME.label}
          placeholder={SETTINGS_NAME.placeholder}
          disabled={isActiveForm === false}
          id="firstName"
          autoComplete="on"
          error={Boolean(errors.name?.message)}
          errorMessage={errors.name?.message}
          {...register("name", {
            required: VALIDATIONS_FULLNAME.required,
            minLength: { ...VALIDATIONS_FULLNAME.minLength },
            maxLength: { ...VALIDATIONS_FULLNAME.maxLength },
            pattern: { ...PATTERN_FULLNAME },
          })}
        />

        <Input
          label={SETTINGS_SURNAME.label}
          placeholder={SETTINGS_SURNAME.placeholder}
          disabled={isActiveForm === false}
          id="lastName"
          autoComplete="on"
          error={Boolean(errors.surname?.message)}
          errorMessage={errors.surname?.message}
          {...register("surname", {
            required: VALIDATIONS_FULLNAME.required,
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
          id="person_telephone"
          autoComplete="off"
          error={Boolean(errors.person_telephone?.message)}
          errorMessage={errors.person_telephone?.message}
          value={watch("person_telephone")}
          {...register("person_telephone", {
            required: "Данное поле обязательно",
            minLength: {
              message: "Минимальная длина номера 12 цифр",
              value: 16,
            },
          })}
        />

        <Input
          type={SETTINGS_EMAIL.type}
          label={SETTINGS_EMAIL.label}
          placeholder={SETTINGS_EMAIL.placeholder}
          disabled
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

        <PasswordInput
          className={styles.gridColumn}
          type={SETTINGS_PREVIOUS_PASSWORD.type}
          label={SETTINGS_PREVIOUS_PASSWORD.label}
          placeholder={SETTINGS_PREVIOUS_PASSWORD.placeholder}
          disabled={isActiveForm === false}
          id="password"
          autoComplete="off"
          error={Boolean(errors.currentPass?.message)}
          errorMessage={errors.currentPass?.message}
          {...register("currentPass", {
            validate: { ...VALIDATIONS_PASSWORD.validate },
            required: {
              value: Boolean(currentPass) || Boolean(newPass) || Boolean(newPassRepeat),
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
          autoComplete="off"
          error={Boolean(errors.newPass?.message)}
          errorMessage={errors.newPass?.message}
          {...register("newPass", {
            required: {
              value: Boolean(currentPass) || Boolean(newPass) || Boolean(newPassRepeat),
              message: VALIDATIONS_PASSWORD.required,
            },
            minLength: { ...VALIDATIONS_PASSWORD.minLength },
            maxLength: { ...VALIDATIONS_PASSWORD.maxLength },
            pattern: { ...PATTERN_PASSWORD },
            validate: {
              differentPassword: (value = "") => {
                if (value.length && value === currentPass) {
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
          autoComplete="off"
          error={Boolean(errors.newPassRepeat?.message)}
          errorMessage={errors.newPassRepeat?.message}
          {...register("newPassRepeat", {
            required: {
              value: Boolean(currentPass) || Boolean(newPass) || Boolean(newPassRepeat),
              message: VALIDATIONS_PASSWORD.required,
            },
            minLength: { ...VALIDATIONS_PASSWORD.minLength },
            maxLength: { ...VALIDATIONS_PASSWORD.maxLength },
            pattern: { ...PATTERN_PASSWORD },
            validate: {
              passwordMatches: (value = "") => {
                if (value.length && value !== newPass) {
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
        isLoading: { isLoadingUsers, isLoadingSetPassword },
        formParameter: { changesForm: isDirty, isValidFields: isValid },
      })}

      <div className={styles.wrapperCheckbox}>
        <h2 className="subtitle2">Получать уведомления</h2>
        {checkboxFormComponent({
          editedForm: isActiveForm,
          noticeEmail,
          onClick: handleChangeNotice,
        })}
      </div>
    </>
  );
};
