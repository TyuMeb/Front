"use client";

import styles from "./header.module.scss";
import Link from "next/link";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <Link href={"/"} className="h3">
                    ВайВи
                </Link>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li>
                            <Link href={"page1"} className={styles.link}>
                                О проекте
                            </Link>
                        </li>
                        <li>
                            <Link href={"page2"} className={styles.link}>
                                Как это работает
                            </Link>
                        </li>
                        <li>
                            <Link href={"page3"} className={styles.link}>
                                Исполнителям
                            </Link>
                        </li>
                        <li>
                            <Link href={"page3"} className={styles.link}>
                                Примеры работ
                            </Link>
                        </li>
                        <li>
                            <Link href={"page3"} className={styles.link}>
                                Преимущества
                            </Link>
                        </li>
                    </ul>
                    <Link href={"page3"} className={styles.link}>
                        Войти
                    </Link>
                </nav>
            </div>
        </header>
    );
};
