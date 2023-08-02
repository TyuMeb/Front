import React, { ReactNode } from "react";
import { Metadata } from "next";
import Header from "@src/components/header/header";
import Footer from "@src/components/footer/footer";
import { Providers } from "@src/redux/provider";
import Modals from "@src/components/modals/modals";

export const metadata: Metadata = {
    title: "Marketplace Why We",
    description: "Marketplace Why We",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <Providers>
                <body>{children}</body>
            </Providers>
        </html>
    );
}

//  <html lang="ru">
//             <Providers>
//                 <body>
//                     <Header />
//                     <main>{children}</main>
//                     <Footer />
//                     <Modals />
//                 </body>
//             </Providers>
//         </html>
