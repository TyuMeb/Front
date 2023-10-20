import type { Meta, StoryObj } from "@storybook/react";
import { EyeIcon } from "./eye-icon";

const meta = {
    title: "UI/Icons/EyeIcon",
    component: EyeIcon,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof EyeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
