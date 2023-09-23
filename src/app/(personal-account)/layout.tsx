import React, { ReactNode } from "react";
import AccountLayout from "@src/components/layouts/account-layout";

const Layout = ({ children }: { children: ReactNode }) => <AccountLayout>{children}</AccountLayout>;

export default Layout;
