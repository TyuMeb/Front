import MyOrders from "@src/components/account/my-orders/myorders";
import HeaderAccount from "@src/components/account/header-account/header-account";
import Nav from "@src/components/account/navbar/navbar";
import Archives from "@src/components/account/archives/archives";
import Chats from "@src/components/account/chats/chats";

const Account = () => {
    return (
        <>
            <HeaderAccount />
            {/* <div className="container"> */}
            <Nav />
            <MyOrders />
            <Archives />
            <Chats />
            {/* </div> */}
        </>
    );
};

export default Account;
