import MyOrders from "@src/components/account/my-orders/myorders";
import HeaderAccount from "@src/components/account/header-account/header-account";
import NavAccount from "@src/components/account/nav-account/nav-account";
import Archives from "@src/components/account/archives/archives";
import Chats from "@src/components/account/chats/chats";

const Account = () => {
    return (
        <>
            <HeaderAccount />
            {/* <div className="container"> */}
            <NavAccount />
            <MyOrders />
            <Archives />
            <Chats />
            {/* </div> */}
        </>
    );
};

export default Account;
