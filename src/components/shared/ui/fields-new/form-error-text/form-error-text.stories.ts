import type { Meta, StoryObj } from "@storybook/react";
import { FormHelperText } from "./form-error-text";

const meta = {
    title: "UI/FormHelperText",
    component: FormHelperText,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof FormHelperText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Введен неверный формат",
        disabled: false,
        variant: "standard",
    },
};
