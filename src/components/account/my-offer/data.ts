import desk from "@public/account/desk.jpg";
import slide from "@public/home/s_slide00.jpg";
import { createFilePdf } from "@src/helpers/createFilePdf";
import { StaticImageData } from "next/image";

export type OfferType = "processing" | "notReviewed" | "notSelected";

type Description = {
    date: string;
    price: string;
    termOfExecution: string;
    countOffer: string;
    task: string;
};

export type MyOffers = {
    id: string;
    title: string;
    offerType: OfferType;
    images?: StaticImageData[];
    description: Description;
    files?: File[];
};

export const myOffers = [
    {
        id: "1",
        title: "Полка настенная",
        offerType: "processing",
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
        id: "2",
        title: "Полка c зеркалом",
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
        id: "3",
        title: "Комод",
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
