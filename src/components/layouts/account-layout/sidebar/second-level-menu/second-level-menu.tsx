"use client";

import React, { FC, useState } from "react";
import classNames from "classnames/bind";
import styles from "./second-level-menu.module.scss";
import { TMenuProps } from "../sidebar";
import { ThirdLevelMenu } from "../third-level-menu/third-level-menu";
import { useRouter } from "next/navigation";

const cx = classNames.bind(styles);

export const SecondLevelMenu: FC<TMenuProps> = ({ menuItems, route }) => {
  const [openItems, setOpenItems] = useState(new Array(menuItems.length).fill(false));
  const router = useRouter();
  // const currentPath = usePathname();

  return (
    <ul className={cx("secondLevelMenu")}>
      {menuItems.map((item, i) => {
        const itemPathname = route + item.alias;

        return (
          <li key={item.id} className={cx("secondLevelMenu__item")}>
            <span
              role="button"
              className={cx("secondLevelLink")}
              title={item.name}
              onClick={() => {
                setOpenItems((state) => state.map((el, n) => (n === i ? (el = !el) : el)));
                router.push(itemPathname);
              }}
            >
              <div className={cx("secondLevelLink__arrow", openItems[i] ? "secondLevelLink__arrow_opened" : "")} />
              <p className={cx("text-small-semibold", "secondLevelLink__name")}>
                {item.name}
                {!!item.collapsible?.some((chat) => chat.unread === true) && (
                  <span className={cx("secondLevelLink__bullet")} />
                )}
              </p>
            </span>
            {item.collapsible && openItems[i] && <ThirdLevelMenu menuItems={item.collapsible} route={itemPathname} />}
          </li>
        );
      })}
    </ul>
  );
};
