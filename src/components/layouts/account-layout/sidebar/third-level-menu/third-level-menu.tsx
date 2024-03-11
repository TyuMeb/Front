"use client";

import React, { FC } from "react";
import classNames from "classnames/bind";
import { TMenuProps } from "../sidebar";
import styles from "./third-level-menu.module.scss";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const cx = classNames.bind(styles);

export const ThirdLevelMenu: FC<TMenuProps> = ({ menuItems, route }) => {
  // const [activeItem, setActiveItem] = useState(menuItems.length);
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <ul className={cx("thirdLevelMenu")}>
      {menuItems.map((item) => {
        const itemPathname = route + item.alias;

        return (
          <li
            key={item.id}
            className={cx("thirdLevelLink", currentPath === itemPathname ? "activatedSubmenu" : "")}
            role="button"
            title={item.name}
            onClick={() => {
              router.push(itemPathname);
            }}
          >
            <p className={cx("text-small", "thirdLevelLink__name")}>
              {item.contractor}
              {item.unread && <span className={cx("thirdLevelLink_bullet")} />}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
