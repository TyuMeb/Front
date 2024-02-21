"use client";

import { HTMLAttributes, useCallback } from "react";
import classNames from "classnames/bind";

import styles from "./breadcrumbs.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { orders } from "@src/shared/data/customer-account";
import { getPathNestedRoutes } from "@src/helpers/getPathNestedRoutes";

const cx = classNames.bind(styles);

export type FirstBreadcrumbsItems = {
  alias: string;
  name: string;
  secondBreadcrumbs?: SecondBreadcrumbsItems[];
};

export type NestedBreadcrumbsItems = {
  id: number;
  name: string;
  attached?: string;
};

export type SecondBreadcrumbsItems = {
  thirdBreadcrumbs?: ThirdBreadcrumbsItems[];
} & NestedBreadcrumbsItems;

export type ThirdBreadcrumbsItems = {} & NestedBreadcrumbsItems;

type BreadcrumbsProps = {
  breadcrumbs: FirstBreadcrumbsItems[];
  countNestedRoute: number;
} & HTMLAttributes<HTMLUListElement>;

export const Breadcrumbs = ({ countNestedRoute, className, ...props }: BreadcrumbsProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const breadcrumbs: any = [];
  const pathname = usePathname();
  const pathNestedRoutes = getPathNestedRoutes(pathname);

  const generateBreadcrumbs = useCallback(() => {
    const crumbList = [];

    let attached = "";
    let title = "";

    const generateNestedBreadcrumbs = (item: NestedBreadcrumbsItems, id: number) => {
      if (item.id === id) {
        title = item.name;

        if (item.attached) {
          attached = item.attached;
        }

        return;
      }
    };

    for (let i = countNestedRoute - 1; i < pathNestedRoutes.length; i++) {
      const href = `/${pathNestedRoutes.slice(0, i + 1).join("/")}`;

      const subpath = pathNestedRoutes[i];
      const id = Number(subpath.slice(-1));

      const step = countNestedRoute - 1;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      breadcrumbs.forEach((firstMenuitem: { alias: any; name: string; secondBreadcrumbs: any[] }) => {
        const currentPathname = firstMenuitem.alias;
        const currentNestedRoutes = getPathNestedRoutes(currentPathname);

        if (currentPathname === href) {
          if (i === step) {
            title = firstMenuitem.name;
          }
          return;
        }

        if (currentNestedRoutes[countNestedRoute - 1] === pathNestedRoutes[countNestedRoute - 1]) {
          firstMenuitem.secondBreadcrumbs?.forEach((secondMenuitem) => {
            if (i === step + 1) {
              generateNestedBreadcrumbs(secondMenuitem, id);
              return;
            }

            secondMenuitem.thirdBreadcrumbs?.forEach((thirdMenuitem: NestedBreadcrumbsItems) => {
              if (i === step + 2) {
                generateNestedBreadcrumbs(thirdMenuitem, id);
                return;
              }
            });
          });
          return;
        }
      });

      crumbList.push({ href, title });

      if (attached) {
        crumbList.push({ title: attached });
      }
    }

    return crumbList;
  }, [orders, pathname]);

  const breadcrumbsItems = generateBreadcrumbs();

  return (
    <ul className={`${styles.menu} ${className}`} {...props}>
      {breadcrumbsItems.map((item, i) => {
        return (
          <li className={styles.item} key={i}>
            {item.href ? (
              <Link className={cx("text-medium", { active: breadcrumbsItems.length === i + 1 })} href={item.href}>
                {item.title}
              </Link>
            ) : (
              <p className={cx("text-medium", { active: breadcrumbsItems.length === i + 1 })}>{item.title}</p>
            )}
          </li>
        );
      })}
    </ul>
  );
};
