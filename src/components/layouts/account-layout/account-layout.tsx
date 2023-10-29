import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import Header from "@src/components/layouts/account-layout/header";
import Sidebar from "@src/components/layouts/account-layout/sidebar";

import styles from "./account-layout.module.scss";

const cx = classNames.bind(styles);

const AccountLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={cx("wrapper")}>
            <Header className={cx("header")} />
            <Sidebar className={cx("sidebar")} />
            <main className={cx("main")}>{children}</main>
        </div>
    );
};

export default AccountLayout;
