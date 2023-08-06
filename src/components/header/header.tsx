"use client";

import styles from "./header.module.css";
import { MouseEvent, useEffect } from "react";
import { useAppDispatch } from "@src/redux/hooks";
import { openModal } from "@src/redux/slices/modal-slice";
import { useRefreshTokenMutation, useVerifyTokenMutation } from "@src/redux/api/jwt-api-slice";
import { getCookie, setCookie } from "typescript-cookie";

const Header = () => {
    const dispatch = useAppDispatch();
    const [veryfyToken] = useVerifyTokenMutation();
    const [refreshToken] = useRefreshTokenMutation();

    useEffect(() => {
        veryfyToken({ token: getCookie("accessToken") })
            .unwrap()
            .then(() => {
                console.log("Верификация прошла успешно");
            })
            .catch((error) => {
                if (error.status === 401 || error.status === 400) {
                    refreshToken({ refresh: localStorage.getItem("refreshToken") })
                        .unwrap()
                        .then((res: { access: string }) => {
                            setCookie("accessToken", res.access);
                            console.log("Токен успешно обновлён");
                            veryfyToken({ token: getCookie("accessToken") })
                                .unwrap()
                                .then(() => {
                                    console.log("Верификация прошла успешно");
                                });
                        })
                        .catch((error) => {
                            console.log("Рефреш токен не действителен");
                            localStorage.removeItem("refreshToken");
                            console.log(error);
                        });
                }

                if (error.status === 429) {
                    console.log("Превышено количество попыток авторизации");
                    console.log(error);
                }
            });
    }, []);

    const activeLink = (event: MouseEvent<HTMLUListElement>) => {
        const target = event.target as Element;
        if (target.tagName === "LI") {
            console.log(target);
        }
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.list} onClick={activeLink}>
                    <li className={styles.logo}>ВайВи</li>
                    <li className={styles.link}>О проекте</li>
                    <li className={styles.link}>Как это работает</li>
                    <li className={styles.link}>Исполнителям</li>
                    <li className={styles.link}>Примеры работ</li>
                    <li className={styles.link}>Преимущества</li>
                    <li className={styles.link} onClick={() => dispatch(openModal())}>
                        Войти
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
