import "@src/styles/global.css";
import Header from "@src/components/layouts/home-layouts/header";
import Footer from "@src/components/layouts/home-layouts/footer";
import Modals from "@src/components/modals/modals";
import { ReactNode } from "react";

const HomeLayouts = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
            <Modals />
        </>
    );
};

export default HomeLayouts;
