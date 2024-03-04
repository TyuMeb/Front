"use client";

import React, { HTMLAttributes, useState, useEffect } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import { Button } from "@src/shared/ui/button";
import { Icon } from "@src/components/icon";
import styles from "./sidebar.module.scss";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@src/redux/hooks";
import { setUser } from "@src/redux/slices/users-slice";
import { removeCookie } from "typescript-cookie";
import { useClientActiveOrdersQuery } from "@src/redux/api/order-api-slice";
import { useExecutorOffersQuery } from "@src/redux/api/offer-api-slice";
import { useGetChatsQuery } from "@src/redux/api/chat-api-slice";
import { CustomerMenu } from "./main-menu/customer-menu";
import { ExecutorMenu } from "./main-menu/executor-menu";
import { useUser } from "@src/redux/slices/users-slice";
import { CUSTOMER_MENU_ITEMS } from "@src/shared/data/customer-menu-items";
import { EXECUTOR_MENU_ITEMS } from "@src/shared/data/executor-menu-items";
import { UserAccount } from "@src/redux/api/generated";
import { parseOrdersToOrderItems, parseOffersToOfferItems } from "@src/helpers/parseToMenuItems";

const cx = classNames.bind(styles);

type SidebarProps = {} & HTMLAttributes<HTMLDivElement>;

export type TMenuItem = {
  id: number;
  alias: string;
  name?: string;
  contractor?: number | string;
  icon?: JSX.Element;
  collapsible?: TMenuItem[];
  unread?: boolean;
};

export type TMenuProps = {
  menuItems: TMenuItem[];
  route?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user: UserAccount | null = useUser();
  const [menuItems, setMenuItems] = useState<TMenuItem[] | null>(null);
  const [role, setRole] = useState<"client" | "contractor" | null>(null);

  const { data: chats = [], isSuccess: isChatsDataLoadingSuccess } = useGetChatsQuery();

  const { data: orders = [], isSuccess: isOrdersDataLoadingSuccess } = useClientActiveOrdersQuery(undefined, {
    skip: role === "client" ? false : true,
  });

  const { data: offers = [], isSuccess: isOfferssDataLoadingSuccess } = useExecutorOffersQuery(undefined, {
    skip: role === "contractor" ? false : true,
  });

  useEffect(() => {
    if (user) {
      if (user?.role === "client") setRole("client");
      else if (user?.role === "contractor") setRole("contractor");
      else setRole(null);
    }
  }, [user]);

  useEffect(() => {
    if (
      (isOrdersDataLoadingSuccess || isOfferssDataLoadingSuccess) &&
      isChatsDataLoadingSuccess &&
      role &&
      !menuItems
    ) {
      const unreadMessagesPresent = chats.some((chat) => chat.unread_messages);

      role === "client"
        ? setMenuItems(
            CUSTOMER_MENU_ITEMS.map((item, i) =>
              i === 0
                ? {
                    ...item,
                    collapsible: parseOrdersToOrderItems(orders, chats, unreadMessagesPresent),
                    unread: unreadMessagesPresent,
                  }
                : item
            )
          )
        : setMenuItems(
            EXECUTOR_MENU_ITEMS.map((item, i) =>
              i === 1
                ? {
                    ...item,
                    collapsible: parseOffersToOfferItems(offers, chats),
                    unread: unreadMessagesPresent,
                  }
                : item
            )
          );
    }
  }, [isOfferssDataLoadingSuccess, isOrdersDataLoadingSuccess, isChatsDataLoadingSuccess, role]);

  const onHandlerClick = () => {
    router.push("/");
    removeCookie("access_token");
    removeCookie("refresh_token");
    dispatch(setUser(null));
  };

  return (
    <aside className={cx("menu", className)}>
      <nav className={cx("navigation")}>
        {user && menuItems ? (
          user?.role === "client" ? (
            <CustomerMenu menuItems={menuItems} />
          ) : (
            <ExecutorMenu menuItems={menuItems} />
          )
        ) : (
          <></>
        )}
        <Link href="/">
          <Button icon={<Icon glyph="exit" />} variant="exit" onClick={onHandlerClick}>
            <p className="text-small-semibold">Выйти</p>
          </Button>
        </Link>
      </nav>
    </aside>
  );
};
