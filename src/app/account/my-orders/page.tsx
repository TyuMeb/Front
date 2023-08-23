"use client";

import HeaderMini from "@src/components/account/header-mini/header-mini";
import Nav from "@src/components/account/nav/nav";
import MyOrders from "@src/components/account/my-orders/myorders";

export default function MyOrdersPage() {
    return (
        <div className="myOrders">
            <HeaderMini />
            <Nav />
            <MyOrders />
        </div>
    );
}
