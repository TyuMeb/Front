"use client";

import HeaderMini from "@src/components/account/header-mini/header-mini";
import Nav from "@src/components/account/nav/nav";
import Chats from "@src/components/account/chats/chats";

export default function SettingsPage() {
    return (
        <div className="help">
            <HeaderMini />
            <Nav />
            <Chats />
        </div>
    );
}
