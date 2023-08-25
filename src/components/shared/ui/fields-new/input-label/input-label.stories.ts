import type { Meta, StoryObj } from "@storybook/react";
import { InputLabel } from "./input-label";

const meta = {
    title: "UI/InputLabel",
    component: InputLabel,
} satisfies Meta<typeof InputLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Имя",
        disabled: false,
        error: false,
        variant: "standard",
    },
};
