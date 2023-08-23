"use client";

import HeaderMini from "@src/components/account/header-mini/header-mini";
import Nav from "@src/components/account/nav/nav";
import Chats from "@src/components/account/chats/chats";

export default function ChatsPage() {
    return (
        <div className="Chats">
            <HeaderMini />
            <Nav />
            <Chats />
        </div>
    );
}
