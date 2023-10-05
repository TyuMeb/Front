"use client";

import classNames from "classnames/bind";
import React from "react";
import { ExitButton } from "@src/components/shared/ui/button/exit-button";
import Link from "next/link";
import Icon from "@src/components/icon";
import { usePathname } from "next/navigation";

import styles from "./nav.module.scss";

const cx = classNames.bind(styles);

const PAGE_LINK = "/account/";

const navigation = [
    { route: "my-orders", name: "Мои заказы", icon: <Icon className={cx("icon")} glyph="couch" />, id: 1 },
    { route: "chats", name: "Чаты", icon: <Icon className={cx("icon")} glyph="chats" />, id: 2 },
    { route: "archives", name: "Архивы", icon: <Icon className={cx("icon")} glyph="archives" />, id: 3 },
    { route: "settings", name: "Настройки", icon: <Icon className={cx("icon")} glyph="settings" />, id: 4 },
    { route: "help", name: "Помощь", icon: <Icon className={cx("icon")} glyph="help" />, id: 5 },
    { route: "help", name: "Сделать заказ", icon: <Icon className={cx("icon")} glyph="add" />, id: 6 },
];

const Nav = () => {
    const pathname = usePathname();

    const renderNavigation = (): JSX.Element[] =>
        navigation.map((nav) => {
            const currentPathname = PAGE_LINK + nav.route;

            return (
                <li key={nav.id} className={cx("navItem", { active: pathname === currentPathname })}>
                    <Link className={cx("link")} href={currentPathname}>
                        {nav.icon}
                        {nav.name}
                    </Link>
                </li>
            );
        });

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>{renderNavigation()}</ul>
            <div className={styles.exitbutton}>
                <ExitButton onClick={() => {}}>Выйти</ExitButton>
            </div>
        </nav>
    );
};

export default Nav;
