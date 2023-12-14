import React, { HTMLAttributes } from "react";
import classNames from "classnames/bind";
import { Header } from "@src/components/layouts/account-layout/header";
import { Sidebar } from "@src/components/layouts/account-layout/sidebar";
import { Modals } from "@src/components/modals";
import { orders, performers } from "@src/shared/data/account";
import { Breadcrumbs } from "./breadcrumbs";
import { firstLevelMenuItemProps } from "@src/components/layouts/account-layout/sidebar";

import styles from "./account-layout.module.scss";

const cx = classNames.bind(styles);

type CustomerLayoutProps = {
    menu: firstLevelMenuItemProps[];
    pagePath: string;
} & HTMLAttributes<HTMLDivElement>;

export const AccountLayout = ({ menu, pagePath, children, className, ...props }: CustomerLayoutProps) => {
    const breadcrumbs = menu.map((item) => {
        return { alias: item.alias, name: item.name };
    });

    return (
        <div className={cx("wrapper", className)} {...props}>
            <Header className={cx("header")}>
                <Breadcrumbs breadcrumbs={breadcrumbs} pageLink={pagePath} />
            </Header>

            <div className={cx("content")}>
                <Sidebar
                    firstLevelMenu={{ menuItems: menu, alias: pagePath }}
                    secondLevelMenu={{ menuItems: orders, alias: "order" }}
                    thirdLevelMenu={{ menuItems: performers, alias: "executor" }}
                    className={cx("sidebar")}
                />
                <main className={cx("main")}>{children}</main>
                <Modals />
            </div>
        </div>
    );
};
