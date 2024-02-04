import React, { FC, useState } from "react";
import classNames from "classnames/bind";
import styles from "./second-level-menu.module.scss";
import { TMenuProps } from "../sidebar";
import { ThirdLevelMenu } from "../third-level-menu/third-level-menu";
import { useRouter } from "next/navigation";

const cx = classNames.bind(styles);

export const SecondLevelMenu: FC<TMenuProps> = ({ menuItems, route }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [openItems, setOpenItems] = useState(new Array(menuItems.length).fill(false));
  const router = useRouter();

  return (
    <ul className={cx("secondLevelMenu")}>
      {menuItems.map((item, i) => {
        return (
          <li key={item.id}>
            <button
              type="button"
              className={cx("secondLevelLink", activeItem === i ? "" : "")}
              onClick={() => {
                setActiveItem(i);
                setOpenItems((state) => state.map((el, n) => (n === i ? (el = !el) : el)));
              }}
            >
              <div className={cx("secondLevelLink__arrow", openItems[i] ? "secondLevelLink__arrow_opened" : "")} />
              <p className={cx("text-small-semibold")}>
                {item.name} {item.collapsible ? `(${item.collapsible?.length})` : ""}
              </p>
            </button>
            {item.collapsible && openItems[i] && <ThirdLevelMenu menuItems={item.collapsible} route={route} />}
          </li>
        );
      })}
    </ul>
  );
};
