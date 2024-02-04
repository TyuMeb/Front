"use client";

import React, { FC, useState } from "react";
import classNames from "classnames/bind";
import styles from "./first-level-menu.module.scss";
import { TMenuProps } from "../sidebar";
import { SecondLevelMenu } from "../second-level-menu/second-level-menu";
import { useRouter } from "next/navigation";

const cx = classNames.bind(styles);

export const FirstLevelMenu: FC<TMenuProps> = ({ menuItems, route }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [openItems, setOpenItems] = useState(new Array(menuItems.length).fill(false));
  const router = useRouter();

  return (
    <ul className={cx("firstLevelMenu")}>
      {menuItems.map((item, i) => {
        const itemPathname = route + item.alias;

        return (
          <li key={item.id}>
            <button
              type="button"
              className={cx("firstLevelLink", activeItem === i ? "activatedMenu" : "")}
              onClick={() => {
                setActiveItem(i);
                setOpenItems((state) => state.map((el, n) => (n === i ? (el = !el) : el)));
                console.log(openItems);
                router.push(itemPathname);
              }}
            >
              {item.icon}
              <p className={cx("text-small-semibold")}>
                {item.name} {!item.collapsible?.length ? "" : `(${item.collapsible?.length})`}
              </p>
            </button>
            {item.collapsible && openItems[i] && <SecondLevelMenu menuItems={item.collapsible} route={itemPathname} />}
          </li>
        );
      })}
    </ul>
  );
};
