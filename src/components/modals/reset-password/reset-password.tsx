import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { useAppDispatch } from "@src/redux/hooks";
import { setTypeModal } from "@src/redux/slices/modal-slice";
import useInput from "@src/hooks/use-Input";

import styles from "@src/components/modals/modal-auth/modal-auth.module.scss";
import ModalAuth from "@src/components/modals/modal-auth";
import Icon from "@src/components/icon";
import { InputEmail } from "@src/components/shared/ui/inputs";
import { submitForm, lengthCheck } from "../validation";

const cx = classNames.bind(styles);

export const ResetPassword = () => {
    const dispatch = useAppDispatch();

    const emailField = useInput("");

    const [emailError, setEmailError] = useState("");

    // Проверка работы валидации
    const formValidation = () => {
        setEmailError("");
        lengthCheck(emailField.value, setEmailError);
    };

    useEffect(() => {
        formValidation();
    }, [emailField]);

    const renderError = () =>
        emailError && (
            <ul className={cx("errorsText")}>
                <li className={cx("textError", { warningText: emailError })}>{emailError}</li>
            </ul>
        );

    return (
        <ModalAuth>
            <Icon className={cx("backgroundResetPassword")} glyph="resetPassword" />

            <h2 className={cx("title", "titleSubtext")}>Восстановление пароля</h2>

            <p className={cx("text", "subtext")}>
                Введите E-mail, который вы указывали при регистрации. Туда придет инструкция по сбросу пароля.
            </p>

            <form className={cx("form")}>
                <div className={cx("inputsResetPassword")}>
                    <div style={{ width: "296px" }}>
                        <InputEmail
                            textLabel="E-mail"
                            placeholder="Введите свою почту"
                            error={Boolean(emailError)}
                            id="email"
                            {...emailField}
                        />
                    </div>
                </div>

                {renderError()}

                <ul className={cx("listButtons")}>
                    <li className={cx("itemButtons")}>
                        <button
                            className={cx("text", "button")}
                            type="submit"
                            onClick={(e) =>
                                submitForm({
                                    e,
                                    fields: {
                                        emailField: emailField.value,
                                    },
                                })
                            }>
                            Сбросить пароль
                        </button>
                    </li>

                    <li className={cx("itemButtons")}>
                        <button
                            className={cx("text", "button", "buttonWhite")}
                            type="button"
                            onClick={() => dispatch(setTypeModal("signIn"))}>
                            Отмена
                        </button>
                    </li>
                </ul>
            </form>
        </ModalAuth>
    );
};

export default ResetPassword;
