import { Meta, StoryObj } from "@storybook/react";
import InputEmail from "./email";

const meta = {
    title: "UI/Inputs/InputEmail",
    component: InputEmail,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    args: {
        error: false,
        value: "",
    },
} satisfies Meta<typeof InputEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
