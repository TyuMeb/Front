"use client";

import HeaderAccount from "@src/components/account/header-account/header-account";
import Navbar from "@src/components/account/navbar";
import OrderItem from "@src/components/account/my-orders/order-item/orderitem";

export default function OrderItemPage() {
    return (
        <div className="help">
            <HeaderAccount />
            <div className="container">
                <Navbar />
                <OrderItem />
            </div>
        </div>
    );
}
