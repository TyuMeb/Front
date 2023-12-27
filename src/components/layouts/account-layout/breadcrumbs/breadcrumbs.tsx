"use client";

import React, { HTMLAttributes, useCallback } from "react";
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
} & HTMLAttributes<HTMLUListElement>;

export const Breadcrumbs = ({ breadcrumbs, className, ...props }: BreadcrumbsProps) => {
    const pathname = usePathname();

    const generateBreadcrumbs = useCallback(() => {
        const pathNestedRoutes = getPathNestedRoutes(pathname);
        const crumbList = [];
        let attached = "";

        for (let step = 0; step < pathNestedRoutes.length; step++) {
            const href = `/${pathNestedRoutes.slice(0, step + 1).join("/")}`;
            let title = "";

            const subpath = pathNestedRoutes[step];
            const id = Number(subpath.slice(-1));

            const generateNestedBreadcrumbs = (item: NestedBreadcrumbsItems) => {
                if (item.id === id) {
                    title = item.name;

                    if (item.attached) {
                        attached = item.attached;
                    }

                    return;
                }
            };

            breadcrumbs.forEach((firstMenuitem) => {
                const currentPathname = firstMenuitem.alias;

                if (currentPathname === href) {
                    if (step === 1) {
                        title = firstMenuitem.name;
                    }
                    return;
                }

                if (getPathNestedRoutes(currentPathname)[1] === pathNestedRoutes[1]) {
                    firstMenuitem.secondBreadcrumbs?.forEach((secondMenuitem) => {
                        if (step === 2) {
                            generateNestedBreadcrumbs(secondMenuitem);
                            return;
                        }

                        secondMenuitem.thirdBreadcrumbs?.forEach((thirdMenuitem) => {
                            if (step === 3) {
                                generateNestedBreadcrumbs(thirdMenuitem);
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
                if (i === 0) {
                    return;
                }

                return (
                    <li className={styles.item} key={i}>
                        {item.href ? (
                            <Link
                                className={cx("text-medium", { active: breadcrumbsItems.length === i + 1 })}
                                href={item.href}>
                                {item.title}
                            </Link>
                        ) : (
                            <p className={cx("text-medium", { active: breadcrumbsItems.length === i + 1 })}>
                                {item.title}
                            </p>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};
