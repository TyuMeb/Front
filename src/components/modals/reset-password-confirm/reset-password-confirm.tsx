import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { useAppDispatch } from "@src/redux/hooks";
import { setTypeModal } from "@src/redux/slices/modal-slice";
import useInput from "@src/hooks/use-Input";
import { submitForm, lengthCheck } from "../validation";

import styles from "@src/components/modals/modal-auth/modal-auth.module.scss";
import ModalAuth from "@src/components/modals/modal-auth";
import { InputPassword } from "@src/components/shared/ui/inputs";

const cx = classNames.bind(styles);

export const ResetPasswordConfirm = () => {
    const dispatch = useAppDispatch();

    const passwordField = useInput("");

    const [passwordError, setPasswordError] = useState("");

    // Проверка работы валидации
    const formValidation = () => {
        setPasswordError("");
        lengthCheck(passwordError, setPasswordError);
    };

    useEffect(() => {
        formValidation();
    }, [passwordField]);

    const renderError = () =>
        passwordError && (
            <ul className={cx("errorsText")}>
                <li className={cx("textError", { warningText: passwordError })}>{passwordError}</li>
            </ul>
        );

    return (
        <ModalAuth>
            <h2 className={cx("title", "titleSubtext")}>Новый пароль</h2>

            <p className={cx("text", "subtext")}>Чтобы изменить пароль, нужно ввести новый пароль.</p>

            <form className={cx("form")}>
                <div className={cx("inputsResetPassword")}>
                    <div style={{ width: "296px" }}>
                        <InputPassword
                            textLabel="Пароль"
                            placeholder="Введите свой пароль"
                            error={Boolean(passwordError)}
                            id="password"
                            {...passwordField}
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
                                        passwordField: passwordField.value,
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

export default ResetPasswordConfirm;
