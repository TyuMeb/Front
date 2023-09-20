"use client";

import HeaderAccount from "@src/components/account/header-account/header-account";
import OrderChat from "@src/components/account/my-orders/order-item/order-chat/orderchat";
import NavAccount from "@src/components/account/nav-account/nav-account";

export default function OrderItemPage() {
    return (
        <div className="help">
            <HeaderAccount />
            <div className="container">
                <NavAccount />
                <OrderChat />
            </div>
        </div>
    );
}

// min - width: 1440px;
// margin: 0 auto;
