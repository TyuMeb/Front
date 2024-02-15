import { ReactNode } from "react";
import { AccountLayout } from "@src/components/layouts/account-layout";
import "src/styles/account.css";

const Layout = ({ children }: { children: ReactNode }) => <AccountLayout>{children}</AccountLayout>;

export default Layout;
