"use client";

import HeaderAccount from "@src/components/account/header-account/header-account";
import Navbar from "@src/components/account/navbar";
import Archives from "@src/components/account/archives/archives";

export default function ArchivesPage() {
    return (
        <div className="archives">
            <HeaderAccount />
            <Navbar />
            <Archives />
        </div>
    );
}
