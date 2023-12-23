import { FirstLevelMenuItemProps, SecondLevelMenuItemProps } from "@src/components/layouts/account-layout/sidebar";
import { myOffers } from "../data/my-offer";

export const URLS_PERFORMER_ACCOUNT = {
    "customer-orders": "customer-orders",
    "my-offer": "my-offer",
    chats: "chats",
    archives: "archives",
    settings: "settings",
    help: "help",
};

export const PATH_PERFORMER_ACCOUNT_PAGE = "performer-account";

const secondMenuItems = myOffers.map((item) => {
    if (item.offerType === "notReviewed") {
        return;
    }

    return {
        id: item.id,
        name: item.name,
        count: item.unreadMessages,
    };
});

const SECOND_LEVEL_MENU = {
    menuItems: secondMenuItems,
    alias: "order",
    type: "selected",
} as SecondLevelMenuItemProps;

export const CLIENT_ACCOUNT_MENU: FirstLevelMenuItemProps[] = [
    { alias: URLS_PERFORMER_ACCOUNT["customer-orders"], name: "Заказы клиентов", iconGlyph: "customerOrders" },
    {
        alias: URLS_PERFORMER_ACCOUNT["my-offer"],
        name: "Мои предложения",
        iconGlyph: "couch",
        secondLevelMenu: SECOND_LEVEL_MENU,
    },
    { alias: URLS_PERFORMER_ACCOUNT.chats, name: "Чаты", iconGlyph: "chats" },
    { alias: URLS_PERFORMER_ACCOUNT.archives, name: "Архивы", iconGlyph: "archives" },
    { alias: URLS_PERFORMER_ACCOUNT.settings, name: "Настройки", iconGlyph: "settings" },
    { alias: URLS_PERFORMER_ACCOUNT.help, name: "Помощь", iconGlyph: "help" },
];
