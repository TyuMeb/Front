import { Main } from "@src/components/account/main/main";
import { HeaderMini } from "@src/components/account/header-mini/header-mini";
import { Nav } from "@src/components/account/nav/nav";

export const Account = () => {
    return (
        <>
            <Main />
            <div className="container">
                <HeaderMini />
                <Nav />
            </div>
        </>
    );
};
