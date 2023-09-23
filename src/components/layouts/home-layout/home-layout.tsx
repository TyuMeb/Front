import "@src/styles/global.css";
import Header from "@src/components/layouts/home-layout/header";
import Footer from "@src/components/layouts/home-layout/footer";
import Modals from "@src/components/modals/modals";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
            <Modals />
        </>
    );
};

export default HomeLayout;
