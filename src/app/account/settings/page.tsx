"use client";

import HeaderAccount from "@src/components/account/header-account/header-account";
import NavAccount from "@src/components/account/nav-account/nav-account";
// import Settings from "@src/components/account/settings/settings";

export default function SettingsPage() {
    return (
        <div className="help">
            <HeaderAccount />
            <NavAccount />
            {/* <Settings /> */}
        </div>
    );
}
