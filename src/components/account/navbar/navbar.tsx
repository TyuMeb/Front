"use client";

import React from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ExitButton } from "@src/components/shared/ui/button/exit-button";
import Icon from "@src/components/icon";
import { orders, ordersI, executorsI } from "./data";

import styles from "./navbar.module.scss";

const cx = classNames.bind(styles);

const PAGE_LINK = "/account/";

interface firstLevelMenuItemI {
    alias: string;
    name: string;
    numberPerformers?: number;
    icon?: React.JSX.Element;
    isOpened?: boolean;
    pages?: firstLevelMenuItemI[];
}

const firstLevelMenu: firstLevelMenuItemI[] = [
    { alias: "my-orders", name: "Мои заказы", icon: <Icon className={cx("icon")} glyph="couch" /> },
    { alias: "chats", name: "Чаты", icon: <Icon className={cx("icon")} glyph="chats" /> },
    { alias: "archives", name: "Архивы", icon: <Icon className={cx("icon")} glyph="archives" /> },
    { alias: "settings", name: "Настройки", icon: <Icon className={cx("icon")} glyph="settings" /> },
    { alias: "help", name: "Помощь", icon: <Icon className={cx("icon")} glyph="help" /> },
    { alias: "help", name: "Сделать заказ", icon: <Icon className={cx("icon")} glyph="add" /> },
];

const Navbar = () => {
    const pathname = usePathname();

    const buildFirstLevel = (): JSX.Element => {
        return (
            <ul className={cx("firstLevelMenu")}>
                {firstLevelMenu.map((menu, i) => {
                    const currentPathname = PAGE_LINK + menu.alias;

                    return (
                        <li key={menu.alias}>
                            <Link
                                className={cx("firstLevelLink", { activatedMenu: pathname === currentPathname })}
                                href={currentPathname}>
                                {menu.icon}
                                <p className={cx("text")}>
                                    {menu.name}
                                    &nbsp;
                                    {orders.length && i === 0 && `(${orders.length})`}
                                </p>
                            </Link>
                            {i === 0 && buildSecondLevel(orders, currentPathname)}
                        </li>
                    );
                })}
            </ul>
        );
    };

    const buildSecondLevel = (orders: ordersI[], route: string): JSX.Element | undefined => {
        return (
            orders && (
                <ul className={cx("secondLevelMenu")}>
                    {orders.map((order) => {
                        const currentPathname = route + "/" + order.alias;

                        return (
                            <li key={order.alias}>
                                <Link
                                    className={cx("secondLevelLink", { openedSubmenu: pathname === currentPathname })}
                                    href={currentPathname}>
                                    <p className={cx("text")}>
                                        {order.name}
                                        &nbsp;
                                        {order.executors.length && `(${order.executors.length})`}
                                    </p>
                                </Link>
                                {buildThirdLevel(order.executors, currentPathname)}
                            </li>
                        );
                    })}
                </ul>
            )
        );
    };

    const buildThirdLevel = (executors: executorsI[], route: string): JSX.Element | undefined => {
        return (
            executors && (
                <ul className={cx("thirdLevelMenu")}>
                    {executors.map((executor) => {
                        const currentPathname = route + "/" + executor.alias;

                        return (
                            <li key={executor.alias} className={cx("thirdLevelItem")}>
                                <Link
                                    href={currentPathname}
                                    className={cx("thirdLevelLink", {
                                        activatedSubmenu: pathname === currentPathname,
                                    })}>
                                    <p className={cx("thirdLevelText")}>{executor.name}</p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )
        );
    };

    return (
        <aside className={cx("menu")}>
            <nav className={cx("navigation")}>
                {buildFirstLevel()}

                <div className={styles.exitbutton}>
                    <ExitButton onClick={() => {}}>Выйти</ExitButton>
                </div>
            </nav>
        </aside>
    );
};

export default Navbar;
