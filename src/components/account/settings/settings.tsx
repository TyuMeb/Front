"use client";

import React, { useState, useEffect } from "react";
import { ErrorOption, FormProvider, useForm } from "react-hook-form";
import styles from "@src/components/account/settings/settings.module.scss";
import { usePostUsersSetPasswordMutation, usePatchUsersMeMutation } from "@src/redux/api/users-api-slice";
import { SetPasswordRetype, UserAccount } from "@src/redux/api/generated";
import { setUser, useUser } from "@src/redux/slices/users-slice";
import { useAppDispatch } from "@src/redux/hooks";
import { createNotifyModal } from "@src/redux/slices/notify-modal-slice";
import { Form } from "@src/components/account/settings/form";
import { getUser } from "./lib/get-user";
import { handleDefaultErrors } from "@src/shared/lib/handle-default-errors";

export type SettingsForm = {
  name: string;
  surname?: string;
  person_telephone?: string;
  email: string;
  notifications: "email" | "off";
} & SetPasswordRetype;

type ErrorData = {
  status: number;
  data: { [value: string]: string[] };
};

export const Settings = () => {
  const [isActiveForm, setIsActiveForm] = useState(false);

  const [noticeEmail, setNoticeEmail] = useState<["email"] | null>(null);

  const [updateUsers, { isLoading: isLoadingUsers }] = usePatchUsersMeMutation();
  const [updatePassword, { isLoading: isLoadingPassword }] = usePostUsersSetPasswordMutation();

  const user: UserAccount | null = useUser();
  const dispatch = useAppDispatch();

  const formMethods = useForm<SettingsForm>({
    mode: "onChange",
  });

  const {
    handleSubmit,
    reset,
    setError,
    getValues,
    formState: { dirtyFields },
  } = formMethods;

  useEffect(() => {
    if (user) {
      reset(
        {
          ...getUser(user),
          current_password: getValues().current_password,
          new_password: getValues().new_password,
          re_new_password: getValues().re_new_password,
        },
        { keepDirty: true }
      );

      let notificationsValue = null as ["email"] | null;
      if (user.notifications?.includes("email")) {
        notificationsValue = ["email"];
      }
      setNoticeEmail(notificationsValue);
    }
  }, [user]);

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

    handleDefaultErrors<SettingsForm>(error.data, setError);
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
        <p className="text-small">
          Неверный пароль.&nbsp;
          <a href="/password-recovery">
            <u>Забыли пароль?</u>
          </a>
        </p>
      );

      setError("current_password", {
        message: messageError,
      } as { message: JSX.Element } & ErrorOption);

      return;
    }

    handleDefaultErrors<SettingsForm>(error.data, setError);
  };

  const onSubmit = (data: SettingsForm) => {
    const { notifications, person_telephone, new_password, current_password, re_new_password, name, surname, ...rest } =
      data;

    const dataUser = {
      name: name.trim(),
      surname: surname?.trim(),
      notifications: noticeEmail,
      person_telephone: person_telephone?.replaceAll(" ", ""),
      ...rest,
    };

    const dataPassword = {
      current_password,
      new_password,
      re_new_password,
    };

    let userPromise = null;
    let passwordPromise = null;

    if (
      (dirtyFields.notifications && getValues().notifications.length) ||
      (dirtyFields.person_telephone && getValues().person_telephone?.length) ||
      (dirtyFields.email && getValues().email.length) ||
      (dirtyFields.name && getValues().name.length) ||
      (dirtyFields.surname && getValues().surname?.length)
    ) {
      userPromise = updateUsers(dataUser)
        .unwrap()
        .then((data) => {
          return { success: data, error: false };
        })
        .catch((error) => {
          return { success: false, error: error };
        });
    }

    if (new_password && current_password && re_new_password) {
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
        value: { error: ErrorData | false; success: boolean | UserAccount };
      }[];

      if (user?.value) {
        const { success, error } = user?.value;

        if (success && typeof success === "object") {
          dispatch(setUser({ ...success }));
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
      </form>
    )
  );
};
