"use client";

import React, { HTMLAttributes, useCallback } from "react";
import classNames from "classnames/bind";

import styles from "./breadcrumbs.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { orders } from "@src/shared/data/account";
import { getPathNestedRoutes } from "@src/helpers/getPathNestedRoutes";

const cx = classNames.bind(styles);

export type BreadcrumbsItem = {
    alias: string;
    name: string;
};

type BreadcrumbsProps = {
    breadcrumbs: BreadcrumbsItem[];
    pageLink: string;
} & HTMLAttributes<HTMLUListElement>;

export const Breadcrumbs = ({ breadcrumbs, pageLink, className, ...props }: BreadcrumbsProps) => {
    const pathname = usePathname();

    const generateBreadcrumbs = useCallback(() => {
        const pathNestedRoutes = getPathNestedRoutes(pathname);

        const crumbList = [];

        for (let i = 0; i < pathNestedRoutes.length; i++) {
            const href = `/${pathNestedRoutes.slice(0, i + 1).join("/")}`;
            const subpath = pathNestedRoutes[i];

            let title = "";
            const id = Number(subpath.slice(-1));

            breadcrumbs.forEach((item) => {
                const currentPathname = `/${pageLink}/${item.alias}`;

                if (href === currentPathname) {
                    title = item.name;
                }
            });

            if (i === 2) {
                const ell = orders.find((item) => item.id === id);

                title = ell?.name.toLocaleLowerCase() || "";
            }

            if (i === 3) {
                title = `чат с исполнителем ${id}`;
            }

            crumbList.push({ href, title });
        }

        return crumbList;
    }, [orders, pathname]);

    return (
        <ul className={`${styles.menu} ${className}`} {...props}>
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
