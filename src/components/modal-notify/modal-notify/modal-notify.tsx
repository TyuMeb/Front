import React, { useEffect } from "react";

import classNames from "classnames/bind";
import { useAppDispatch } from "@src/redux/hooks";
import { Button } from "@src/shared/ui/button";
import { closeModal } from "@src/redux/slices/notify-modal-slice";
import styles from "./modal-notify.module.scss";

const cx = classNames.bind(styles);

type ModalNotifyProps = {
  name: string;
  type?: "defaultNotify" | "successNotify" | "errorNotify";
  text?: string;
  delay?: number;
};

const textButton = {
  default: "Принять",
  success: "Ок",
  error: "Ок",
};

const message = {
  default: "Мы используем Cookies",
  success: "Спасибо! Ваши данные отправлены!",
  error: (
    <>
      Что-то пошло не так:(
      <br />
      Попробуйте еще раз или позвоните нам по номеру 89210000000
    </>
  ),
};

type TypeModal = "defaultNotify" | "successNotify" | "errorNotify";

const getText = (typeModal: TypeModal) => {
  switch (typeModal) {
    case "successNotify":
      return { message: message.success, textButton: textButton.success };
    case "errorNotify":
      return { message: message.error, textButton: textButton.error };
    default:
      return { message: message.default, textButton: textButton.default };
  }
};

export const ModalNotify = ({ name, type = "defaultNotify", text, delay }: ModalNotifyProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(closeModal(name)), delay || 6000);

    return () => {
      clearTimeout(setTimeout(() => dispatch(closeModal(name)), delay || 6000));
    };
  }, []);

  const handlerOnClick = () => {
    dispatch(closeModal(name));
  };

  return (
    <div className={cx("container", { success: type === "successNotify" }, { error: type === "errorNotify" })}>
      <p className="text-medium">{text ? text : getText(type as TypeModal)?.message}</p>

      <Button onClick={handlerOnClick}>{getText(type as TypeModal)?.textButton}</Button>
    </div>
  );
};
