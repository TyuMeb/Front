import React, { HTMLAttributes } from "react";
import classNames from "classnames/bind";

import { useAppSelector, useAppDispatch } from "@src/redux/hooks";
import { setTypeModal } from "@src/redux/slices/modal-slice";

import styles from "./modal-auth.module.scss";

const cx = classNames.bind(styles);

type ModalAuthProps = {} & HTMLAttributes<HTMLDivElement>;

export const ModalAuth = ({ children, ...props }: ModalAuthProps) => {
  const { typeModal } = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();

  const setModalSignIn = () => dispatch(setTypeModal("signIn"));
  const setModalRegistration = () => dispatch(setTypeModal("registration"));

  return (
    <div className={styles.window} {...props}>
      <ul className={styles.containerButtons}>
        <li className={styles.item}>
          <button
            type="button"
            className={cx("buttonLink", {
              activeNav:
                typeModal === "signIn" || typeModal === "resetPassword" || typeModal === "resetPasswordConfirm",
            })}
            onClick={setModalSignIn}
          >
            <p
              className={cx("text-medium", {
                activeButtonText:
                  typeModal === "signIn" || typeModal === "resetPassword" || typeModal === "resetPasswordConfirm",
              })}
            >
              Войти
            </p>
          </button>
        </li>

        <li className={styles.item}>
          <button
            type="button"
            className={cx("buttonLink", { activeNav: typeModal === "registration" })}
            onClick={setModalRegistration}
          >
            <p className={cx("text-medium", { activeButtonText: typeModal === "registration" })}>Регистрация</p>
          </button>
        </li>
      </ul>

      <div className={cx("content")}>{children}</div>
    </div>
  );
};
