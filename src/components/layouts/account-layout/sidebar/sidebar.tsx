"use client";

import React, { HTMLAttributes } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@src/shared/ui/button";

import styles from "./sidebar.module.scss";
import { Icon, IconGlyphProps } from "@src/components/icon";

const cx = classNames.bind(styles);

export type FirstMenuItems = {
    alias: string;
    name: string;
    iconGlyph?: IconGlyphProps;
    secondLevelMenu?: SecondLevelMenu;
};

export type NestedMenuItems = {
    id: number;
    name: string;
    count?: number;
};

export type SecondLevelMenu = {
    menuItems: NestedMenuItems[];
    alias: string;
    type?: "expanded" | "selected";
    thirdLevelMenu?: ThirdLevelMenu;
};

export type ThirdLevelMenu = {
    menuItems: NestedMenuItems[];
    alias: string;
    type?: "expanded" | "selected";
};

type SidebarProps = {
    menuItems: FirstMenuItems[];
} & HTMLAttributes<HTMLDivElement>;

export const Sidebar = ({ menuItems, className }: SidebarProps) => {
    const pathname = usePathname();

    const onHandlerClick = () => {
        // TODO отправлять на сервер запрос на выход
        console.log("Выход");
    };

    const buildMenu = (): JSX.Element => {
        return (
            <ul className={cx("firstLevelMenu")}>
                {menuItems.map((menu, i) => {
                    const currentPathname = menu.alias;
                    const activatedMenu = { activatedMenu: pathname === currentPathname };

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

    const buildNestedMenu = (menuItems: SecondLevelMenu, route: string, nestedMenu?: ThirdLevelMenu) => {
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
                {buildMenu()}

                <Link href="/">
                    <Button icon={<Icon glyph="exit" />} variant="exit" onClick={onHandlerClick}>
                        <p className="text-small-semibold">Выйти</p>
                    </Button>
                </Link>
            </nav>
        </aside>
    );
};
