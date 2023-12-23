import React, { HTMLAttributes } from "react";
import classNames from "classnames/bind";
import { Header } from "@src/components/layouts/account-layout/header";
import { Sidebar } from "@src/components/layouts/account-layout/sidebar";
import { Modals } from "@src/components/modals";
import { Breadcrumbs } from "./breadcrumbs";
import { FirstLevelMenuItemProps } from "@src/components/layouts/account-layout/sidebar";

import styles from "./account-layout.module.scss";

const cx = classNames.bind(styles);

type CustomerLayoutProps = {
    menuItems: FirstLevelMenuItemProps[];
    alias: string;
} & HTMLAttributes<HTMLDivElement>;

export const AccountLayout = ({ menuItems, alias, children, className, ...props }: CustomerLayoutProps) => {
    const breadcrumbs = menuItems.map((item) => {
        return { alias: item.alias, name: item.name };
    });

    return (
        <div className={cx("wrapper", className)} {...props}>
            <Header className={cx("header")}>
                <Breadcrumbs breadcrumbs={breadcrumbs} pageLink={alias} />
            </Header>

            <div className={cx("content")}>
                <Sidebar menuItems={menuItems} alias={alias} className={cx("sidebar")} />
                <main className={cx("main")}>{children}</main>
                <Modals />
            </div>
        </div>
    );
};
