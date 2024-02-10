"use client";

import { HTMLAttributes } from "react";
import classNames from "classnames/bind";
import { Button } from "@src/shared/ui/button";
import { Icon } from "@src/components/icon";
import styles from "./sidebar.module.scss";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@src/redux/hooks";
import { setUser } from "@src/redux/slices/users-slice";
import { removeCookie } from "typescript-cookie";
import { useUser } from "@src/redux/slices/users-slice";
import { AccountMenu } from "@src/widgets/account/menu/menu";
import { CUSTOMER_MENU_ITEMS, CONTRACTOR_MENU_ITEMS } from "@src/widgets/account/menu/constants";

const cx = classNames.bind(styles);

type SidebarProps = {} & HTMLAttributes<HTMLDivElement>;

export type MenuItem = {
  href?: string;
  name?: string;
  contractor?: number | string;
  icon?: JSX.Element;
  collapsible?: MenuItem[];
  unread?: boolean;
  children?: React.ReactNode;
};

export type MenuProps = {
  menuItems: MenuItem[];
  route: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useUser();

  const menuItems = user?.role !== "client" ? CUSTOMER_MENU_ITEMS : CONTRACTOR_MENU_ITEMS;

  const onHandlerClick = () => {
    router.push("/");
    removeCookie("access_token");
    removeCookie("refresh_token");
    dispatch(setUser(null));
  };

  return (
    <aside className={cx("menu", className)}>
      <nav className={cx("navigation")}>
        {user && <AccountMenu menuItems={menuItems} />}

        <Button icon={<Icon glyph="exit" />} variant="exit" onClick={onHandlerClick}>
          Выйти
        </Button>
      </nav>
    </aside>
  );
};
