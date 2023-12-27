import {
    FirstMenuItems,
    NestedMenuItems,
    SecondLevelMenu,
    ThirdLevelMenu,
} from "@src/components/layouts/account-layout/sidebar";
import {
    FirstBreadcrumbsItems,
    SecondBreadcrumbsItems,
    ThirdBreadcrumbsItems,
} from "@src/components/layouts/account-layout/breadcrumbs";
import { orders, performers } from "@src/shared/data/customer-account";

export const PATH_CUSTOMER_ACCOUNT_PAGE = "/customer-account";

export const URLS_CUSTOMER_ACCOUNT = {
    "my-orders": "my-orders",
    chats: "chats",
    archives: "archives",
    settings: "settings",
    help: "help",
    "add-order": "/",
};

const thirdMenuItems = [] as NestedMenuItems[];
const thirdBreadcrumbsItems = [] as ThirdBreadcrumbsItems[];

performers.forEach((item, i) => {
    thirdMenuItems.push({
        id: item.id,
        name: `Исполнитель ${i + 1}`,
    });

    thirdBreadcrumbsItems.push({
        id: item.id,
        name: `чат с исполнителем ${i + 1}`,
    });
});

const secondMenuItems = [] as NestedMenuItems[];
const secondBreadcrumbsItems = [] as SecondBreadcrumbsItems[];

orders.forEach((item) => {
    secondMenuItems.push({
        id: item.id,
        name: item.name,
        count: item.countPerformers,
    });

    secondBreadcrumbsItems.push({
        id: item.id,
        name: item.name,
        thirdBreadcrumbs: thirdBreadcrumbsItems,
    });
});

const THIRD_LEVEL_MENU = { menuItems: thirdMenuItems, alias: "performer", type: "selected" } as ThirdLevelMenu;

const SECOND_LEVEL_MENU = {
    menuItems: secondMenuItems,
    alias: "order",
    type: "expanded",
    thirdLevelMenu: THIRD_LEVEL_MENU,
} as SecondLevelMenu;

export const CLIENT_ACCOUNT_MENU: FirstMenuItems[] = [
    {
        alias: `${PATH_CUSTOMER_ACCOUNT_PAGE}/${URLS_CUSTOMER_ACCOUNT["my-orders"]}`,
        name: "Мои заказы",
        iconGlyph: "couch",
        secondLevelMenu: SECOND_LEVEL_MENU,
    },
    {
        alias: `${PATH_CUSTOMER_ACCOUNT_PAGE}/${URLS_CUSTOMER_ACCOUNT.chats}`,
        name: "Чаты",
        iconGlyph: "chats",
    },
    {
        alias: `${PATH_CUSTOMER_ACCOUNT_PAGE}/${URLS_CUSTOMER_ACCOUNT.archives}`,
        name: "Архивы",
        iconGlyph: "archives",
    },
    {
        alias: `${PATH_CUSTOMER_ACCOUNT_PAGE}/${URLS_CUSTOMER_ACCOUNT.settings}`,
        name: "Настройки",
        iconGlyph: "settings",
    },
    {
        alias: `${PATH_CUSTOMER_ACCOUNT_PAGE}/${URLS_CUSTOMER_ACCOUNT.help}`,
        name: "Помощь",
        iconGlyph: "help",
    },
    { alias: URLS_CUSTOMER_ACCOUNT["add-order"], name: "Сделать заказ", iconGlyph: "add" },
];

export const getBreadcrumbs = () => {
    const breadcrumbs = [] as FirstBreadcrumbsItems[];

    CLIENT_ACCOUNT_MENU.forEach((item) => {
        const items = {} as FirstBreadcrumbsItems;

        if (item.secondLevelMenu) {
            items.secondBreadcrumbs = secondBreadcrumbsItems;
        }

        breadcrumbs.push({
            ...items,
            alias: item.alias,
            name: item.name,
        });
    });

    return breadcrumbs;
};
