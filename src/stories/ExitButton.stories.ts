import type { Meta, StoryObj } from "@storybook/react";

import { ExitButton } from "../components/shared/ui/exit-button/exit-button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: "Test/ExitButton",
    component: ExitButton,
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
} satisfies Meta<typeof ExitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Var1: Story = {
    args: {
        label: "Выйти",
        backgroundColor: "#F5F3F1",
    },
};

export const Var2: Story = {
    args: {
        label: "Выйти",
        backgroundColor: "#EAE5E1",
    },
};

export const Var3: Story = {
    args: {
        label: "Выйти",
        backgroundColor: "#FCCF55",
    },
};

export const Var4: Story = {
    args: {
        label: "Выйти",
        backgroundColor: "#F5F3F1",
        disabled: true,
    },
};
