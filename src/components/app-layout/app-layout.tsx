import React, { ReactNode } from "react";
import Header from "@src/components/header/header";
import Footer from "@src/components/footer/footer";
import { Providers } from "@src/redux/provider";
import Modals from "@src/components/modals/modals";

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <Providers>
            <Header />
            <main>{children}</main>
            <Footer />
            <Modals />
        </Providers>
    );
}
