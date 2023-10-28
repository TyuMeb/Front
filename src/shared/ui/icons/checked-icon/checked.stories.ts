import type { Meta, StoryObj } from "@storybook/react";
import { CheckedIcon } from "./checked";

const meta = {
    title: "UI/Icons/CheckedIcon",
    component: CheckedIcon,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof CheckedIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
