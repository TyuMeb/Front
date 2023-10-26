import type { Meta, StoryObj } from "@storybook/react";
import { PriceItem } from "./priceItem";

const meta = {
    title: "UI/PriceItem",
    component: PriceItem,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        caption: {
            name: "caption",
            defaultValue: "1000 р",
            description: "Отображаемый текст",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "1000 р" },
            },
        },
    },
} satisfies Meta<typeof PriceItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        caption: "1000 р",
    },
};
