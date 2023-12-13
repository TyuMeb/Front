import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import { Header } from "@src/components/layouts/account-layout/header";
import { Sidebar, firstLevelMenuItemProps } from "@src/components/layouts/sidebar";
import { Modals } from "@src/components/modals";
import { orders, performers } from "@src/shared/data/account";

import styles from "./account-layout.module.scss";

const cx = classNames.bind(styles);

const firstLevelMenu: firstLevelMenuItemProps[] = [
    { alias: "my-orders", name: "Мои заказы", iconGlyph: "couch" },
    { alias: "chats", name: "Чаты", iconGlyph: "chats" },
    { alias: "archives", name: "Архивы", iconGlyph: "archives" },
    { alias: "settings", name: "Настройки", iconGlyph: "settings" },
    { alias: "help", name: "Помощь", iconGlyph: "help" },
    { alias: "help1", name: "Сделать заказ", iconGlyph: "add" },
];

export const AccountLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={cx("wrapper")}>
            <Header className={cx("header")} />
            <div className={cx("content")}>
                <Sidebar
                    firstLevelMenu={{ menuItems: firstLevelMenu, alias: "account" }}
                    secondLevelMenu={{ menuItems: orders, alias: "order" }}
                    thirdLevelMenu={{ menuItems: performers, alias: "executor" }}
                    className={cx("sidebar")}
                />
                <main className={cx("main")}>{children}</main>
                <Modals />
            </div>
        </div>
    );
};
