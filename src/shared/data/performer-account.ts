import desk from "@public/account/desk.jpg";
import slide from "@public/home/s_slide00.jpg";
import { createFilePdf } from "@src/helpers/createFilePdf";
import { StaticImageData } from "next/image";

export type OfferType = "processing" | "notReviewed" | "notSelected";

type DescriptionOffer = {
    date: string;
    price: string;
    termOfExecution: string;
    countOffer: string;
    task: string;
};

export type MyOffers = {
    id: number;
    name: string;
    customer: string;
    offerType: OfferType;
    unreadMessages?: number;
    images?: StaticImageData[];
    description: DescriptionOffer;
    files?: File[];
};

type DescriptionOrder = {
    date: string;
    countOffer: string;
    task: string;
};

export type CustomerOrdersItems = {
    id: number;
    name: string;
    offerType: OfferType;
    images?: StaticImageData[];
    description: DescriptionOrder;
    files?: File[];
};

export const myOffers = [
    {
        id: 1,
        name: "Полка настенная",
        customer: "Анна Ф.",
        offerType: "processing",
        unreadMessages: 1,
        images: [desk, desk, slide],
        description: {
            date: "24.04.2024",
            price: "от 100 000 руб",
            termOfExecution: "45-50 дней",
            countOffer: "22 заявки",
            task: "Хочу сделать полку для спальни, дуб, лаковое покрытие, с креплениями, возможно в дальнейшем серию полок для всего дома",
        },
        files: [createFilePdf(), createFilePdf()],
    },
    {
        id: 2,
        name: "Полка c зеркалом",
        customer: "Вася Ф.",
        offerType: "notReviewed",
        description: {
            date: "24.04.2024",
            price: "от 100 000 руб",
            termOfExecution: "45-50 дней",
            countOffer: "22 заявки",
            task: "Хочу сделать полку для спальни, дуб, лаковое покрытие, с креплениями, возможно в дальнейшем серию полок для всего дома",
        },
        files: [createFilePdf(), createFilePdf()],
    },
    {
        id: 3,
        name: "Комод",
        customer: "Вася Ф.",
        offerType: "notSelected",
        description: {
            date: "24.04.2024",
            price: "от 100 000 руб",
            termOfExecution: "45-50 дней",
            countOffer: "22 заявки",
            task: "Хочу сделать полку для спальни, дуб, лаковое покрытие, с креплениями, возможно в дальнейшем серию полок для всего дома",
        },
    },
] as MyOffers[];

export const customerOrders = [
    {
        id: 1,
        name: "Полка настенная",
        offerType: "processing",
        images: [desk, desk, slide],
        description: {
            date: "24.04.2024",
            countOffer: "22 заявки",
            task: "Хочу сделать полку для спальни, дуб, лаковое покрытие, с креплениями, возможно в дальнейшем серию полок для всего дома",
        },
        files: [createFilePdf(), createFilePdf()],
    },
    {
        id: 2,
        name: "Шкаф-купе",
        offerType: "notReviewed",
        description: {
            date: "24.04.2024",
            countOffer: "22 заявки",
            task: "Хочу сделать полку для спальни, дуб, лаковое покрытие, с креплениями, возможно в дальнейшем серию полок для всего дома",
        },
        files: [createFilePdf(), createFilePdf()],
    },
] as CustomerOrdersItems[];
