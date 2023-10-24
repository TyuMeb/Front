import type { Meta, StoryObj } from "@storybook/react";
import { NumberItem } from "./NumberItem";

const meta = {
    title: "UI/NumberItem",
    component: NumberItem,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        caption: {
            name: "caption",
            defaultValue: "1",
            description: "Отображаемое значение (макс первые 3 цифры)",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "1" },
            },
        },
    },
} satisfies Meta<typeof NumberItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        caption: "1",
    },
};
