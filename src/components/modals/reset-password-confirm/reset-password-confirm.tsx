import React, { useState } from "react";
import classNames from "classnames/bind";
import { useAppDispatch } from "@src/redux/hooks";
import { setTypeModal } from "@src/redux/slices/modal-slice";
import { usePostUsersResetPasswordConfirmMutation } from "@src/redux/api/users-api-slice";
import { useParams, useRouter } from "next/navigation";

import styles from "@src/components/modals/modal-auth/modal-auth.module.scss";
import ModalAuth from "@src/components/modals/modal-auth";
import { PasswordInput } from "@src/shared/ui/inputs";
import { Button } from "@src/shared/ui/button";
import { useForm } from "react-hook-form";

const cx = classNames.bind(styles);

type Form = {
    new_password: string;
};

export const ResetPasswordConfirm = () => {
    const dispatch = useAppDispatch();

    const params = useParams();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Form>({
        values: {
            new_password: "",
        },
    });

    const [error, setError] = useState("");

    const [resetPasswordConfirm] = usePostUsersResetPasswordConfirmMutation();

    const onSubmit = (data: Form) => {
        setError("");

        resetPasswordConfirm({ ...data, uid: params.uid as string, token: params.token as string })
            .unwrap()
            .then(() => {
                router.push("/");
                dispatch(setTypeModal("signIn"));
            })
            .catch((error) => {
                setError(error?.data?.uid?.join(""));
            });
    };

    return (
        <ModalAuth>
            <h2 className={cx("title", "titleSubtext")}>Новый пароль</h2>

            <p className={cx("text", "subtext")}>Чтобы изменить пароль, нужно ввести новый пароль.</p>

            <form onSubmit={handleSubmit(onSubmit)} className={cx("form")}>
                <div className={cx("inputsResetPassword")}>
                    <PasswordInput
                        {...register("new_password", {
                            required: { value: true, message: "Данное поле обязательно" },
                            minLength: {
                                value: 8,
                                message: "Минимальная длинна 8 символов",
                            },
                        })}
                        label="Пароль"
                        placeholder="Введите свой пароль"
                        error={Boolean(errors.new_password?.message)}
                        errorMessage={errors.new_password?.message}
                        id="new_password"
                    />
                </div>

                {error && <p className={cx("textError", { warningText: true })}>{error}</p>}

                <ul className={cx("listButtons")}>
                    <li className={cx("itemButtons")}>
                        <Button type="submit">Сбросить пароль</Button>
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

export default ResetPasswordConfirm;
