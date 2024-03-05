import { TMenuItem } from "@src/components/layouts/account-layout/sidebar";
import { Icon } from "@src/components/icon";

const PAGE_LINK = "/account";

export const EXECUTOR_MENU_ITEMS: TMenuItem[] = [
  {
    id: 1,
    alias: `${PAGE_LINK}/customer-orders`,
    name: "Заказы клиентов",
    icon: <Icon style={{ marginRight: "8px" }} glyph="customerOrders" />,
  },
  {
    id: 2,
    alias: `${PAGE_LINK}/my-offer`,
    name: "Мои предложения",
    icon: <Icon style={{ marginRight: "8px" }} glyph="couch" />,
  },
  {
    id: 3,
    alias: `${PAGE_LINK}/chats`,
    name: "Чаты",
    icon: <Icon style={{ marginRight: "8px" }} glyph="chats" />,
  },
  {
    id: 4,
    alias: `${PAGE_LINK}/archives`,
    name: "Архивы",
    icon: <Icon style={{ marginRight: "8px" }} glyph="archives" />,
  },
  {
    id: 5,
    alias: `${PAGE_LINK}/settings`,
    name: "Настройки",
    icon: <Icon style={{ marginRight: "8px" }} glyph="settings" />,
  },
  {
    id: 6,
    alias: `${PAGE_LINK}/help`,
    name: "Помощь",
    icon: <Icon style={{ marginRight: "8px" }} glyph="help" />,
  },
];
