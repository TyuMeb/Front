"use client";

import HeaderAccount from "@src/components/account/header-account/header-account";
import NavAccount from "@src/components/account/nav-account/nav-account";
import Archives from "@src/components/account/archives/archives";

export default function ArchivesPage() {
    return (
        <div className="archives">
            <HeaderAccount />
            <NavAccount />
            <Archives />
        </div>
    );
}
