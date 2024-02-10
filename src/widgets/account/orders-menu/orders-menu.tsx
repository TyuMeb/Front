import { useGetChatsQuery } from "@src/redux/api/chat-api-slice";
import { useClientActiveOrdersQuery } from "@src/redux/api/order-api-slice";
import { useParams, usePathname } from "next/navigation";

import styles from "./orders-menu.module.scss";
import Link from "next/link";
import { cn } from "@src/shared/lib/cn";

export const OrdersMenu = () => {
  const pathname = usePathname();
  const orderId = Number(useParams().order);

  const { data: orders = [] } = useClientActiveOrdersQuery();
  const { data: chats = [] } = useGetChatsQuery();

  if (!pathname.startsWith("/account/orders")) return null;

  const orderChats = chats.filter((chat) => chat.orderId === orderId);

  return (
    <ul className={cn("text-ellipsis overflow-hidden")}>
      {orders.map((order) => {
        return (
          <li key={order.id}>
            <Link
              href={`/account/orders/${order.id}`}
              type="button"
              className={"flex gap-2 items-center pl-8"}
              onClick={() => {}}
            >
              <div
                className={cn(
                  "whitespace-pre-wrap",
                  styles.secondLevelLink__arrow,
                  pathname.startsWith(`/account/orders/${order.id}`) && styles.secondLevelLink__arrow_opened
                )}
                style={{
                  lineBreak: "anywhere",
                }}
              />

              <p>{order.name}</p>
            </Link>
            {orderId === order.id && (
              <ul className="my-2">
                {orderChats.map((chat) => (
                  <li key={chat.id}>
                    <Link
                      href={`/account/orders/${order.id}/chats/${chat.id}`}
                      type="button"
                      className={"flex gap-2 items-center pl-16 border-l-4 border-yellow bg-scramble py-2 pr-2"}
                      onClick={() => {}}
                    >
                      <p>{chat.name}</p>
                      <span className="w-2 h-2 bg-green-300 rounded-full shrink-0"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};
