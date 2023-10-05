"use client";

import HeaderAccount from "@src/components/account/header-account/header-account";
import Dialog from "@src/components/account/chats/dialog/dialog";
import NavAccount from "@src/components/account/nav-account/nav-account";

export default function OrderItemPage() {
    return (
        <div className="help">
            <HeaderAccount />
            <div className="container">
                <NavAccount />
                <Dialog />
            </div>
        </div>
    );
}

// min - width: 1440px;
// margin: 0 auto;
