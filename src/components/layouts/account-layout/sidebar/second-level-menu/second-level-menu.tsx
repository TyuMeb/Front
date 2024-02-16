"use client";

import React, { FC, useState } from "react";
import classNames from "classnames/bind";
import styles from "./second-level-menu.module.scss";
import { MenuProps } from "../sidebar";
import { ThirdLevelMenu } from "../third-level-menu/third-level-menu";

const cx = classNames.bind(styles);

export const SecondLevelMenu: FC<MenuProps> = ({ menuItems, route }) => {
  const [openItems, setOpenItems] = useState(new Array(menuItems.length).fill(false));

  return (
    <ul className={cx("secondLevelMenu")}>
      {menuItems.map((item, i) => {
        return (
          <li key={item.id}>
            <button
              type="button"
              className={cx("secondLevelLink")}
              title={item.name}
              onClick={() => {
                setOpenItems((state) => state.map((el, n) => (n === i ? (el = !el) : el)));
              }}
            >
              <div className={cx("secondLevelLink__arrow", openItems[i] ? "secondLevelLink__arrow_opened" : "")} />
              <p className={cx("text-small-semibold", "secondLevelLink__name")}>{item.name}</p>
              {!!item.collapsible?.some((chat) => chat.unread === true) && (
                <div className={cx("secondLevelLink__bullet")} />
              )}
            </button>
            {item.collapsible && openItems[i] && <ThirdLevelMenu menuItems={item.collapsible} route={route} />}
          </li>
        );
      })}
    </ul>
  );
};
