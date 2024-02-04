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
import { FirstLevelMenu } from "./first-level-menu/first-level-menu";
import { ACCOUNT_MENU_CONFIG } from "@src/shared/data/account-menu-config";

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
};

export type TMenuProps = {
  menuItems: TMenuItem[];
  route: string;
};

const parseOrdersToOrderItems = (arr: any): TMenuItem[] => {
  return arr.reduce((acc: TMenuItem[], order: any) => {
    return [
      ...acc,
      {
        id: order.id,
        alias: "",
        name: order.name,
        contractor: Number(order.contractor),
        collapsible: !order.offers
          ? undefined
          : order.offers.reduce((accum: TMenuItem[], offer: any) => {
              return [...accum, { id: offer.id, alias: `/${offer.chat_id}`, contractor: offer.contactor_name }];
            }, []),
      },
    ];
  }, []);
};

export const Sidebar = ({ className }: SidebarProps) => {
  const { data: orders = [], error, isLoading } = useClientActiveOrdersQuery();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [menuItems, setMenuItems] = useState<TMenuItem[]>(ACCOUNT_MENU_CONFIG);

  useEffect(() => {
    if (!isLoading && !error && orders)
      setMenuItems((state) =>
        state.map((el, i) => (i === 0 ? { ...el, collapsible: parseOrdersToOrderItems(orders) } : el))
      );
  }, [isLoading]);

  const onHandlerClick = () => {
    router.push("/");
    removeCookie("access_token");
    removeCookie("refresh_token");
    dispatch(setUser(null));
  };

  return (
    <aside className={cx("menu", className)}>
      <nav className={cx("navigation")}>
        <FirstLevelMenu menuItems={menuItems} route={PAGE_LINK} />
        <Link href="/">
          <Button icon={<Icon glyph="exit" />} variant="exit" onClick={onHandlerClick}>
            <p className="text-small-semibold">Выйти</p>
          </Button>
        </Link>
      </nav>
    </aside>
  );
};
