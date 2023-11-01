import { Meta, StoryObj } from "@storybook/react";
import { SliderControl } from "./slider-control";

const meta = {
    title: "UI/SliderControl",
    component: SliderControl,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        disabled: {
            name: "disabled",
            type: { name: "boolean", required: false },
            defaultValue: false,
            description: "Вариант disabled",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "false" },
            },
            options: ["false", "true"],
        },
    },
} satisfies Meta<typeof SliderControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        disabled: false,
    },
};
