"use client";

import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
    const currentRoute = usePathname();

    const activeLink = (pathname: string): string => {
        if (currentRoute === pathname) {
            return `${styles.link} ${styles.active}`;
        } else {
            return styles.link;
        }
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li>
                        <Link href={"/"} className={activeLink("/")}>
                            ВайВи
                        </Link>
                    </li>
                    <li>
                        <Link href={"page1"} className={activeLink("/")}>
                            О проекте
                        </Link>
                    </li>
                    <li>
                        <Link href={"page2"} className={activeLink("/")}>
                            Как это работает
                        </Link>
                    </li>
                    <li>
                        <Link href={"page3"} className={activeLink("/")}>
                            Исполнителям
                        </Link>
                    </li>
                    <li>
                        <Link href={"page3"} className={activeLink("/")}>
                            Примеры работ
                        </Link>
                    </li>
                    <li>
                        <Link href={"page3"} className={activeLink("/")}>
                            Преимущества
                        </Link>
                    </li>
                </ul>
                <Link href={"page3"} className={activeLink("/page3")}>
                    Войти
                </Link>
            </nav>
        </header>
    );
};
