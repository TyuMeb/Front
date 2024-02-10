import { MenuItem } from "@src/components/layouts/account-layout/sidebar";
import { Icon } from "@src/components/icon";
import { OrdersMenu } from "../orders-menu";
import { OffersMenu } from "../offers-menu";

export const CUSTOMER_MENU_ITEMS: MenuItem[] = [
  { href: "/account/orders", name: "Мои заказы", icon: <Icon style={{ marginRight: "8px" }} glyph="couch" /> },
  {
    children: <OrdersMenu />,
  },
  { href: "/account/chats", name: "Чаты", icon: <Icon style={{ marginRight: "8px" }} glyph="chats" /> },
  { href: "/account/archives", name: "Архивы", icon: <Icon style={{ marginRight: "8px" }} glyph="archives" /> },
  { href: "/account/settings", name: "Настройки", icon: <Icon style={{ marginRight: "8px" }} glyph="settings" /> },
  { href: "/account/help", name: "Помощь", icon: <Icon style={{ marginRight: "8px" }} glyph="help" /> },
  { href: "/order", name: "Сделать заказ", icon: <Icon style={{ marginRight: "8px" }} glyph="add" /> },
];

export const CONTRACTOR_MENU_ITEMS: MenuItem[] = [
  { href: "/account/offers", name: "Мои предложения", icon: <Icon style={{ marginRight: "8px" }} glyph="couch" /> },
  {
    children: <OffersMenu />,
  },
  { href: "/account/chats", name: "Чаты", icon: <Icon style={{ marginRight: "8px" }} glyph="chats" /> },
  { href: "/account/archives", name: "Архивы", icon: <Icon style={{ marginRight: "8px" }} glyph="archives" /> },
  { href: "/account/settings", name: "Настройки", icon: <Icon style={{ marginRight: "8px" }} glyph="settings" /> },
  { href: "/account/help", name: "Помощь", icon: <Icon style={{ marginRight: "8px" }} glyph="help" /> },
];
