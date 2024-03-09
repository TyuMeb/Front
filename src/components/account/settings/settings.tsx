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
import { createNotifyModal } from "@src/redux/slices/notify-modal-slice";
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

export type SettingsForm = {
  name: string;
  surname?: string;
  person_telephone?: string;
  email: string;
  currentPass: string;
  newPass: string;
  newPassRepeat: string;
  notifications: "email" | "off";
};

type ErrorData = {
  status: number;
  data: { [value: string]: string[] };
};

export const Settings = () => {
  const [isActiveForm, setIsActiveForm] = useState(false);

  const [noticeEmail, setNoticeEmail] = useState<["email"] | null>(null);

  const [updateUsers, { isLoading: isLoadingUsers }] = usePatchUsersMeMutation();
  const [updatePassword, { isLoading: isLoadingPassword, isError: isErrorPassword }] =
    usePostUsersSetPasswordMutation();

  const user: UserAccount | null = useUser();
  const dispatch = useAppDispatch();

  const getUser = (user: UserAccount) => {
    const { name, surname, person_telephone, email } = user;

    const phoneValue = phoneConversion(person_telephone || "");

    return {
      name: name || "",
      surname: surname || "",
      person_telephone: phoneValue || "",
      email: email || "",
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
        return getUser(user);
      }
    }, [user]),
    mode: "onChange",
  });

  useEffect(() => {
    if (user && !isErrorPassword) {
      reset(getUser(user));
    }
  }, [user, isErrorPassword]);

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

  const handleDefaultErrors = (data: { [x: string]: string[] }) => {
    const keys = Object.keys(data || {}) as Array<keyof SettingsForm>;

    keys.forEach((key) => {
      setError(key, { message: data[key]?.join(", ") });
    });
  };

  const handlerUserError = (error: ErrorData) => {
    if (error.status >= 500) {
      dispatch(
        createNotifyModal({
          name: "errorUser",
          type: "error",
        })
      );
    }

    if (error.status === 400) {
      dispatch(
        createNotifyModal({
          name: "errorUser",
          type: "error",
          text: "Ошибка в полях пользователя",
        })
      );
    }

    if (error.status === 400 && error.data.hasOwnProperty("person_telephone")) {
      setError("person_telephone", { message: "Такой номер телефона уже существует." });
    } else {
      handleDefaultErrors(error.data);
    }
  };

  const handlerPasswordError = (error: ErrorData) => {
    if (error.status >= 500) {
      dispatch(
        createNotifyModal({
          name: "errorPassword",
          type: "error",
        })
      );
    }

    if (error.status === 400) {
      dispatch(
        createNotifyModal({
          name: "errorUser",
          type: "error",
          text: "Ошибка в пароле",
        })
      );
    }

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
    } else {
      handleDefaultErrors(error.data);
    }
  };

  const onSubmit = (data: SettingsForm) => {
    const { notifications, person_telephone, newPass, currentPass, newPassRepeat, name, surname, ...rest } = data;

    const dataUser = {
      name: name.trim(),
      surname: surname?.trim(),
      notifications: noticeEmail,
      ...rest,
    };

    const dataPassword = {
      current_password: currentPass,
      new_password: newPass,
      re_new_password: newPassRepeat,
    };

    let userPromise = null;
    let passwordPromise = null;

    if (
      dirtyFields.notifications ||
      dirtyFields.person_telephone ||
      dirtyFields.email ||
      dirtyFields.name ||
      dirtyFields.surname
    ) {
      userPromise = updateUsers({ person_telephone: person_telephone?.replaceAll(" ", ""), ...dataUser })
        .unwrap()
        .then(() => {
          return { success: true, error: false };
        })
        .catch((error) => {
          return { success: false, error: error };
        });
    }

    if (newPass && currentPass && newPassRepeat) {
      passwordPromise = updatePassword(dataPassword)
        .unwrap()
        .then(() => {
          return { success: true, error: false };
        })
        .catch((error) => {
          return { success: false, error: error };
        });
    }

    Promise.allSettled([userPromise, passwordPromise]).then((data) => {
      const [user, password] = data as unknown as {
        status: string;
        value: { error: ErrorData | false; success: string };
      }[];

      if (user?.value) {
        const { success, error } = user?.value;

        if (success) {
          dispatch(setUser({ person_telephone, ...dataUser }));
          dispatch(
            createNotifyModal({
              name: "successUser",
              type: "success",
              text: "Данные успешно изменены!",
            })
          );
        }

        if (error) {
          handlerUserError(error);
        }
      }

      if (password?.value) {
        const { success, error } = password?.value;

        if (success) {
          dispatch(
            createNotifyModal({
              name: "successUser",
              type: "success",
              text: "Пароль успешно изменен!",
            })
          );
        }

        if (error) {
          handlerPasswordError(error);
        }
      }

      if (!user?.value?.error && !password?.value?.error) {
        disableForm();
        reset();
        setNoticeEmail(getValues().notifications === "email" ? ["email"] : null);
      }
    });
  };

  const buttonsFormComponent = ({
    editedForm,
    isLoading,
    formParameter,
  }: {
    editedForm: boolean;
    isLoading: boolean;
    formParameter: {
      changesForm: boolean;
      isValidFields: boolean;
    };
  }) => {
    return (
      <div className={styles.buttonsSection}>
        {editedForm || isLoading ? (
          <>
            <Button isLoading={isLoading} disabled={!formParameter.changesForm || !formParameter.isValidFields}>
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
          isLoading: isLoadingUsers || isLoadingPassword,
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

        {deletingProfileComponent()}
      </form>
    )
  );
};
