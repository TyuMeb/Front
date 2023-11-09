import type { Meta, StoryObj } from "@storybook/react";
import { ExitIcon } from "./exit-icon";

const meta = {
    title: "UI/Icons/ExitIcon",
    component: ExitIcon,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ExitIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
