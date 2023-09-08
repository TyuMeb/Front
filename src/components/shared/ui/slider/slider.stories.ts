import { Meta, StoryObj } from "@storybook/react";
import Slider from "./slider";

const meta = {
    title: "UI/Slider",
    component: Slider,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Disabled: Story = {
    args: {
        extraClass: "slider_true",
    },
};
