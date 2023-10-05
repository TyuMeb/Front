"use client";

import HeaderAccount from "@src/components/account/header-account/header-account";
import Navbar from "@src/components/account/navbar";
import Chats from "@src/components/account/chats/chats";

export default function ChatsPage() {
    return (
        <div className="help">
            <HeaderAccount />
            <Navbar />
            <Chats />
        </div>
    );
}
