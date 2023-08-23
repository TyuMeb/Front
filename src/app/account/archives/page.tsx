"use client";

import HeaderMini from "@src/components/account/header-mini/header-mini";
import Nav from "@src/components/account/nav/nav";
import Archives from "@src/components/account/archives/archives";

export default function ArchivesPage() {
    return (
        <div className="archives">
            <HeaderMini />
            <Nav />
            <Archives />
        </div>
    );
}
