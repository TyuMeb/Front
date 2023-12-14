import { firstLevelMenuItemProps } from "@src/components/layouts/account-layout/sidebar";

export const URLS_CUSTOMER_ACCOUNT = {
    "my-orders": "my-orders",
    chats: "chats",
    archives: "archives",
    settings: "settings",
    help: "help",
    "add-order": "/",
};

export const PATH_CUSTOMER_ACCOUNT_PAGE = "customer-account";

export const CLIENT_ACCOUNT_MENU: firstLevelMenuItemProps[] = [
    { alias: URLS_CUSTOMER_ACCOUNT["my-orders"], name: "Мои заказы", iconGlyph: "couch" },
    { alias: URLS_CUSTOMER_ACCOUNT.chats, name: "Чаты", iconGlyph: "chats" },
    { alias: URLS_CUSTOMER_ACCOUNT.archives, name: "Архивы", iconGlyph: "archives" },
    { alias: URLS_CUSTOMER_ACCOUNT.settings, name: "Настройки", iconGlyph: "settings" },
    { alias: URLS_CUSTOMER_ACCOUNT.help, name: "Помощь", iconGlyph: "help" },
    { alias: URLS_CUSTOMER_ACCOUNT["add-order"], name: "Сделать заказ", iconGlyph: "add" },
];
