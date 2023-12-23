"use client";

import React, { HTMLAttributes } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@src/shared/ui/button";

import styles from "./sidebar.module.scss";
import { Icon, IconGlyphProps } from "@src/components/icon";

const cx = classNames.bind(styles);

export type FirstLevelMenuItemProps = {
    alias: string;
    name: string;
    iconGlyph?: IconGlyphProps;
    secondLevelMenu?: SecondLevelMenuItemProps;
};

export type SecondLevelMenuItemProps = {
    menuItems: {
        id: number;
        name: string;
        count?: number;
    }[];
    alias: string;
    type?: "expanded" | "selected";
    thirdLevelMenu?: ThirdLevelMenuItemProps;
};

export type ThirdLevelMenuItemProps = {
    menuItems: {
        id: number;
        name: string;
        count?: number;
    }[];
    alias: string;
    type?: "expanded" | "selected";
};

type SidebarProps = {
    menuItems: FirstLevelMenuItemProps[];
    alias: string;
} & HTMLAttributes<HTMLDivElement>;

export const Sidebar = ({ menuItems, alias, className }: SidebarProps) => {
    const pathname = usePathname();

    const onHandlerClick = () => {
        // TODO отправлять на сервер запрос на выход
        console.log("Выход");
    };

    const buildFMenu = (): JSX.Element => {
        return (
            <ul className={cx("firstLevelMenu")}>
                {menuItems.map((menu, i) => {
                    let currentPathname = `/${alias}/${menu.alias}`;
                    let activatedMenu = { activatedMenu: pathname === currentPathname };

                    if (i === menuItems.length - 1) {
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
                                    {menu.secondLevelMenu && i === 0 && `(${menu.secondLevelMenu.menuItems.length})`}
                                </p>
                            </Link>
                            {menu.secondLevelMenu &&
                                buildNestedMenu(
                                    menu.secondLevelMenu,
                                    currentPathname,
                                    menu.secondLevelMenu.thirdLevelMenu
                                )}
                        </li>
                    );
                })}
            </ul>
        );
    };

    const buildNestedMenu = (
        menuItems: SecondLevelMenuItemProps,
        route: string,
        nestedMenu?: ThirdLevelMenuItemProps
    ) => {
        return (
            <ul
                className={cx(
                    { expandedMenu: menuItems.type === "expanded" },
                    { selectedMenu: menuItems.type === "selected" }
                )}>
                {menuItems.menuItems.map((menu) => {
                    const currentPathname = `${route}/${menuItems.alias}-${menu.id}`;

                    return menuItems.type === "expanded" ? (
                        <li key={menu.id}>
                            <Link
                                href={currentPathname}
                                className={cx("secondLevelLink", { openedSubmenu: pathname === currentPathname })}>
                                <p className={cx("text-small-semibold")}>
                                    {menu.name}
                                    {menu.count && ` (${menu.count})`}
                                </p>
                            </Link>
                            {nestedMenu && buildNestedMenu(nestedMenu, currentPathname)}
                        </li>
                    ) : (
                        <li key={menu.id} className={cx("thirdLevelItem")}>
                            <Link
                                href={currentPathname}
                                className={cx("thirdLevelLink", {
                                    activatedSubmenu: pathname === currentPathname,
                                })}>
                                <p className="text-small">
                                    {menu.name}
                                    {menu.count && ` (${menu.count})`}
                                </p>
                            </Link>
                            {nestedMenu && buildNestedMenu(nestedMenu, currentPathname)}
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <aside className={cx("menu", className)}>
            <nav className={cx("navigation")}>
                {buildFMenu()}

                <Link href="/">
                    <Button icon={<Icon glyph="exit" />} variant="exit" onClick={onHandlerClick}>
                        <p className="text-small-semibold">Выйти</p>
                    </Button>
                </Link>
            </nav>
        </aside>
    );
};
