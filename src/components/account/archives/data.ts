import desk from "@public/account/desk.jpg";
import slide from "@public/home/s_slide00.jpg";
import { StaticImageData } from "next/image";

export type Status = "processing" | "notReviewed" | "notSelected";

type Description = {
    date: string;
    status: Status;
    countOffer: string;
};

export type Orders = {
    id: string;
    title: string;
    images?: StaticImageData[];
    description: Description;
    files?: File[];
};

export const orders = [
    {
        id: "1",
        title: "Комод",
        images: [desk, desk, slide],
        description: {
            date: "24.04.2024",
            countOffer: "0",
        },
    },
    {
        id: "2",
        title: "Полка настенная",
        description: {
            date: "24.04.2024",
            countOffer: "4",
        },
    },
] as Orders[];
