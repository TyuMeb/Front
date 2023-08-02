"use client";

import React, { HTMLAttributes } from "react";
import classNames from "classnames/bind";

import { useAppSelector, useAppDispatch } from "@src/redux/hooks";
import { setTypeModal } from "@src/redux/modal-slice";

import styles from "@src/components/modals/modal-auth/modal-auth.module.scss";

const cx = classNames.bind(styles);

interface IModalAuth extends HTMLAttributes<HTMLDivElement> {}

const ModalAuth = ({ children }: IModalAuth) => {
    const { typeModal } = useAppSelector((store) => store.modal);
    const dispatch = useAppDispatch();

    return (
        <>
            <div
                className={cx("window", {
                    backgroundSignIn: typeModal === "signIn",
                    backgroundResetPassword: typeModal === "resetPassword",
                })}>
                <ul className={cx("listButtons", "containerButtons")}>
                    <li className={cx("itemLink")}>
                        <button
                            type="button"
                            className={cx("buttonLink", {
                                activeNav:
                                    typeModal === "signIn" ||
                                    typeModal === "resetPassword" ||
                                    typeModal === "resetPasswordConfirm",
                            })}
                            onClick={() => dispatch(setTypeModal("signIn"))}>
                            <p
                                className={cx("text", {
                                    activeButtonText: typeModal === "signIn" || typeModal === "resetPassword",
                                })}>
                                Войти
                            </p>
                        </button>
                    </li>

                    <li className={cx("itemLink")}>
                        <button
                            type="button"
                            className={cx("buttonLink", { activeNav: typeModal === "registration" })}
                            onClick={() => dispatch(setTypeModal("registration"))}>
                            <p className={cx("text", { activeButtonText: typeModal === "registration" })}>
                                Регистрация
                            </p>
                        </button>
                    </li>
                </ul>

                <div className={cx("content")}>{children}</div>
            </div>
        </>
    );
};

export default ModalAuth;
