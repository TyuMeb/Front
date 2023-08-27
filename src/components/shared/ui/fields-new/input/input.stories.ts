import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta = {
    title: "UI/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        disabled: false,
        error: true,
        autoFocus: true,
        placeholder: "Введите имя",
        type: "text",
        id: "name",
        maxLength: 100,
        minLength: 1,
    },
};
