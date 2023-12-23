import React, { ReactNode } from "react";
import { AccountLayout } from "@src/components/layouts/account-layout";
import { PATH_PERFORMER_ACCOUNT_PAGE, CLIENT_ACCOUNT_MENU } from "@src/shared/constants/performer-account";
import "src/styles/account.css";

const Layout = ({ children }: { children: ReactNode }) => (
    <AccountLayout menuItems={CLIENT_ACCOUNT_MENU} alias={PATH_PERFORMER_ACCOUNT_PAGE}>
        {children}
    </AccountLayout>
);

export default Layout;
