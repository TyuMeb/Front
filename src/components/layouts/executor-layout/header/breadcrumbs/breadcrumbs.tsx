"use client";

import React, { useCallback } from "react";
import classNames from "classnames/bind";

import styles from "./breadcrumbs.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { orders } from "@src/shared/data/customer-account";

const cx = classNames.bind(styles);

const PAGE_LINK = "/executor/";

const breadcrumbs = [
  { alias: "orders", title: "Заказы клиентов" },
  { alias: "proposals", title: "Мои предложения" },
  { alias: "chats", title: "Чаты" },
  { alias: "archives", title: "Архивы" },
  { alias: "settings", title: "Настройки" },
  { alias: "help", title: "Помощь" },
  { alias: "help1", title: "Сделать заказ" },
];

export const Breadcrumbs = () => {
  const pathname = usePathname();

  /**
   * Разбивает строку путей, на подпути
   * @example getPathNestedRoutes('/path1/path2/path3?...');
   * @returns {string[]} Returns ['path1', 'path2', 'path3', ...]
   */
  const getPathNestedRoutes = (path: string): string[] => {
    const pathNestedRoutes = [];
    let count = -1;

    for (let i = 0; i < path.length; i++) {
      if (path[i] === "?") {
        break;
      }

      if (path[i] === "/") {
        count++;
        continue;
      }

      if (!pathNestedRoutes[count]) {
        pathNestedRoutes.push(path[i]);
        continue;
      }

      pathNestedRoutes[count] += path[i];
    }

    return pathNestedRoutes;
  };

  const generateBreadcrumbs = useCallback(() => {
    const pathNestedRoutes = getPathNestedRoutes(pathname);

    const crumbList = [];

    for (let i = 0; i < pathNestedRoutes.length; i++) {
      const href = `/${pathNestedRoutes.slice(0, i + 1).join("/")}`;
      const subpath = pathNestedRoutes[i];

      let title = "";

      breadcrumbs.forEach((item) => {
        const currentPathname = PAGE_LINK + item.alias;

        if (href === currentPathname) {
          title = item.title;
        }
      });

      if (i === 2) {
        const id = Number(subpath.slice(-1));

        const ell = orders.find((item) => item.id === id);

        title = ell?.name.toLocaleLowerCase() || "";
      }

      if (i === 3) {
        const id = Number(subpath.slice(-1));

        title = `чат с клиентом ${id}`;
      }

      crumbList.push({ href, title });
    }

    return crumbList;
  }, [orders, pathname]);

  return (
    <ul className={styles.menu}>
      {generateBreadcrumbs().map((item, i) => {
        if (i === 0) {
          return;
        }

        return (
          <li className={styles.item} key={i}>
            <Link className={cx("text-medium", { active: pathname === item.href })} href={item.href}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
