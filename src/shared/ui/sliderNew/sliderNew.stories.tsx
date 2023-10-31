import type { Meta, StoryObj } from "@storybook/react";
import { SliderNew } from "./sliderNew";

const meta = {
    title: "UI/SliderNew",
    component: SliderNew,
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
    },
} satisfies Meta<typeof SliderNew>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        disabled: false,
        slides: [
            {
                items: [
                    {
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-16.jpg",
                        alt: "Какой-то текст 1",
                        object: "Товар 1",
                        price: "1001 р",
                    },
                    {
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-2.jpg",
                        alt: "Какой-то текст 2",
                        object: "Товар 2",
                        price: "1002 р",
                    },
                    {
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-3.jpg",
                        alt: "Какой-то текст 3",
                        object: "Товар 3",
                        price: "1003 р",
                    },
                    {
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/4179-1-1-2.jpg",
                        alt: "Какой-то текст 4",
                        object: "Товар 4",
                        price: "1004 р",
                    },
                ],
            },
            {
                items: [
                    {
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-4.jpg",
                        alt: "Какой-то текст 5",
                        object: "Товар 5",
                        price: "1005 р",
                    },
                    {
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-6.jpg",
                        alt: "Какой-то текст 6",
                        object: "Товар 6",
                        price: "1006 р",
                    },
                    {
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg",
                        alt: "Какой-то текст 7",
                        object: "Товар 7",
                        price: "1007 р",
                    },
                    {
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-3.jpg",
                        alt: "Какой-то текст 8",
                        object: "Товар 8",
                        price: "1008 р",
                    },
                ],
            },
            {
                items: [
                    {
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-4.jpg",
                        alt: "Какой-то текст 5",
                        object: "Товар 5",
                        price: "1005 р",
                    },
                    {
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-6.jpg",
                        alt: "Какой-то текст 6",
                        object: "Товар 6",
                        price: "1006 р",
                    },
                    {
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg",
                        alt: "Какой-то текст 7",
                        object: "Товар 7",
                        price: "1007 р",
                    },
                    {
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-3.jpg",
                        alt: "Какой-то текст 8",
                        object: "Товар 8",
                        price: "1008 р",
                    },
                ],
            },
            {
                items: [
                    {
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-4.jpg",
                        alt: "Какой-то текст 5",
                        object: "Товар 5",
                        price: "1005 р",
                    },
                    {
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-6.jpg",
                        alt: "Какой-то текст 6",
                        object: "Товар 6",
                        price: "1006 р",
                    },
                    {
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg",
                        alt: "Какой-то текст 7",
                        object: "Товар 7",
                        price: "1007 р",
                    },
                    {
                        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-3.jpg",
                        alt: "Какой-то текст 8",
                        object: "Товар 8",
                        price: "1008 р",
                    },
                ],
            },
        ],
    },
};
