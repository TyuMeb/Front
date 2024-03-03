"use client";

import React, { HTMLAttributes } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@src/shared/ui/button";
import { Icon } from "@src/components/icon";
import { orders, performers } from "@src/shared/data/customer-account";

import styles from "./sidebar.module.scss";

const cx = classNames.bind(styles);

const PAGE_LINK = "/executor/";

type SidebarProps = {} & HTMLAttributes<HTMLDivElement>;

type firstLevelMenuItemProps = {
  alias: string;
  name: string;
  icon?: JSX.Element;
  isOpened?: boolean;
};

const firstLevelMenu: firstLevelMenuItemProps[] = [
  { alias: "orders", name: "Заказы клиентов", icon: <Icon className={cx("icon")} glyph="chair" /> },
  { alias: "proposals", name: "Мои предложения", icon: <Icon className={cx("icon")} glyph="couch" /> },
  { alias: "chats", name: "Чаты", icon: <Icon className={cx("icon")} glyph="chats" /> },
  { alias: "archives", name: "Архивы", icon: <Icon className={cx("icon")} glyph="archives" /> },
  { alias: "settings", name: "Настройки", icon: <Icon className={cx("icon")} glyph="settings" /> },
  { alias: "order", name: "Помощь", icon: <Icon className={cx("icon")} glyph="add" /> },
];

export const Sidebar = ({ className }: SidebarProps) => {
  const pathname = usePathname();

  const onHandlerClick = () => {
    // TODO отправлять на сервер запрос на выход
    console.log("Выход");
  };

  const buildFirstLevel = (): JSX.Element => {
    return (
      <ul className={cx("firstLevelMenu")}>
        {firstLevelMenu.map((menu, i) => {
          let currentPathname = PAGE_LINK + menu.alias;
          let activatedMenu = { activatedMenu: pathname === currentPathname };

          if (i === firstLevelMenu.length - 1) {
            currentPathname = "/";
            activatedMenu = { activatedMenu: false };
          }

          return (
            <li key={menu.alias}>
              <Link className={cx("firstLevelLink", activatedMenu)} href={currentPathname}>
                {menu.icon}
                <p className={cx("text-small-semibold")}>
                  {menu.name}
                  &nbsp;
                  {orders.length && i === 0 && `(${orders.length})`}
                </p>
              </Link>
              {i === 1 && buildSecondLevel(currentPathname)}
            </li>
          );
        })}
      </ul>
    );
  };

  const buildSecondLevel = (route: string): JSX.Element | undefined => {
    return (
      orders && (
        <ul className={cx("secondLevelMenu")}>
          {orders.map((order) => {
            const currentPathname = `${route}/order-${order.id}`;

            return (
              <li key={order.id}>
                <Link
                  className={cx("secondLevelLink", { openedSubmenu: pathname === currentPathname })}
                  href={currentPathname}
                >
                  <p className={cx("text-small-semibold")}>
                    {order.name}
                    &nbsp;
                    {order.countPerformers && `(${order.countPerformers})`}
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
      performers && (
        <ul className={cx("thirdLevelMenu")}>
          {performers.map((executor, i) => {
            const currentPathname = `${route}/executor-${executor.id}`;

            return (
              <li key={executor.id} className={cx("thirdLevelItem")}>
                <Link
                  href={currentPathname}
                  className={cx("thirdLevelLink", {
                    activatedSubmenu: pathname === currentPathname,
                  })}
                >
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
