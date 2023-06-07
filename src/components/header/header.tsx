"use client";

import styles from "./header.module.css";
import { MouseEvent } from "react";
import { useAppDispatch } from "@src/redux/hooks";
import { openModal } from "@src/redux/modal-slice";

const Header = () => {
    const dispatch = useAppDispatch();

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
