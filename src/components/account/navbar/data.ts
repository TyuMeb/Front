export interface executorsI {
    id: number;
    alias: string;
    name: string;
}

export interface ordersI {
    id: number;
    alias: string;
    name: string;
    executors: executorsI[];
}

export const orders = [
    {
        id: 1,
        alias: "wall_shelf",
        name: "Полка  настенная",
        executors: [
            {
                id: 1,
                alias: "schattdecor_AG",
                name: "Schattdecor AG",
            },
            {
                id: 1,
                alias: "three_beavers",
                name: "Мебельная фабрика Три Бобра",
            },
        ],
    },
    {
        id: 2,
        alias: "dresser",
        name: "Комод",
        executors: [
            {
                id: 1,
                alias: "schattdecor_AG",
                name: "Schattdecor AG",
            },
        ],
    },
];
