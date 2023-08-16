"use client";

import styles from "./nav.module.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@src/redux/hooks";
import { openModal } from "@src/redux/slices/modal-slice";
import { useRefreshTokenMutation, useVerifyTokenMutation } from "@src/redux/api/jwt-api-slice";
import { getCookie, setCookie } from "typescript-cookie";

const Header = () => {
    const dispatch = useAppDispatch();
    const [current, setCurrent] = useState<string | undefined>(undefined);
    const { contentBlock } = useAppSelector((store) => store.header);
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

    useEffect(() => {
        setCurrent(contentBlock);
    }, [contentBlock]);

    const switchTab = (tab: string) => {
        setCurrent(tab);
        const element: HTMLElement | null = document.getElementById(tab);
        if (element) {
            element.id === "form"
                ? element.scrollIntoView({ behavior: "smooth", block: "center" })
                : element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.logo}>ВайВи</li>
                    <li
                        className={current !== "about" ? styles.link : styles.active}
                        onClick={() => switchTab("about")}>
                        О проекте
                    </li>
                    <li
                        className={current !== "howWorks" ? styles.link : styles.active}
                        onClick={() => switchTab("howWorks")}>
                        Как это работает
                    </li>
                    <li className={current !== "form" ? styles.link : styles.active} onClick={() => switchTab("form")}>
                        Исполнителям
                    </li>
                    <li
                        className={current !== "examples" ? styles.link : styles.active}
                        onClick={() => switchTab("examples")}>
                        Примеры работ
                    </li>
                    <li
                        className={current !== "advantages" ? styles.link : styles.active}
                        onClick={() => switchTab("advantages")}>
                        Преимущества
                    </li>
                    <li className={styles.link} onClick={() => dispatch(openModal())}>
                        Войти
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
