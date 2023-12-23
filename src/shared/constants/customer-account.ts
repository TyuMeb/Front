import {
    FirstLevelMenuItemProps,
    SecondLevelMenuItemProps,
    ThirdLevelMenuItemProps,
} from "@src/components/layouts/account-layout/sidebar";
import { orders, performers } from "@src/shared/data/account";

export const URLS_CUSTOMER_ACCOUNT = {
    "my-orders": "my-orders",
    chats: "chats",
    archives: "archives",
    settings: "settings",
    help: "help",
    "add-order": "/",
};

export const PATH_CUSTOMER_ACCOUNT_PAGE = "customer-account";

const secondMenuItems = orders.map((item) => ({
    id: item.id,
    name: item.name,
    count: item.countPerformers,
}));

const thirdMenuItems = performers.map((item, i) => ({
    id: item.id,
    name: `Исполнитель ${i + 1}`,
}));

const THIRD_LEVEL_MENU = { menuItems: thirdMenuItems, alias: "order", type: "selected" } as ThirdLevelMenuItemProps;

const SECOND_LEVEL_MENU = {
    menuItems: secondMenuItems,
    alias: "order",
    type: "expanded",
    thirdLevelMenu: THIRD_LEVEL_MENU,
} as SecondLevelMenuItemProps;

export const CLIENT_ACCOUNT_MENU: FirstLevelMenuItemProps[] = [
    {
        alias: URLS_CUSTOMER_ACCOUNT["my-orders"],
        name: "Мои заказы",
        iconGlyph: "couch",
        secondLevelMenu: SECOND_LEVEL_MENU,
    },
    { alias: URLS_CUSTOMER_ACCOUNT.chats, name: "Чаты", iconGlyph: "chats" },
    { alias: URLS_CUSTOMER_ACCOUNT.archives, name: "Архивы", iconGlyph: "archives" },
    { alias: URLS_CUSTOMER_ACCOUNT.settings, name: "Настройки", iconGlyph: "settings" },
    { alias: URLS_CUSTOMER_ACCOUNT.help, name: "Помощь", iconGlyph: "help" },
    { alias: URLS_CUSTOMER_ACCOUNT["add-order"], name: "Сделать заказ", iconGlyph: "add" },
];
