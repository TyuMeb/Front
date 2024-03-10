"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ErrorOption, FormProvider, useForm } from "react-hook-form";
import styles from "@src/components/account/settings/settings.module.scss";
import { usePatchUsersMeMutation, usePostUsersSetPasswordMutation } from "@src/redux/api/users-api-slice";
import { UserAccount } from "@src/redux/api/generated";
import { setUser, useUser } from "@src/redux/slices/users-slice";
import { useAppDispatch } from "@src/redux/hooks";
import { createNotifyModal } from "@src/redux/slices/notify-modal-slice";
import { Form } from "@src/components/account/settings/form";
import { getUser } from "./lib/get-user";

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

  const formMethods = useForm<SettingsForm>({
    defaultValues: useMemo(() => {
      if (user) {
        setNoticeEmail(Boolean(user?.notifications?.length) ? ["email"] : null);
        return getUser(user);
      }
    }, [user]),
    mode: "onChange",
  });

  const {
    handleSubmit,
    reset,
    setError,
    getValues,
    formState: { dirtyFields },
  } = formMethods;

  // TODO заменить defaultValues: useMemo на асинхронную функцию, удалить useEffect. Когда подключат кэш. Протестировать с кэшем.
  useEffect(() => {
    if (user && isErrorPassword) {
      reset(
        {
          ...getUser(user),
          currentPass: getValues().currentPass,
          newPass: getValues().newPass,
          newPassRepeat: getValues().newPassRepeat,
        },
        { keepErrors: true }
      );
    } else if (user) {
      reset(getUser(user));
    }
  }, [user]);

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
        setNoticeEmail(getValues().notifications === "email" ? ["email"] : null);
        reset();
        setIsActiveForm(false);
      }
    });
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
            noticeEmail={noticeEmail}
            setNoticeEmail={setNoticeEmail}
            isActiveForm={isActiveForm}
            setIsActiveForm={setIsActiveForm}
            isLoading={isLoadingUsers || isLoadingPassword}
          />
        </FormProvider>

        {deletingProfileComponent()}
      </form>
    )
  );
};
