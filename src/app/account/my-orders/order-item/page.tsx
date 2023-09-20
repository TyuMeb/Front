"use client";

import HeaderAccount from "@src/components/account/header-account/header-account";
import NavAccount from "@src/components/account/nav-account/nav-account";
import OrderItem from "@src/components/account/my-orders/order-item/orderitem";

export default function OrderItemPage() {
    return (
        <div className="help">
            <HeaderAccount />
            <div className="container">
                <NavAccount />
                <OrderItem />
            </div>
        </div>
    );
}

// min - width: 1440px;
// margin: 0 auto;
