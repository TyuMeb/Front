import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { useAppDispatch } from "@src/redux/hooks";
import { setTypeModal } from "@src/redux/slices/modal-slice";
import useInput from "@src/hooks/use-Input";

import styles from "@src/components/modals/modal-auth/modal-auth.module.scss";
import ModalAuth from "@src/components/modals/modal-auth";
import Icon from "@src/components/icon";
import { submitForm } from "../validation";
import { InputEmail } from "@src/shared/ui/inputs";
import { Button } from "@src/shared/ui/button";

const cx = classNames.bind(styles);

export const ResetPassword = () => {
    const dispatch = useAppDispatch();

    const emailField = useInput("");

    const [emailError, setEmailError] = useState("");

    // Проверка работы валидации
    const formValidation = () => {
        setEmailError("");
    };

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
                    <InputEmail
                        textLabel="E-mail"
                        placeholder="Введите свою почту"
                        error={Boolean(emailError)}
                        id="email"
                        {...emailField}
                    />
                </div>

                {renderError()}

                <ul className={cx("listButtons")}>
                    <li className={cx("itemButtons")}>
                        <Button
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
                        </Button>
                    </li>

                    <li className={cx("itemButtons")}>
                        <Button variant="cancel" type="button" onClick={() => dispatch(setTypeModal("signIn"))}>
                            Отмена
                        </Button>
                    </li>
                </ul>
            </form>
        </ModalAuth>
    );
};

export default ResetPassword;
