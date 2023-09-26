"use client";

import HeaderAccount from "@src/components/account/header-account/header-account";
import NavAccount from "@src/components/account/nav-account/nav-account";
import Help from "@src/components/account/help/help";

export default function HelpPage() {
    return (
        <div className="help">
            <HeaderAccount />
            <NavAccount />
            <Help />
        </div>
    );
}
