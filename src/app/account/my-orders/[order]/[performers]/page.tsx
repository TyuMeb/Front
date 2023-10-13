"use client";

import HeaderAccount from "@src/components/account/header-account/header-account";
import Dialog from "@src/components/account/chats/dialog/dialog";
import Navbar from "@src/components/account/navbar";

export default function OrderItemPage() {
    return (
        <div className="help">
            <HeaderAccount />
            <div className="container">
                <Navbar />
                <Dialog />
            </div>
        </div>
    );
}
