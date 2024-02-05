import { TMenuItem } from "@src/components/layouts/account-layout/sidebar";
import { Icon } from "@src/components/icon";

export const CUSTOMER_ACCOUNT_MENU_CONFIG: TMenuItem[] = [
  { id: 1, alias: "/my-orders", name: "Мои заказы", icon: <Icon style={{ marginRight: "8px" }} glyph="couch" /> },
  { id: 2, alias: "/chats", name: "Чаты", icon: <Icon style={{ marginRight: "8px" }} glyph="chats" /> },
  { id: 3, alias: "/archives", name: "Архивы", icon: <Icon style={{ marginRight: "8px" }} glyph="archives" /> },
  { id: 4, alias: "/settings", name: "Настройки", icon: <Icon style={{ marginRight: "8px" }} glyph="settings" /> },
  { id: 5, alias: "/help", name: "Помощь", icon: <Icon style={{ marginRight: "8px" }} glyph="help" /> },
  { id: 6, alias: "/help1", name: "Сделать заказ", icon: <Icon style={{ marginRight: "8px" }} glyph="add" /> },
];
