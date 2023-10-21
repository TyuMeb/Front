import type { Meta, StoryObj } from "@storybook/react";
import { Icon, iconTypes } from "./Icon";

const meta = {
    title: "UI/Icon",
    component: Icon,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        glyph: {
            options: iconTypes,
            control: { type: "select" },
        },
    },
} as Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        glyph: "exit",
    },
    render: (args) => <Icon {...args} />,
};
