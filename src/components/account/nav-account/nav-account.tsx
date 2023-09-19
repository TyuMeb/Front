"use client";

import { useState } from "react";
import styles from "./nav-account.module.scss";
// import { useEffect, useState } from "react";
// import { useAppSelector } from "@src/redux/hooks";
import { ExitButton } from "@src/components/shared/ui/button/exit-button";
import { CouchIcon } from "@src/components/shared/ui/icons/couch-icon/couch-icon";
import { ChatsIcon } from "@src/components/shared/ui/icons/chats-icon/chats-icon";
import { ClockIcon } from "@src/components/shared/ui/icons/clock-icon/clock-icon";
import { GearIcon } from "@src/components/shared/ui/icons/gear-icon/gear-icon";
import { HelpIcon } from "@src/components/shared/ui/icons/help-icon/help-icon";
import { PlusIcon } from "@src/components/shared/ui/icons/plus-icon/plus-icon";

const NavAccount = () => {
    const [isMessage, setIsMessage] = useState(true);
    const [current, setCurrent] = useState<string | undefined>(undefined);

    const switchTab = (tab: string) => {
        setCurrent(tab);
    };

    return (
        <div className={styles.container}>
            <div className={styles.navaccount}>
                <nav className={styles.nav}>
                    <ul className={styles.menu}>
                        <li
                            className={current === "couch" ? styles.active : styles.menuitem}
                            onClick={() => switchTab("couch")}>
                            <div className={styles.menuicon}>
                                <CouchIcon />
                            </div>
                            Мои заказы (1)
                        </li>
                        <ul className={styles.menuOrders}>
                            <li className={styles.shelforder}>
                                <span></span>
                                <a className={styles.orderlink} href="">
                                    Полка настенная (1)
                                </a>
                            </li>
                            <ul className={styles.producer}>
                                <li className={styles.order}>
                                    <a className={styles.master} href="">
                                        Исполнитель 1
                                    </a>
                                </li>
                                <li className={styles.order}>
                                    <a className={styles.master} href="">
                                        Исполнитель 2
                                    </a>
                                    {isMessage && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="8"
                                            height="9"
                                            viewBox="0 0 8 9"
                                            fill="none">
                                            <circle cx="4" cy="4.5" r="4" fill="#719D88" />
                                        </svg>
                                    )}
                                </li>
                            </ul>
                            <li className={styles.order}>
                                <span></span>
                                <a className={styles.orderlink} href="">
                                    Комод
                                </a>
                            </li>
                        </ul>
                        <li
                            className={current === "chats" ? styles.active : styles.menuitem}
                            onClick={() => switchTab("chats")}>
                            <div className={styles.menuicon}>
                                <ChatsIcon />
                            </div>
                            Чаты
                        </li>
                        <li
                            className={current === "clock" ? styles.active : styles.menuitem}
                            onClick={() => switchTab("clock")}>
                            <div className={styles.menuicon}>
                                <ClockIcon />
                            </div>
                            Архивы
                        </li>
                        <li
                            className={current === "gear" ? styles.active : styles.menuitem}
                            onClick={() => switchTab("gear")}>
                            <div className={styles.menuicon}>
                                <GearIcon />
                            </div>
                            Настройки
                        </li>
                        <li
                            className={current === "help" ? styles.active : styles.menuitem}
                            onClick={() => switchTab("help")}>
                            <div className={styles.menuicon}>
                                <HelpIcon />
                            </div>
                            Помощь
                        </li>
                        <li
                            className={current === "plus" ? styles.active : styles.menuitem}
                            onClick={() => switchTab("plus")}>
                            <div className={styles.menuicon}>
                                <PlusIcon />
                            </div>
                            Сделать заказ
                        </li>
                    </ul>
                </nav>
                <ExitButton onClick={() => {}}>Выйти</ExitButton>
            </div>
        </div>
    );
};

export default NavAccount;
