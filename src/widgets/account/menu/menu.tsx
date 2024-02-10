"use client";

import { FC } from "react";
import classNames from "classnames/bind";
import styles from "./menu.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { MenuItem } from "@src/components/layouts/account-layout/sidebar";

const cx = classNames.bind(styles);

export type MenuProps = {
  menuItems: MenuItem[];
  children?: React.ReactNode;
};

export const AccountMenu: FC<MenuProps> = ({ menuItems, children }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <ul className={cx("firstLevelMenu")}>
      {menuItems.map((item) => {
        if (!item.href) return item.children;
        return (
          <li
            key={item.href || item.name}
            role="button"
            className={cx("firstLevelLink", item.href && pathname.startsWith(item.href) ? "activatedMenu" : "")}
            onClick={() => {
              if (item.href) router.push(item.href);
            }}
          >
            {item.icon}
            {item.name}
            {children}
          </li>
        );
      })}
    </ul>
  );
};
