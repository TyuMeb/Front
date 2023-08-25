import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/shared/ui/button/button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: "Test/Button",
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // backgroundColor: { control: "color" },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Var1: Story = {
    args: {
        label: "Сделать заказ",
        backgroundColor: "#FCCF55",
        borderColor: "#ff0",
    },
};

export const Var2: Story = {
    args: {
        label: "Сделать заказ",
        backgroundColor: "#FDB675",
        borderColor: "transparent",
    },
};

export const Var3: Story = {
    args: {
        label: "Сделать заказ",
        backgroundColor: "#F5A13F",
        borderColor: "transparent",
    },
};

export const Var4: Story = {
    args: {
        label: "Сделать заказ",
        backgroundColor: "#B5B3B2",
        borderColor: "transparent",
    },
};

export const Var5: Story = {
    args: {
        label: "Сделать заказ",
        backgroundColor: "#FFF2CC",
        borderColor: "#FCCF55",
    },
};
