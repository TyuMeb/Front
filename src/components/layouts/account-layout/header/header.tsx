"use client";

import React, { HTMLAttributes } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import avatar from "@public/account/photo.png";

interface HeaderI extends HTMLAttributes<HTMLDivElement> {}

const Header = ({ className, ...props }: HeaderI) => {
    return (
        <header className={className} {...props}>
            <div className={styles.wrapper}>
                <div className={styles.headeraccount}>
                    <div className={styles.logo}>
                        <Link className={styles.logolink} href="/">
                            ВайВи
                        </Link>
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
                    <Image width={32} height={32} priority={true} src={avatar} alt="Фото"></Image>
                </div>
            </div>
        </header>
    );
};

export default Header;
