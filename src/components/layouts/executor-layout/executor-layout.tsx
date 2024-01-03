import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import { Header } from "@src/components/layouts/executor-layout/header";
import { Sidebar } from "@src/components/layouts/executor-layout/sidebar";
import { Modals } from "@src/components/modals";

import styles from "./executor-layout.module.scss";

const cx = classNames.bind(styles);

export const ExecutorLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={cx("wrapper")}>
            <Header className={cx("header")} />
            <div className={cx("content")}>
                <Sidebar className={cx("sidebar")} />
                <main className={cx("main")}>{children}</main>
                <Modals />
            </div>
        </div>
    );
};
