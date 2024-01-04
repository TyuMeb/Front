import React, { ReactNode } from "react";
import { AccountLayout } from "@src/components/layouts/account-layout";
import { CLIENT_ACCOUNT_MENU, getBreadcrumbs } from "@src/shared/constants/customer-account";
import "src/styles/account.css";

const Layout = ({ children }: { children: ReactNode }) => (
    <AccountLayout menuItems={CLIENT_ACCOUNT_MENU} breadcrumbs={getBreadcrumbs()} countNestedRoute={2}>
        {children}
    </AccountLayout>
);

export default Layout;
