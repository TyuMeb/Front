import { FirstMenuItems, NestedMenuItems, SecondLevelMenu } from "@src/components/layouts/account-layout/sidebar";
import {
    FirstBreadcrumbsItems,
    SecondBreadcrumbsItems,
    ThirdBreadcrumbsItems,
} from "@src/components/layouts/account-layout/breadcrumbs";
import { myOffers, customerOrders } from "@src/shared/data/performer-account";

export const URLS_PERFORMER_ACCOUNT = {
    "customer-orders": "customer-orders",
    "my-offer": "my-offer",
    chats: "chats",
    archives: "archives",
    settings: "settings",
    help: "help",
};

export const PATH_PERFORMER_ACCOUNT_PAGE = "/performer-account";

const secondMenuItems = [] as NestedMenuItems[];
const secondBreadcrumbsItems = [] as SecondBreadcrumbsItems[];
const thirdBreadcrumbsItems = [] as ThirdBreadcrumbsItems[];

myOffers.forEach((item) => {
    if (item.offerType === "notReviewed") {
        return;
    }

    secondMenuItems.push({
        id: item.id,
        name: item.name,
        count: item.unreadMessages,
    });

    secondBreadcrumbsItems.push({
        id: item.id,
        name: item.name.toLocaleLowerCase(),
        attached: `чат с ${item.customer}`,
        thirdBreadcrumbs: thirdBreadcrumbsItems,
    });
});

const customerOrdersItems = customerOrders.map((item) => ({
    id: item.id,
    name: `Предложение. ${item.name}`,
}));

const SECOND_LEVEL_MENU = {
    menuItems: secondMenuItems,
    alias: "order",
    type: "selected",
} as SecondLevelMenu;

export const CLIENT_ACCOUNT_MENU: FirstMenuItems[] = [
    {
        alias: `${PATH_PERFORMER_ACCOUNT_PAGE}/${URLS_PERFORMER_ACCOUNT["customer-orders"]}`,
        name: "Заказы клиентов",
        iconGlyph: "customerOrders",
    },
    {
        alias: `${PATH_PERFORMER_ACCOUNT_PAGE}/${URLS_PERFORMER_ACCOUNT["my-offer"]}`,
        name: "Мои предложения",
        iconGlyph: "couch",
        secondLevelMenu: SECOND_LEVEL_MENU,
    },
    {
        alias: `${PATH_PERFORMER_ACCOUNT_PAGE}/${URLS_PERFORMER_ACCOUNT.chats}`,
        name: "Чаты",
        iconGlyph: "chats",
    },
    {
        alias: `${PATH_PERFORMER_ACCOUNT_PAGE}/${URLS_PERFORMER_ACCOUNT.archives}`,
        name: "Архивы",
        iconGlyph: "archives",
    },
    {
        alias: `${PATH_PERFORMER_ACCOUNT_PAGE}/${URLS_PERFORMER_ACCOUNT.settings}`,
        name: "Настройки",
        iconGlyph: "settings",
    },
    {
        alias: `${PATH_PERFORMER_ACCOUNT_PAGE}/${URLS_PERFORMER_ACCOUNT.help}`,
        name: "Помощь",
        iconGlyph: "help",
    },
];

export const getBreadcrumbs = () => {
    const breadcrumbs = [] as FirstBreadcrumbsItems[];

    CLIENT_ACCOUNT_MENU.forEach((item, i) => {
        const items = {} as FirstBreadcrumbsItems;

        if (item.secondLevelMenu) {
            items.secondBreadcrumbs = secondBreadcrumbsItems;
        }

        if (i === 0) {
            items.secondBreadcrumbs = customerOrdersItems;
        }

        breadcrumbs.push({
            ...items,
            alias: item.alias,
            name: item.name,
        });
    });

    return breadcrumbs;
};
