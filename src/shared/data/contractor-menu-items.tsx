import { TMenuItem } from "@src/components/layouts/account-layout/sidebar";
import { Icon } from "@src/components/icon";

export const CONTRACTOR_MENU_ITEMS: TMenuItem[] = [
  {
    id: 1,
    alias: "/customer-orders",
    name: "Заказы клиентов",
    icon: <Icon style={{ marginRight: "8px" }} glyph="customerOrders" />,
  },
  { id: 2, alias: "/my-offer", name: "Мои предложения", icon: <Icon style={{ marginRight: "8px" }} glyph="couch" /> },
  { id: 3, alias: "/chats", name: "Чаты", icon: <Icon style={{ marginRight: "8px" }} glyph="chats" /> },
  { id: 4, alias: "/archives", name: "Архивы", icon: <Icon style={{ marginRight: "8px" }} glyph="archives" /> },
  { id: 5, alias: "/settings", name: "Настройки", icon: <Icon style={{ marginRight: "8px" }} glyph="settings" /> },
  { id: 6, alias: "/help", name: "Помощь", icon: <Icon style={{ marginRight: "8px" }} glyph="help" /> },
  { id: 7, alias: "/new-offer", name: "Сделать заказ", icon: <Icon style={{ marginRight: "8px" }} glyph="add" /> },
];
