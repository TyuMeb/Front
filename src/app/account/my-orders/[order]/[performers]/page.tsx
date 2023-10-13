"use client";

import HeaderAccount from "@src/components/account/header-account/header-account";
import OrderChat from "@src/components/account/chats/order-chat/orderchat";
import Navbar from "@src/components/account/navbar";

export default function OrderItemPage() {
    return (
        <div className="help">
            <HeaderAccount />
            <div className="container">
                <Navbar />
                <OrderChat />
            </div>
        </div>
    );
}
