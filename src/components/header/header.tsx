"use client";

import styles from "./header.module.scss";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@src/redux/hooks";
import { openModal } from "@src/redux/modal-slice";

const Header = () => {
    const dispatch = useAppDispatch();
    const [isIntersecting, setIsIntersecting] = useState(false);
    const myRef = useRef();

    const activeLink = (event: MouseEvent<HTMLUListElement>) => {
        const target = event.target as Element;
        if (target.tagName === "LI") {
            console.log(target);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            console.log(entry);
            setIsIntersecting(entry.isIntersecting);
        });
    }, [isIntersecting]);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.list} onClick={activeLink}>
                    <li className={styles.logo}>
                        <a href="#banner">ВайВи</a>
                    </li>
                    <li className={styles.link}>
                        <a href="#about">О проекте</a>
                    </li>
                    <li className={styles.link}>
                        <a href="#how-woks">Как это работает</a>
                    </li>
                    <li className={styles.link}>
                        <a href="#form">Исполнителям</a>
                    </li>
                    <li className={styles.link}>
                        <a href="#examples">Примеры работ</a>
                    </li>
                    <li className={styles.link}>
                        <a href="#advantages">Преимущества</a>
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
