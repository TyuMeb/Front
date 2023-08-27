import MyOrders from "@src/components/account/my-orders/myorders";
import HeaderMini from "@src/components/account/header-mini/header-mini";
import Nav from "@src/components/account/nav/nav";
import Archives from "@src/components/account/archives/archives";
import Chats from "@src/components/account/chats/chats";

const Account = () => {
    return (
        <>
            <HeaderMini />
            {/* <div className="container"> */}
            <Nav />
            {/* <MyOrders /> */}
            {/* <Archives /> */}
            <Chats />
            {/* </div> */}
        </>
    );
};

export default Account;
