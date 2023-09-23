import "@src/styles/global.css";
import Header from "@src/components/header/header";
import Footer from "@src/components/footer/footer";
import Modals from "@src/components/modals/modals";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
            <Modals />
        </>
    );
}
