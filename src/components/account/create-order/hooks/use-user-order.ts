import { useUser } from "@src/redux/slices/users-slice";
import { getCookieOrder, removeCookieOrder } from "../lib/order-storage";
import { useLazyOrderQuery } from "@src/redux/api/order-api-slice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useUserOrder = () => {
  const router = useRouter();
  const user = useUser();

  const [getOrder] = useLazyOrderQuery();

  useEffect(() => {
    const orderId = getCookieOrder();

    if (!user || !orderId) {
      removeCookieOrder();
      return;
    }

    getOrder(orderId)
      .unwrap()
      .then(() => {
        router.push("/order");
      })
      .catch(() => {
        removeCookieOrder();
      });
  }, [user]);
};
