"use client";

import React, { HTMLAttributes } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@src/shared/ui/button";
import { Icon } from "@src/components/icon";
import styles from "./sidebar.module.scss";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@src/redux/hooks";
import { setUser } from "@src/redux/slices/users-slice";
import { removeCookie } from "typescript-cookie";
import { useClientActiveOrdersQuery } from "@src/redux/api/order-api-slice";
import { FirstLevelMenu } from "./first-level-menu/first-level-menu";

const cx = classNames.bind(styles);

const PAGE_LINK = "/account";

type SidebarProps = {} & HTMLAttributes<HTMLDivElement>;

export type TMenuItem = {
  id: number;
  alias: string;
  name: string;
  icon?: JSX.Element;
  collapsible?: TMenuItem[];
};

export type TMenuProps = {
  menuItems: TMenuItem[];
  route: string;
};

const orderItems: TMenuItem[] = [
  {
    id: 1,
    alias: "/2",
    name: "Заказ 2",
    collapsible: [
      { id: 1, alias: "/1", name: "Чат 1" },
      { id: 3, alias: "/2", name: "Чат 2" },
      { id: 3, alias: "/3", name: "Чат 3" },
    ],
  },
  {
    id: 2,
    alias: "/3",
    name: "Заказ 3",
    collapsible: [
      { id: 1, alias: "/1", name: "Чат 1" },
      { id: 3, alias: "/2", name: "Чат 2" },
      { id: 3, alias: "/3", name: "Чат 3" },
    ],
  },
  {
    id: 3,
    alias: "/5",
    name: "Заказ 5",
    collapsible: [
      { id: 1, alias: "/1", name: "Чат 1" },
      { id: 3, alias: "/2", name: "Чат 2" },
      { id: 3, alias: "/3", name: "Чат 3" },
    ],
  },
];

const firstLevelMenuItems: TMenuItem[] = [
  {
    id: 1,
    alias: "/my-orders",
    name: "Мои заказы",
    icon: <Icon className={cx("icon")} glyph="couch" />,
    collapsible: orderItems,
  },
  { id: 2, alias: "/chats", name: "Чаты", icon: <Icon className={cx("icon")} glyph="chats" /> },
  { id: 3, alias: "/archives", name: "Архивы", icon: <Icon className={cx("icon")} glyph="archives" /> },
  { id: 4, alias: "/settings", name: "Настройки", icon: <Icon className={cx("icon")} glyph="settings" /> },
  { id: 5, alias: "/help", name: "Помощь", icon: <Icon className={cx("icon")} glyph="help" /> },
  { id: 6, alias: "/help1", name: "Сделать заказ", icon: <Icon className={cx("icon")} glyph="add" /> },
];

export const Sidebar = ({ className }: SidebarProps) => {
  const { data: orders = [] } = useClientActiveOrdersQuery();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const onHandlerClick = () => {
    router.push("/");
    removeCookie("access_token");
    removeCookie("refresh_token");
    dispatch(setUser(null));
  };

  // const buildFirstLevel = (): JSX.Element => {
  //   return (
  //     <ul className={cx("firstLevelMenu")}>
  //       {firstLevelMenu.map((menu, i) => {
  //         let currentPathname = PAGE_LINK + menu.alias;
  //         let activatedMenu = { activatedMenu: pathname === currentPathname };

  //         if (i === firstLevelMenu.length - 1) {
  //           currentPathname = "/";
  //           activatedMenu = { activatedMenu: false };
  //         }

  //         return (
  //           <li key={menu.alias}>
  //             <Link className={cx("firstLevelLink", activatedMenu)} href={currentPathname}>
  //               {menu.icon}
  //               <p className={cx("text-small-semibold")}>
  //                 {menu.name}
  //                 &nbsp;
  //                 {orders.length && i === 0 && `(${orders.length})`}
  //               </p>
  //             </Link>
  //             {orders.length && i === 0 && buildSecondLevel(currentPathname)}
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
  // };

  // const buildSecondLevel = (route: string): JSX.Element | undefined => {
  //   return (
  //     orders && (
  //       <ul className={cx("secondLevelMenu")}>
  //         {orders.map((order) => {
  //           const currentPathname = `${route}/order-${order.id}`;

  //           return (
  //             <li key={order.id}>
  //               <Link
  //                 className={cx("secondLevelLink", { openedSubmenu: pathname === currentPathname })}
  //                 href={currentPathname}
  //               >
  //                 <p className={cx("text-small-semibold")}>
  //                   {order.name}
  //                   &nbsp; ({order.contractor})
  //                 </p>
  //               </Link>
  //               {buildThirdLevel(currentPathname)}
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     )
  //   );
  // };

  // const buildThirdLevel = (route: string): JSX.Element | undefined => {
  //   return (
  //     orders && (
  //       <ul className={cx("thirdLevelMenu")}>
  //         {orders.map((executor, i) => {
  //           const currentPathname = `${route}/executor-${executor.id}`;
  //           console.log(currentPathname);

  //           return (
  //             <li key={executor.id} className={cx("thirdLevelItem")}>
  //               <Link
  //                 href={currentPathname}
  //                 className={cx("thirdLevelLink", {
  //                   activatedSubmenu: pathname === currentPathname,
  //                 })}
  //               >
  //                 <p className="text-small">Исполнитель {i + 1}</p>
  //               </Link>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     )
  //   );
  // };

  return (
    <aside className={cx("menu", className)}>
      <nav className={cx("navigation")}>
        <FirstLevelMenu menuItems={firstLevelMenuItems} route={PAGE_LINK} />
        <Link href="/">
          <Button icon={<Icon glyph="exit" />} variant="exit" onClick={onHandlerClick}>
            <p className="text-small-semibold">Выйти</p>
          </Button>
        </Link>
      </nav>
    </aside>
  );
};
