import MyOrders from "@src/components/account/my-orders/myorders";
import HeaderMini from "@src/components/account/header-mini/header-mini";
import Nav from "@src/components/account/nav/nav";

const Account = () => {
    return (
        <>
            <HeaderMini />
            {/* <div className="container"> */}
            <Nav />
            <MyOrders />
            {/* </div> */}
        </>
    );
};

export default Account;
