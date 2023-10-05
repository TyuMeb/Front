"use client";

import HeaderAccount from "@src/components/account/header-account/header-account";
import Navbar from "@src/components/account/navbar";
import Settings from "@src/components/account/settings/settings";

export default function SettingsPage() {
    return (
        <div className="help">
            <HeaderAccount />
            <Navbar />
            <Settings />
        </div>
    );
}
