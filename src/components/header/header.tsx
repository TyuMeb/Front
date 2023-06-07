"use client";

import styles from "./header.module.css";
import { MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "@src/redux/hooks";
import { closeModal, openModal } from "@src/redux/modal-slice";

const Header = () => {
    const dispatch = useAppDispatch();
    const { modal } = useAppSelector((store) => store.modal);

    const activeLink = (event: MouseEvent<HTMLUListElement>) => {
        if (modal) {
            dispatch(closeModal());
        } else {
            dispatch(openModal());
        }
        const target = event.target as Element;
        if (target.tagName === "LI") {
            console.log(target);
        }
        console.log(modal);
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
                    <li className={styles.link}>Войти</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
