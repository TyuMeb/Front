import type { Meta, StoryObj } from "@storybook/react";
import WarningIcon from "./warning-icon";

const meta = {
    title: "UI/Icons/WarningIcon",
    component: WarningIcon,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof WarningIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
