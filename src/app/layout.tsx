import "../styles/global.css";
import { Open_Sans } from "next/font/google";
import Header from "@src/components/header/header";
import Footer from "@src/components/footer/footer";
import { Providers } from "@src/redux/provider";
import Modals from "@src/components/modals/modals";
import { ReactNode } from "react";

const openSans = Open_Sans({ subsets: ["cyrillic"] });

export const metadata = {
    title: "Marketplace Why We",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <Providers>
                <body className={openSans.className}>
                    {/* <Header /> */}
                    <main /* ref={ref} */>{children}</main>
                    {/* <Footer /> */}
                    <Modals />
                </body>
            </Providers>
        </html>
    );
}
