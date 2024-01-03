import React, { ReactNode } from "react";
import { ExecutorLayout } from "@src/components/layouts/executor-layout/executor-layout";

const Layout = ({ children }: { children: ReactNode }) => <ExecutorLayout>{children}</ExecutorLayout>;

export default Layout;
