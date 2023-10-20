import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRightIcon } from "./arrow-right-icon";

const meta = {
    title: "UI/Icons/ArrowRightIcon",
    component: ArrowRightIcon,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ArrowRightIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
