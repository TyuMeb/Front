import type { Meta, StoryObj } from "@storybook/react";
import { SliderUser } from "./slider-user";
import { USER_SLIDER_TEST_DATA } from "@src/shared/data/userSliderTestData";

const meta = {
    title: "UI/SliderUser",
    component: SliderUser,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            name: "variant",
            type: { name: "enum", value: ["small", "big"] },
            defaultValue: "small",
            description: "Вариант слайдера (small - для фото / big - для продукта)",
            table: {
                type: { summary: "variant" },
                defaultValue: { summary: "small" },
            },
            options: ["small", "big"],
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
        variant: "small",
        slides: USER_SLIDER_TEST_DATA,
    },
};
