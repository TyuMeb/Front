"use client";

import React, { HTMLAttributes } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { OrdersProps, PerformersProps } from "@src/shared/data/account";
import { Button } from "@src/shared/ui/button";

import styles from "./sidebar.module.scss";
import { Icon, IconGlyphProps } from "@src/components/icon";

const cx = classNames.bind(styles);

export type firstLevelMenuItemProps = {
    alias: string;
    name: string;
    iconGlyph?: IconGlyphProps;
};

type MenuProps<T> = {
    menuItems: T;
    alias: string;
};

type SidebarProps = {
    firstLevelMenu: MenuProps<firstLevelMenuItemProps[]>;
    secondLevelMenu: MenuProps<OrdersProps[]>;
    thirdLevelMenu: MenuProps<PerformersProps[]>;
} & HTMLAttributes<HTMLDivElement>;

export const Sidebar = ({ firstLevelMenu, secondLevelMenu, thirdLevelMenu, className }: SidebarProps) => {
    const pathname = usePathname();

    const onHandlerClick = () => {
        // TODO отправлять на сервер запрос на выход
        console.log("Выход");
    };

    const buildFirstLevel = (): JSX.Element => {
        return (
            <ul className={cx("firstLevelMenu")}>
                {firstLevelMenu.menuItems.map((menu, i) => {
                    let currentPathname = `/${firstLevelMenu.alias}/${menu.alias}`;
                    let activatedMenu = { activatedMenu: pathname === currentPathname };

                    if (i === firstLevelMenu.menuItems.length - 1) {
                        currentPathname = "/";
                        activatedMenu = { activatedMenu: false };
                    }

                    return (
                        <li key={menu.alias}>
                            <Link className={cx("firstLevelLink", activatedMenu)} href={currentPathname}>
                                {menu.iconGlyph && <Icon className={cx("icon")} glyph={menu.iconGlyph} />}
                                <p className={cx("text-small-semibold")}>
                                    {menu.name}
                                    &nbsp;
                                    {secondLevelMenu.menuItems.length &&
                                        i === 0 &&
                                        `(${secondLevelMenu.menuItems.length})`}
                                </p>
                            </Link>
                            {i === 0 && buildSecondLevel(currentPathname)}
                        </li>
                    );
                })}
            </ul>
        );
    };

    const buildSecondLevel = (route: string): JSX.Element | undefined => {
        return (
            secondLevelMenu.menuItems && (
                <ul className={cx("secondLevelMenu")}>
                    {secondLevelMenu.menuItems.map((menu) => {
                        const currentPathname = `${route}/${secondLevelMenu.alias}-${menu.id}`;

                        return (
                            <li key={menu.id}>
                                <Link
                                    className={cx("secondLevelLink", { openedSubmenu: pathname === currentPathname })}
                                    href={currentPathname}>
                                    <p className={cx("text-small-semibold")}>
                                        {menu.name}
                                        &nbsp;
                                        {menu.countPerformers && `(${menu.countPerformers})`}
                                    </p>
                                </Link>
                                {buildThirdLevel(currentPathname)}
                            </li>
                        );
                    })}
                </ul>
            )
        );
    };

    const buildThirdLevel = (route: string): JSX.Element | undefined => {
        return (
            thirdLevelMenu.menuItems && (
                <ul className={cx("thirdLevelMenu")}>
                    {thirdLevelMenu.menuItems.map((menu, i) => {
                        const currentPathname = `${route}/${thirdLevelMenu.alias}-${menu.id}`;

                        return (
                            <li key={menu.id} className={cx("thirdLevelItem")}>
                                <Link
                                    href={currentPathname}
                                    className={cx("thirdLevelLink", {
                                        activatedSubmenu: pathname === currentPathname,
                                    })}>
                                    <p className="text-small">Исполнитель {i + 1}</p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )
        );
    };

    return (
        <aside className={cx("menu", className)}>
            <nav className={cx("navigation")}>
                {buildFirstLevel()}

                <Link href="/">
                    <Button icon={<Icon glyph="exit" />} variant="exit" onClick={onHandlerClick}>
                        <p className="text-small-semibold">Выйти</p>
                    </Button>
                </Link>
            </nav>
        </aside>
    );
};
