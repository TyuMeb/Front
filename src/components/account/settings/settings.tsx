"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ErrorOption, useForm } from "react-hook-form";
import styles from "@src/components/account/settings/settings.module.scss";
import { Button } from "@src/shared/ui/button";
import { Input, PhoneInput } from "@src/shared/ui/inputs";
import { CheckboxInput } from "@src/shared/ui/inputs";
import { PasswordInput } from "@src/shared/ui/inputs";
import { usePatchUsersMeMutation, usePostUsersSetPasswordMutation } from "@src/redux/api/users-api-slice";
import { UserAccount } from "@src/redux/api/generated";
import { setUser, useUser } from "@src/redux/slices/users-slice";
import { useAppDispatch } from "@src/redux/hooks";
import { phoneConversion } from "@src/shared/lib/phoneMask";
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

type SettingsForm = {
  name: string;
  surname?: string;
  person_telephone?: string;
  email: string;
  currentPass: string;
  newPass: string;
  newPassRepeat: string;
  notifications: "email" | "off";
};

export const Settings = () => {
  const [isModifyMode, setIsModifyMode] = useState(false);

  const [noticeEmail, setNoticeEmail] = useState<["email"] | null>(null);

  const [updateUsers, { isLoading: isLoadingUsers }] = usePatchUsersMeMutation();
  const [updatePassword, { isLoading: isLoadingSetPassword }] = usePostUsersSetPasswordMutation();

  const user: UserAccount | null = useUser();
  const dispatch = useAppDispatch();

  // Interface Segregation Principle. Интерфейс должен реализовываться под определенную задачу.
  const getSettingsForm = (user: UserAccount) => {
    const { name, surname, person_telephone, email } = user;

    const phoneValue = phoneConversion(person_telephone || "");

    return {
      name: name || "",
      surname: surname || "",
      person_telephone: phoneValue || "",
      email: email || "",
      currentPass: "",
      newPass: "",
      newPassRepeat: "",
      notifications: noticeEmail === null ? "off" : "email",
    } as SettingsForm;
  };

  const {
    register,
    handleSubmit,
    reset,
    setError,
    getValues,
    trigger,
    watch,
    formState: { errors, isDirty, dirtyFields, isValid },
  } = useForm<SettingsForm>({
    defaultValues: useMemo(() => {
      if (user) {
        setNoticeEmail(Boolean(user?.notifications?.length) ? ["email"] : null);
        return getSettingsForm(user);
      }
    }, [user]),
    mode: "onChange",
    values: {
      name: "",
      surname: "",
      person_telephone: "",
      email: "",
      currentPass: "",
      newPass: "",
      newPassRepeat: "",
      notifications: "email",
    },
  });

  useEffect(() => {
    if (user) {
      reset(getSettingsForm(user));
    }
  }, [user]);

  // Зависимость паролей друг от друга, для дальнейшей валидации полей пароля.
  const currentPass = watch("currentPass");
  const newPass = watch("newPass");
  const newPassRepeat = watch("newPassRepeat");
  useEffect(() => {
    if (isModifyMode) {
      trigger("newPass");
      trigger("currentPass");
      trigger("newPassRepeat");
    }
  }, [currentPass, newPass, newPassRepeat, trigger]);

  const handleModifyModeOn = () => {
    setIsModifyMode(true);
  };

  const handleModifyModeOff = () => {
    setIsModifyMode(false);
  };

  const handleModifications = () => {
    handleModifyModeOff();
    reset();
    setNoticeEmail(getValues().notifications === "email" ? ["email"] : null);
  };

  const handleChangeNotice = (notice: ["email"] | null) => {
    setNoticeEmail(notice);
  };

  const changePassword = (dataPass: { new_password: string; re_new_password: string; current_password: string }) => {
    updatePassword(dataPass)
      .unwrap()
      .then(() => {
        handleModifications();
      })
      .catch((error) => {
        if (error.status === 400 && error.data.hasOwnProperty("current_password")) {
          const messageError = (
            <p style={{ margin: 0 }}>
              Неверный пароль.&nbsp;
              <a href="/password-recovery">
                <u>Забыли пароль?</u>
              </a>
            </p>
          );

          setError("currentPass", {
            message: messageError,
          } as { message: JSX.Element } & ErrorOption);
        }
      });
  };

  const onSubmit = (data: SettingsForm) => {
    const { notifications, person_telephone, newPass, currentPass, newPassRepeat, ...rest } = data;
    const dataUser = { notifications: noticeEmail, ...rest } as UserAccount;

    if (newPass && currentPass && newPassRepeat) {
      changePassword({ current_password: currentPass, new_password: newPass, re_new_password: newPassRepeat });
    }

    if (
      dirtyFields.notifications ||
      dirtyFields.person_telephone ||
      dirtyFields.email ||
      dirtyFields.name ||
      dirtyFields.surname
    ) {
      updateUsers({ person_telephone: person_telephone?.replaceAll(" ", ""), ...dataUser })
        .unwrap()
        .then(() => {
          handleModifications();
        })
        .catch((error) => {
          if (error.status === 400 && error.data.hasOwnProperty("person_telephone")) {
            setError("person_telephone", { message: "Такой номер телефона уже существует." });
          }
        });

      dispatch(setUser({ person_telephone, ...dataUser }));
    }
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
      <div className={styles.buttonsSection}>
        {editedForm || isLoadingUsers || isLoadingSetPassword ? (
          <>
            <Button
              isLoading={isLoadingUsers || isLoadingSetPassword}
              disabled={!formParameter.changesForm || !formParameter.isValidFields}
            >
              Сохранить
            </Button>

            <Button type="button" onClick={handleModifications}>
              Отменить
            </Button>
          </>
        ) : (
          <Button type="button" onClick={handleModifyModeOn}>
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

  const deletingProfileComponent = () => {
    return (
      <div className={styles.row}>
        <h2 className="subtitle2">Удаление профиля</h2>
        <p className="text-medium">
          Если вы хотите удалить профиль, пожалуйста, свяжитесь с нашей технической поддержкой на вкладке «помощь»
        </p>
      </div>
    );
  };

  return (
    user && (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputsRegistration}>
          <Input
            label={SETTINGS_NAME.label}
            placeholder={SETTINGS_NAME.placeholder}
            disabled={isModifyMode === false}
            id="firstName"
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
            disabled={isModifyMode === false}
            id="lastName"
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
            disabled={isModifyMode === false}
            id="person_telephone"
            error={Boolean(errors.person_telephone?.message)}
            errorMessage={errors.person_telephone?.message}
            {...register("person_telephone", {
              required: "Данное поле обязательно",
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
            disabled={isModifyMode === false}
            id="password"
            autoComplete="off"
            error={Boolean(errors.currentPass?.message)}
            errorMessage={errors.currentPass?.message}
            {...register("currentPass", {
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
            disabled={isModifyMode === false}
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
              },
            })}
          />

          <PasswordInput
            type={SETTINGS_NEW_PASSWORD_REPEAT.type}
            label={SETTINGS_NEW_PASSWORD_REPEAT.label}
            placeholder={SETTINGS_NEW_PASSWORD_REPEAT.placeholder}
            disabled={isModifyMode === false}
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
              },
            })}
          />
        </div>

        {buttonsFormComponent({
          editedForm: isModifyMode,
          isLoading: { isLoadingUsers, isLoadingSetPassword },
          formParameter: { changesForm: isDirty, isValidFields: isValid },
        })}

        <div className={styles.wrapperCheckbox}>
          <h2 className="subtitle2">Получать уведомления</h2>
          {checkboxFormComponent({
            editedForm: isModifyMode,
            noticeEmail,
            onClick: handleChangeNotice,
          })}
        </div>

        {deletingProfileComponent()}
      </form>
    )
  );
};
