import React, { ReactNode } from "react";
import { HomeLayout } from "@src/components/layouts/home-layout";

const Layout = ({ children }: { children: ReactNode }) => <HomeLayout>{children}</HomeLayout>;

export default Layout;
