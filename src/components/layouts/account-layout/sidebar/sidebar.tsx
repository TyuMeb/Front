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
import { useGetChatsQuery } from "@src/redux/api/chat-api-slice";
import { FirstLevelMenu } from "./first-level-menu/first-level-menu";
import { useUser } from "@src/redux/slices/users-slice";
import { CUSTOMER_MENU_ITEMS } from "@src/shared/data/customer-menu-items";
import { CONTRACTOR_MENU_ITEMS } from "@src/shared/data/contractor-menu-items";
import { UserAccount } from "@src/redux/api/generated";
import { Chat } from "@src/redux/api/generated";

const cx = classNames.bind(styles);

const PAGE_LINK = "/account";

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

export type MenuProps = {
  menuItems: TMenuItem[];
  route: string;
};

// eslint-disable-next-line
const parseOrdersToOrderItems = (ordersArr: any, chatsArr: Chat[], unreadMessagesPresent: boolean): TMenuItem[] => {
  // eslint-disable-next-line
  return ordersArr.reduce((acc: TMenuItem[], order: any) => {
    return [
      ...acc,
      {
        id: order.id,
        alias: "",
        name: order.name,
        contractor: Number(order.contractor),
        collapsible: !order.offers
          ? undefined
          : // eslint-disable-next-line
            order.offers.reduce((accum: TMenuItem[], offer: any) => {
              const unreadMessages: number | undefined = chatsArr.find((chat) => chat.id === offer.chat_id)
                ?.unread_messages;
              return [
                ...accum,
                {
                  id: offer.id,
                  alias: `/${offer.chat_id}`,
                  contractor: offer.contactor_name,
                  unread: !!unreadMessages,
                },
              ];
            }, []),
        unread: unreadMessagesPresent,
      },
    ];
  }, []);
};

export const Sidebar = ({ className }: SidebarProps) => {
  const {
    data: orders = [],
    error: ordersDataLoadingError,
    isLoading: isOrdersDataLoading,
  } = useClientActiveOrdersQuery();

  const { data: chats = [], error: chatsLoadingError, isLoading: isChatsDataLoading } = useGetChatsQuery();

  const dispatch = useAppDispatch();
  const router = useRouter();
  const user: UserAccount | null = useUser();
  const [menuItems, setMenuItems] = useState<TMenuItem[] | null>(null);

  useEffect(() => {
    if (orders && chats && user) {
      const unreadMessagesPresent = chats.some((chat) => chat.unread_messages);

      user.role === "client"
        ? setMenuItems(
            CUSTOMER_MENU_ITEMS.map((el, i) =>
              i === 0
                ? {
                    ...el,
                    collapsible: parseOrdersToOrderItems(orders, chats, unreadMessagesPresent),
                    unread: unreadMessagesPresent,
                  }
                : el
            )
          )
        : setMenuItems(
            CONTRACTOR_MENU_ITEMS.map((el, i) =>
              i === 0
                ? {
                    ...el,
                    collapsible: parseOrdersToOrderItems(orders, chats, unreadMessagesPresent),
                    unread: unreadMessagesPresent,
                  }
                : el
            )
          );
    }
  }, [isOrdersDataLoading, isChatsDataLoading, user]);

  const onHandlerClick = () => {
    router.push("/");
    removeCookie("access_token");
    removeCookie("refresh_token");
    dispatch(setUser(null));
  };

  return (
    <aside className={cx("menu", className)}>
      <nav className={cx("navigation")}>
        {menuItems && <FirstLevelMenu menuItems={menuItems} route={PAGE_LINK} />}
        <Link href="/">
          <Button icon={<Icon glyph="exit" />} variant="exit" onClick={onHandlerClick}>
            <p className="text-small-semibold">Выйти</p>
          </Button>
        </Link>
      </nav>
    </aside>
  );
};
