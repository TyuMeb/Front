import type { Meta, StoryObj } from "@storybook/react";
import { FormHelperText } from "./form-helper-text";

const meta = {
    title: "UI/FormHelperText",
    component: FormHelperText,
} satisfies Meta<typeof FormHelperText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Введен неверный формат",
        disabled: false,
        error: false,
        variant: "string",
    },
};
