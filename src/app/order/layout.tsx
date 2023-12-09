import React, { ReactNode } from "react";
import { Footer } from "@src/components/layouts/home-layout/footer";
import { Modals } from "@src/components/modals";
import { Header } from "@src/components/layouts/home-layout/header";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
            <Modals />
        </>
    );
};

export default Layout;
