import { ReactNode } from "react";
import Header from "@src/components/layouts/account-layout/header";
import Sidebar from "@src/components/layouts/account-layout/sidebar";
import styles from "./account-layout.module.scss";

const AccountLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default AccountLayout;
