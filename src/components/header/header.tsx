"use client";

import styles from "./header.module.scss";
import { MouseEvent, useEffect, useState } from "react";
import { useAppDispatch } from "@src/redux/hooks";
import { openModal } from "@src/redux/modal-slice";

const Header = () => {
    const dispatch = useAppDispatch();
    const [isIntersecting, setIsIntersecting] = useState(false);

    const scrollToBlock = (y: number) => {
        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    const activeLink = (event: MouseEvent<HTMLUListElement>) => {
        const list = event.currentTarget.childNodes as NodeListOf<Element>;
        list.forEach((element) => element.classList.remove(styles.active));
        const target = event.target as Element;
        if (target.tagName === "LI") {
            switch (target.textContent) {
                case "ВайВи": {
                    scrollToBlock(0);
                    target.classList.add(styles.active);
                    break;
                }
                case "О проекте": {
                    scrollToBlock(635);
                    target.classList.add(styles.active);
                    break;
                }
                case "Как это работает": {
                    scrollToBlock(1125);
                    target.classList.add(styles.active);
                    break;
                }
                case "Исполнителям": {
                    scrollToBlock(2095);
                    target.classList.add(styles.active);
                    break;
                }
                case "Примеры работ": {
                    scrollToBlock(2545);
                    target.classList.add(styles.active);
                    break;
                }
                case "Преимущества": {
                    scrollToBlock(3355);
                    target.classList.add(styles.active);
                    break;
                }
            }
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
