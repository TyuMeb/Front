import React, { FC, useState } from "react";
import classNames from "classnames/bind";
import { TMenuProps } from "../sidebar";
import styles from "./third-level-menu.module.scss";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const cx = classNames.bind(styles);

export const ThirdLevelMenu: FC<TMenuProps> = ({ menuItems, route }) => {
  const [activeItem, setActiveItem] = useState(menuItems.length);
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <ul className={cx("thirdLevelMenu")}>
      {menuItems.map((item, i) => {
        const itemPathname = route + item.alias;

        return (
          <li
            key={item.id}
            className={cx("thirdLevelItem", currentPath === itemPathname && activeItem === i ? "activatedSubmenu" : "")}
          >
            <button
              type="button"
              className={cx("thirdLevelLink")}
              onClick={() => {
                setActiveItem(i);
                router.push(itemPathname);
              }}
            >
              <p className="text-small">Исполнитель {i + 1}</p>
              {activeItem === i && <div className={cx("thirdLevelLink_bullet")} />}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
