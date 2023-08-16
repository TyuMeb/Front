"use client";

import Main from "@src/components/account/main/main";
import HeaderMini from "@src/components/account/header-mini/header-mini";
import Nav from "@src/components/account/nav/nav";

const Account = () => {
    return (
        <>
            <HeaderMini />
            <div className="container">
                <Nav />
                <Main />
            </div>
        </>
    );
};

export default Account;
