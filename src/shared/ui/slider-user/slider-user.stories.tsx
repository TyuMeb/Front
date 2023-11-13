import type { Meta, StoryObj } from "@storybook/react";
import { SliderUser } from "./slider-user";

const meta = {
    title: "UI/SliderUser",
    component: SliderUser,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        photoSlider: {
            name: "photoSlider",
            type: { name: "boolean", required: false },
            defaultValue: false,
            description: "Вариант слайдера (true - для фото / false - для продукта)",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
            options: ["false", "true"],
        },
        itemsToShow: {
            name: "itemsToShow",
            type: { name: "number", required: false },
            defaultValue: 3,
            description: "Количество изображений (по умолчанию 3)",
            table: {
                type: { summary: "number" },
                defaultValue: { summary: 3 },
            },
        },
    },
} satisfies Meta<typeof SliderUser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        itemsToShow: 3,
        photoSlider: false,
        slides: [
            {
                src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-16.jpg",
                alt: "Какой-то текст 1",
            },
            {
                src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-2.jpg",
                alt: "Какой-то текст 2",
            },
            {
                src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-3.jpg",
                alt: "Какой-то текст 3",
            },
            {
                src: "https://ekbkupe.ru/images/stories/virtuemart/product/4179-1-1-2.jpg",
                alt: "Какой-то текст 4",
            },
            {
                src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-6.jpg",
                alt: "Какой-то текст 6",
            },
        ],
    },
};
