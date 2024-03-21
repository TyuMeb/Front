import { TMenuItem } from "@src/components/layouts/account-layout/sidebar";
import { Icon } from "@src/components/icon";

const PAGE_LINK = "/account";

type CustomerPages = {
  myOrders: TMenuItem;
  chats: TMenuItem;
  archives: TMenuItem;
  settings: TMenuItem;
  help: TMenuItem;
  order: TMenuItem;
};

export const CUSTOMER_PAGES: CustomerPages = {
  myOrders: {
    id: 1,
    alias: `${PAGE_LINK}/my-orders`,
    name: "Мои заказы",
    icon: <Icon style={{ marginRight: "8px" }} glyph="couch" />,
  },
  chats: {
    id: 2,
    alias: `${PAGE_LINK}/chats`,
    name: "Чаты",
    icon: <Icon style={{ marginRight: "8px" }} glyph="chats" />,
  },
  archives: {
    id: 3,
    alias: `${PAGE_LINK}/archives`,
    name: "Архивы",
    icon: <Icon style={{ marginRight: "8px" }} glyph="archives" />,
  },
  settings: {
    id: 4,
    alias: `${PAGE_LINK}/settings`,
    name: "Настройки",
    icon: <Icon style={{ marginRight: "8px" }} glyph="settings" />,
  },
  help: {
    id: 5,
    alias: `${PAGE_LINK}/help`,
    name: "Помощь",
    icon: <Icon style={{ marginRight: "8px" }} glyph="help" />,
  },
  order: {
    id: 6,
    alias: "/order",
    name: "Сделать заказ",
    icon: <Icon style={{ marginRight: "8px" }} glyph="add" />,
  },
};

export const CUSTOMER_MENU_ITEMS = Object.values(CUSTOMER_PAGES);
