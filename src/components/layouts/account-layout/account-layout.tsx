import { HTMLAttributes } from "react";
import classNames from "classnames/bind";
import { Header } from "@src/components/layouts/account-layout/header";
import { Sidebar } from "@src/components/layouts/account-layout/sidebar";
import { Modals } from "@src/components/modals";
import { Breadcrumbs } from "@src/components/layouts/account-layout/breadcrumbs";

import styles from "./account-layout.module.scss";

const cx = classNames.bind(styles);

type CustomerLayoutProps = {
  countNestedRoute?: number;
} & HTMLAttributes<HTMLDivElement>;

export const AccountLayout = ({ countNestedRoute = 1, children, className, ...props }: CustomerLayoutProps) => {
  return (
    <div className={cx("wrapper", className)} {...props}>
      <Header className={cx("header")}>
        <Breadcrumbs countNestedRoute={countNestedRoute} />
      </Header>

      <div className={cx("content")}>
        <Sidebar className={cx("sidebar")} />
        <main className={cx("main")}>{children}</main>
        <Modals />
      </div>
    </div>
  );
};
