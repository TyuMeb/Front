"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ErrorOption, FormProvider, useForm } from "react-hook-form";
import styles from "@src/components/account/settings/settings.module.scss";
import { usePatchUsersMeMutation, usePostUsersSetPasswordMutation } from "@src/redux/api/users-api-slice";
import { UserAccount } from "@src/redux/api/generated";
import { setUser, useUser } from "@src/redux/slices/users-slice";
import { useAppDispatch } from "@src/redux/hooks";
import { phoneConversion } from "@src/shared/lib/phoneMask";
import { createNotifyModal } from "@src/redux/slices/notify-modal-slice";
import { Form } from "./form";

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

export const Settings = () => {
  const [isModifyMode, setIsModifyMode] = useState(false);

  const [noticeEmail, setNoticeEmail] = useState<["email"] | null>(null);

  const [updateUsers] = usePatchUsersMeMutation();
  const [updatePassword] = usePostUsersSetPasswordMutation();

  const user: UserAccount | null = useUser();
  const dispatch = useAppDispatch();

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

  useEffect(() => {
    if (user) {
      reset(getSettingsForm(user));
    }
  }, [user]);

  const formMethods = useForm<SettingsForm>({
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

  const {
    handleSubmit,
    reset,
    setError,
    getValues,
    formState: { dirtyFields },
  } = formMethods;

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

  const handleDefaultErrors = (data: { [x: string]: string[] }) => {
    const keys = Object.keys(data || {}) as Array<keyof SettingsForm>;

    keys.forEach((key) => {
      setError(key, { message: data[key]?.join(", ") });
    });
  };

  const changePassword = (dataPass: { new_password: string; re_new_password: string; current_password: string }) => {
    updatePassword(dataPass)
      .unwrap()
      .then(() => {
        handleModifications();
        dispatch(
          createNotifyModal({
            name: "successPassword",
            typeNotify: "successNotify",
            textNotify: "Пароль успешно изменен!",
          })
        );
      })
      .catch((error) => {
        if (error.status >= 500) {
          dispatch(
            createNotifyModal({
              name: "errorPassword",
              typeNotify: "errorNotify",
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
      });
  };

  const onSubmit = (data: SettingsForm) => {
    const { notifications, person_telephone, newPass, currentPass, newPassRepeat, name, surname, ...rest } = data;
    const dataUser = {
      name: name.trim(),
      surname: surname?.trim(),
      notifications: noticeEmail,
      ...rest,
    } as UserAccount;

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
          dispatch(
            createNotifyModal({
              name: "successUser",
              typeNotify: "successNotify",
              textNotify: "Данные успешно изменены!",
            })
          );

          if (!newPass && !currentPass && !newPassRepeat) {
            handleModifications();
          }
        })
        .catch((error) => {
          if (error.status >= 500) {
            dispatch(
              createNotifyModal({
                name: "errorPassword",
                typeNotify: "errorNotify",
              })
            );
          }

          if (error.status === 400 && error.data.hasOwnProperty("person_telephone")) {
            setError("person_telephone", { message: "Такой номер телефона уже существует." });
          } else {
            handleDefaultErrors(error.data);
          }
        });

      dispatch(setUser({ person_telephone, ...dataUser }));
    }

    if (newPass && currentPass && newPassRepeat) {
      changePassword({ current_password: currentPass, new_password: newPass, re_new_password: newPassRepeat });
    }
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
        <FormProvider {...formMethods}>
          <Form
            enableForm={handleModifyModeOn}
            disableForm={handleModifyModeOff}
            resetForm={handleModifications}
            isActiveForm={isModifyMode}
          />
        </FormProvider>

        {deletingProfileComponent()}
      </form>
    )
  );
};
