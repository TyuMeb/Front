"use client";

import styles from "./header.module.scss";
import { useAppDispatch } from "@src/redux/hooks";
import { openModal } from "@src/redux/modal-slice";
import { useState } from "react";

const Header = () => {
    const dispatch = useAppDispatch();
    const [current, setCurrent] = useState<string | null>(null);
    /*     const scrollToBlock = (y: number) => {
            window.scrollTo({
                top: y,
                behavior: "smooth",
            });
        }; */

    /*     const activeLink = (event: MouseEvent<HTMLUListElement>) => {
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
        }; */

    const switchTab = (tab: string) => {
        setCurrent(tab);
        const element: HTMLElement | null = document.getElementById(tab);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.list} /* onClick={activeLink} */>
                    <li className={styles.logo}>ВайВи</li>
                    <li
                        /* className={styles.link}  */ className={current !== "about" ? styles.link : styles.active}
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
