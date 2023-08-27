import type { Meta, StoryObj } from "@storybook/react";
import { InputLabel } from "./input-label";

const meta = {
    title: "UI/InputLabel",
    component: InputLabel,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof InputLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Имя",
        disabled: false,
        error: false,
    },
};
