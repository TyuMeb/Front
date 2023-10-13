"use client";

import React, { HTMLAttributes } from "react";
import styles from "./header.module.scss";

interface HeaderI extends HTMLAttributes<HTMLDivElement> {}

const Header = ({ className }: HeaderI) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.headeraccount}>
                        <div className={styles.logo}>
                            <a className={styles.logolink} href="">
                                ВайВи
                            </a>
                        </div>
                        <nav className={styles.nav}>
                            <ul className={styles.menu}>
                                <li className={styles.menuitem}>
                                    <a className={styles.menulink} href="">
                                        Мои заказы
                                    </a>
                                </li>
                                <span></span>
                                <li className={styles.menuitem}>
                                    <a className={styles.menulink} href="">
                                        Полка настенная
                                    </a>
                                </li>
                                <span></span>
                                <li className={styles.menuitem}>
                                    <a className={styles.menulink} href="">
                                        чат с исполнителем 1
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className={styles.avatar}></div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
