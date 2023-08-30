"use client";

import HeaderAccount from "@src/components/account/header-account/header-account";
import NavAccount from "@src/components/account/nav-account/nav-account";
import Chats from "@src/components/account/chats/chats";

export default function SettingsPage() {
    return (
        <div className="help">
            <HeaderAccount />
            <NavAccount />
            <Chats />
        </div>
    );
}
