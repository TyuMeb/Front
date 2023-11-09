export interface ordersI {
    id: number;
    name: string;
    order_time: string;
    state: stateOrders;
    countPerformers: number;
    files: string[];
}

export interface performersI {
    id: number;
    termOfExecution: string;
    cost: string;
    showGallery: true;
}

enum stateOrders {
    draft = "draft",
    offer = "offer",
    selected = "selected",
    completed = "completed",
}

export const orders = [
    {
        id: 1,
        name: "Полка  настенная",
        order_time: "24.04.2024",
        state: stateOrders.draft,
        countPerformers: 2,
        files: ["idFileOne", "idFileTwo"],
    },
    {
        id: 2,
        name: "Комод",
        order_time: "24.04.2024",
        state: stateOrders.offer,
        countPerformers: 2,
        files: [],
    },
] as ordersI[];

export const performers = [
    {
        id: 1,
        termOfExecution: "30 дней",
        cost: "от 120000 руб",
        showGallery: true,
    },
    {
        id: 2,
        termOfExecution: "45-50 дней",
        cost: "от 100000 руб",
        showGallery: true,
    },
] as performersI[];
