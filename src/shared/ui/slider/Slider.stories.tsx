import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta = {
    title: "UI/Slider",
    component: Slider,
    parameters: {
        layout: "padded",
    },
    /*    tags: ["autodocs"],
    argTypes: {
        items: {
            name: "items",
            defaultValue: 4,
            description: "Ширина карточки в px / %",
            table: {
                type: { summary: "string | undefined" },
                defaultValue: { summary: "804px" },
            },
        },
        height: {
            name: "height",
            defaultValue: "326px",
            description: "Высота карточки в px / %",
            table: {
                type: { summary: "string | undefined" },
                defaultValue: { summary: "326px" },
            },
        },
        src: {
            name: "src",
            defaultValue:
                "https://mykaleidoscope.ru/uploads/posts/2020-02/1582123670_42-p-udobnii-dizain-malenkikh-kukhon-81.jpg",
            description: "Ссылка на изображение",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "" },
            },
        },
        alt: {
            name: "alt",
            defaultValue: "Изображение товара",
            description: "Альтернативный текст",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "Изображение товара" },
            },
        },
        object: {
            name: "object",
            defaultValue: "Товар",
            description: "Название товара",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "Товар" },
            },
        },
        price: {
            name: "price",
            defaultValue: "1000 р",
            description: "Цена товара",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "1000 р" },
            },
        },
    },*/
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        slides: [
            {
                slideItems: [
                    {
                        src: "https://sun9-57.userapi.com/impf/c638220/v638220304/2351c/Jl_pfu38vNc.jpg?size=604x452&quality=96&sign=690dd73d786aaeea277b8707fc40ee81&c_uniq_tag=Ud9Z4iy3giwrdrUnfQE1o7mAv5Nw993VvMqRWp6rgY0&type=album",
                        alt: "logo-nightstand1",
                        object: "Полка1",
                        price: "1001 р",
                    },
                    {
                        src: "https://30.img.avito.st/image/1/1.s_CNXba5Hxm79N0c53ea2Xn-GRM5fhfbPP4dHTH0FRs.52YXp-OFCHU0hXp6Qf4c74-UqDPhemGMJyVDoVbQDvc",
                        alt: "logo-nightstand2",
                        object: "Полка2",
                        price: "1002 р",
                    },
                    {
                        src: "/home/slide02.jpg",
                        alt: "logo-nightstand3",
                        object: "Полка3",
                        price: "1003 р",
                    },
                    {
                        src: "/home/slide03.jpg",
                        alt: "logo-nightstand4",
                        object: "Полка4",
                        price: "1004 р",
                    },
                ],
            },
        ],
    },
};
