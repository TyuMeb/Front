import React, { ReactNode } from "react";
import { Providers } from "@src/redux/provider";
import { Open_Sans, Raleway } from "next/font/google";

import "@src/styles/global.css";
import "keen-slider/keen-slider.min.css";
import { cn } from "@src/shared/lib/cn";

const openSans = Open_Sans({
    subsets: ["cyrillic"],
    variable: "--font-open-sans",
    weight: ["400", "600", "700", "800"],
    style: ["normal"],
});

const raleway = Raleway({
    subsets: ["cyrillic"],
    variable: "--font-raleway",
    weight: ["400"],
    style: ["normal"],
});

export const metadata = {
    title: "Marketplace Why We",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
            <Providers>
                <body className={cn(openSans.className, raleway.variable)}>{children}</body>
            </Providers>
        </html>
    );
}
