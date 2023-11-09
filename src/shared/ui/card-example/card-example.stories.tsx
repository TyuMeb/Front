import type { Meta, StoryObj } from "@storybook/react";
import { CardExample } from "./card-example";

const meta = {
    title: "UI/CardExample",
    component: CardExample,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        width: {
            name: "width",
            defaultValue: "804px",
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
    },
} satisfies Meta<typeof CardExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "804px",
        height: "326px",
        src: "https://mykaleidoscope.ru/uploads/posts/2020-02/1582123670_42-p-udobnii-dizain-malenkikh-kukhon-81.jpg",
        alt: "",
        object: "Полка",
        price: "1000 р",
        id: 1,
    },
};
