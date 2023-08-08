"use client";

import styles from "./header.module.scss";
import { useAppDispatch, useAppSelector } from "@src/redux/hooks";
import { openModal } from "@src/redux/modal-slice";
import { useEffect, useState } from "react";

const Header = () => {
    const dispatch = useAppDispatch();
    const [current, setCurrent] = useState<string | undefined>(undefined);
    const { contentBlock } = useAppSelector((store) => store.header);

    useEffect(() => {
        setCurrent(contentBlock);
    }, [contentBlock]);

    const switchTab = (tab: string) => {
        setCurrent(tab);
        const element: HTMLElement | null = document.getElementById(tab);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
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
