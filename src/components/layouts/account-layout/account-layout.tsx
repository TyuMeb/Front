import React, { HTMLAttributes } from "react";
import classNames from "classnames/bind";
import { Header } from "@src/components/layouts/account-layout/header";
import { Sidebar } from "@src/components/layouts/account-layout/sidebar";
import { Modals } from "@src/components/modals";
import { Breadcrumbs, FirstBreadcrumbsItems } from "@src/components/layouts/account-layout/breadcrumbs";

import styles from "./account-layout.module.scss";
import { Notify } from "@src/components/modal-notify/notify";

const cx = classNames.bind(styles);

type CustomerLayoutProps = {
  menuItems: unknown[];
  breadcrumbs: FirstBreadcrumbsItems[];
  countNestedRoute?: number;
} & HTMLAttributes<HTMLDivElement>;

export const AccountLayout = ({
  menuItems,
  breadcrumbs,
  countNestedRoute = 1,
  children,
  className,
  ...props
}: CustomerLayoutProps) => {
  return (
    <div className={cx("wrapper", className)} {...props}>
      <Header className={cx("header")}>
        <Breadcrumbs breadcrumbs={breadcrumbs} countNestedRoute={countNestedRoute} />
      </Header>

      <div className={cx("content")}>
        <Sidebar className={cx("sidebar")} />
        <main className={cx("main")}>{children}</main>
        <Modals />
        <Notify />
      </div>
    </div>
  );
};
