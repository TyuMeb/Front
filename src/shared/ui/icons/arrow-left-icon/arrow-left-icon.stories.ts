import type { Meta, StoryObj } from "@storybook/react";
import { ArrowLeftIcon } from "./arrow-left-icon";

const meta = {
    title: "UI/Icons/ArrowLeftIcon",
    component: ArrowLeftIcon,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ArrowLeftIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
