import { TMenuItem } from "@src/components/layouts/account-layout/sidebar";
import { Icon } from "@src/components/icon";

const PAGE_LINK = "/account";

type ExecutorPages = {
  customerOrders: TMenuItem;
  myOffer: TMenuItem;
  chats: TMenuItem;
  archives: TMenuItem;
  settings: TMenuItem;
  help: TMenuItem;
};

export const EXECUTOR_PAGES: ExecutorPages = {
  customerOrders: {
    id: 1,
    alias: `${PAGE_LINK}/customer-orders`,
    name: "Заказы клиентов",
    icon: <Icon style={{ marginRight: "8px" }} glyph="customerOrders" />,
  },
  myOffer: {
    id: 2,
    alias: `${PAGE_LINK}/my-offer`,
    name: "Мои предложения",
    icon: <Icon style={{ marginRight: "8px" }} glyph="couch" />,
  },
  chats: {
    id: 3,
    alias: `${PAGE_LINK}/chats`,
    name: "Чаты",
    icon: <Icon style={{ marginRight: "8px" }} glyph="chats" />,
  },
  archives: {
    id: 4,
    alias: `${PAGE_LINK}/archives`,
    name: "Архивы",
    icon: <Icon style={{ marginRight: "8px" }} glyph="archives" />,
  },
  settings: {
    id: 5,
    alias: `${PAGE_LINK}/settings`,
    name: "Настройки",
    icon: <Icon style={{ marginRight: "8px" }} glyph="settings" />,
  },
  help: {
    id: 6,
    alias: `${PAGE_LINK}/help`,
    name: "Помощь",
    icon: <Icon style={{ marginRight: "8px" }} glyph="help" />,
  },
};

export const EXECUTOR_MENU_ITEMS = Object.values(EXECUTOR_PAGES);
