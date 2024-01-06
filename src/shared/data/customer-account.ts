import { StaticImageData } from "next/image";
import desk from "@public/account/desk.jpg";
import slide from "@public/home/s_slide00.jpg";

export type OrdersProps = {
    id: number;
    name: string;
    order_time: string;
    state: stateOrders;
    countPerformers: number;
    files: string[];
};

export type PerformersProps = {
    id: number;
    termOfExecution: string;
    price: string;
    showGallery: true;
    name: string;
    images: StaticImageData[];
};

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
] as OrdersProps[];

export const performers = [
    {
        id: 1,
        termOfExecution: "45-50 дней",
        images: [desk, desk, slide],
        price: "от 120000 руб",
        name: "Полка настенная",
    },
    {
        id: 2,
        termOfExecution: "70",
        images: [],
        price: "от 120000 руб",
        name: "Комод",
    },
] as PerformersProps[];
