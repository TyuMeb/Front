"use client";

import React, { FC, useState } from "react";
import classNames from "classnames/bind";
import styles from "./main-menu.module.scss";
import { TMenuProps } from "../sidebar";
import { ThirdLevelMenu } from "../third-level-menu/third-level-menu";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const cx = classNames.bind(styles);

export const ExecutorMenu: FC<TMenuProps> = ({ menuItems }) => {
  const [openItems, setOpenItems] = useState(new Array(menuItems.length).fill(false));
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <ul className={cx("firstLevelMenu")}>
      {menuItems.map((item, i) => {
        const itemPathname = item.alias;

        return (
          <li key={item.id} className={cx("firstLevelMenu__item")}>
            <span
              role="button"
              className={cx("firstLevelLink", currentPath.startsWith(itemPathname) ? "activatedMenu" : "")}
              onClick={() => {
                setOpenItems((state) => state.map((el, n) => (n === i ? (el = !el) : el)));
                router.push(itemPathname);
              }}
            >
              {item.icon}
              <span className={cx("text-small-semibold")}>
                {item.name}
                {!item.collapsible?.length ? "" : ` (${item.collapsible?.length})`}
                {!!item.unread && <span className={cx("firstLevelLink_bullet")} />}
              </span>
            </span>
            {item.collapsible && openItems[i] && <ThirdLevelMenu menuItems={item.collapsible} route={itemPathname} />}
          </li>
        );
      })}
    </ul>
  );
};
