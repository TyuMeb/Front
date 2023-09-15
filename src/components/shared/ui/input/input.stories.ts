import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta = {
    title: "UI/Inputs/Input",
    component: Input,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    // error: true;
};
