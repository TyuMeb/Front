"use client";

import HeaderAccount from "@src/components/account/header-account/header-account";
import NavAccount from "@src/components/account/nav-account/nav-account";
import MyOrders from "@src/components/account/my-orders/myorders";

export default function SettingsPage() {
    return (
        <div className="help">
            <HeaderAccount />
            <NavAccount />
            <MyOrders />
        </div>
    );
}
