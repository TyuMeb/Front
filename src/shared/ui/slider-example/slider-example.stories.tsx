import type { Meta, StoryObj } from "@storybook/react";
import { SliderExample } from "./slider-example";

const meta = {
    title: "UI/SliderExample",
    component: SliderExample,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {
        disabled: {
            name: "disabled",
            type: { name: "boolean", required: false },
            defaultValue: "false",
            description: "Вариант disabled",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "false" },
            },
            options: ["false", "true"],
        },
        auto: {
            name: "auto",
            type: { name: "boolean", required: false },
            defaultValue: "true",
            description: "Автоматическое перелистывание (true - вкл, false - выкл)",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "true" },
            },
            options: ["false", "true"],
        },
        slideRight: {
            name: "slideRight",
            type: { name: "boolean", required: false },
            defaultValue: "false",
            description: "Направление пролистывания (если false то влево, если true то вправо)",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "false" },
            },
            options: ["false", "true"],
        },
        delay: {
            name: "delay",
            type: { name: "number", required: false },
            defaultValue: 4,
            description: "Пауза между перелистываниями в секундах (по умолчанию 4 с)",
            table: {
                type: { summary: "number" },
                defaultValue: { summary: 4 },
            },
        },
    },
} satisfies Meta<typeof SliderExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        disabled: false,
        slideRight: false,
        delay: 4,
        auto: true,
        slides: [
            {
                items: [
                    {
                        id: 1,
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-16.jpg",
                        alt: "Какой-то текст 1",
                        name: "Товар 1",
                        price: "1001 р",
                    },
                    {
                        id: 2,
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-2.jpg",
                        alt: "Какой-то текст 2",
                        name: "Товар 2",
                        price: "1002 р",
                    },
                    {
                        id: 3,
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-3.jpg",
                        alt: "Какой-то текст 3",
                        name: "Товар 3",
                        price: "1003 р",
                    },
                    {
                        id: 4,
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/4179-1-1-2.jpg",
                        alt: "Какой-то текст 4",
                        name: "Товар 4",
                        price: "1004 р",
                    },
                ],
            },
            {
                items: [
                    {
                        id: 5,
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-4.jpg",
                        alt: "Какой-то текст 5",
                        name: "Товар 5",
                        price: "1005 р",
                    },
                    {
                        id: 6,
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-6.jpg",
                        alt: "Какой-то текст 6",
                        name: "Товар 6",
                        price: "1006 р",
                    },
                    {
                        id: 7,
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg",
                        alt: "Какой-то текст 7",
                        name: "Товар 7",
                        price: "1007 р",
                    },
                    {
                        id: 8,
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-3.jpg",
                        alt: "Какой-то текст 8",
                        name: "Товар 8",
                        price: "1008 р",
                    },
                ],
            },
            {
                items: [
                    {
                        id: 9,
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-4.jpg",
                        alt: "Какой-то текст 5",
                        name: "Товар 5",
                        price: "1005 р",
                    },
                    {
                        id: 101,
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-6.jpg",
                        alt: "Какой-то текст 6",
                        name: "Товар 6",
                        price: "1006 р",
                    },
                    {
                        id: 11,
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg",
                        alt: "Какой-то текст 7",
                        name: "Товар 7",
                        price: "1007 р",
                    },
                    {
                        id: 12,
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-3.jpg",
                        alt: "Какой-то текст 8",
                        name: "Товар 8",
                        price: "1008 р",
                    },
                ],
            },
            {
                items: [
                    {
                        id: 13,
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-4.jpg",
                        alt: "Какой-то текст 5",
                        name: "Товар 5",
                        price: "1005 р",
                    },
                    {
                        id: 14,
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-6.jpg",
                        alt: "Какой-то текст 6",
                        name: "Товар 6",
                        price: "1006 р",
                    },
                    {
                        id: 15,
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg",
                        alt: "Какой-то текст 7",
                        name: "Товар 7",
                        price: "1007 р",
                    },
                    {
                        id: 16,
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-3.jpg",
                        alt: "Какой-то текст 8",
                        name: "Товар 8",
                        price: "1008 р",
                    },
                ],
            },
        ],
    },
};
