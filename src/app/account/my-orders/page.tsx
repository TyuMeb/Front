"use client";

import HeaderAccount from "@src/components/account/header-account/header-account";
import Navbar from "@src/components/account/navbar";
import MyOrders from "@src/components/account/my-orders/myorders";

export default function OrdersPage() {
    return (
        <div className="help">
            <HeaderAccount />
            <div className="container">
                <Navbar />
                <MyOrders />
            </div>
        </div>
    );
}
