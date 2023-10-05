"use client";

import HeaderAccount from "@src/components/account/header-account/header-account";
import Navbar from "@src/components/account/navbar";
import Help from "@src/components/account/help/help";

export default function HelpPage() {
    return (
        <div className="help">
            <HeaderAccount />
            <Navbar />
            <Help />
        </div>
    );
}
