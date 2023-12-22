import React, { ReactNode } from "react";
import { AccountLayout } from "@src/components/layouts/account-layout";
import { PATH_CUSTOMER_ACCOUNT_PAGE, CLIENT_ACCOUNT_MENU } from "@src/shared/constants";
import "src/styles/account.css";

const Layout = ({ children }: { children: ReactNode }) => (
    <AccountLayout menu={CLIENT_ACCOUNT_MENU} pagePath={PATH_CUSTOMER_ACCOUNT_PAGE}>
        {children}
    </AccountLayout>
);

export default Layout;
