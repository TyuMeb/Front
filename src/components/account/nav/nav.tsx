"use client";

import styles from "./nav.module.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@src/redux/hooks";
import { openModal } from "@src/redux/slices/modal-slice";
import { useRefreshTokenMutation, useVerifyTokenMutation } from "@src/redux/api/jwt-api-slice";
import { getCookie, setCookie } from "typescript-cookie";

const Nav = () => {
    const dispatch = useAppDispatch();
    const [current, setCurrent] = useState<string | undefined>(undefined);
    const { contentBlock } = useAppSelector((store) => store.nav);

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
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.logo}>ВайВи</li>
                <li
                    className={current !== "myorders" ? styles.link : styles.active}
                    onClick={() => switchTab("myorders")}>
                    Мои заказы
                </li>
                <li className={current !== "chats" ? styles.link : styles.active} onClick={() => switchTab("chats")}>
                    Чаты
                </li>
                <li
                    className={current !== "archives" ? styles.link : styles.active}
                    onClick={() => switchTab("archives")}>
                    Архивы
                </li>
                <li
                    className={current !== "settings" ? styles.link : styles.active}
                    onClick={() => switchTab("settings")}>
                    Настройки
                </li>
                <li className={current !== "help" ? styles.link : styles.active} onClick={() => switchTab("help")}>
                    Помощь
                </li>
                <li className={styles.link} onClick={() => dispatch(openModal())}>
                    Сделать заказ
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
