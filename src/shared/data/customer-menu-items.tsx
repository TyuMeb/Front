import { TMenuItem } from "@src/components/layouts/account-layout/sidebar";
import { Icon } from "@src/components/icon";

const PAGE_LINK = "/account";

export const CUSTOMER_MENU_ITEMS: TMenuItem[] = [
  {
    id: 1,
    alias: `${PAGE_LINK}/my-orders`,
    name: "Мои заказы",
    icon: <Icon style={{ marginRight: "8px" }} glyph="couch" />,
  },
  {
    id: 2,
    alias: `${PAGE_LINK}/chats`,
    name: "Чаты",
    icon: <Icon style={{ marginRight: "8px" }} glyph="chats" />,
  },
  {
    id: 3,
    alias: `${PAGE_LINK}/archives`,
    name: "Архивы",
    icon: <Icon style={{ marginRight: "8px" }} glyph="archives" />,
  },
  {
    id: 4,
    alias: `${PAGE_LINK}/settings`,
    name: "Настройки",
    icon: <Icon style={{ marginRight: "8px" }} glyph="settings" />,
  },
  {
    id: 5,
    alias: `${PAGE_LINK}/help`,
    name: "Помощь",
    icon: <Icon style={{ marginRight: "8px" }} glyph="help" />,
  },
  {
    id: 6,
    alias: "/order",
    name: "Сделать заказ",
    icon: <Icon style={{ marginRight: "8px" }} glyph="add" />,
  },
];
