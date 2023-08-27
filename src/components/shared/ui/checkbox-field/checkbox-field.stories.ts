import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxField } from "./checkbox-field";

const meta = {
    title: "UI/CheckboxField",
    component: CheckboxField,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof CheckboxField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: "checkbox",
        label: "Вы соглашаетесь с обработкой персональных данных",
        helperText: "Пожалуйста, согласитесь с обработкой персональных данных, чтобы продолжить пользование сайтом",
        error: true,
        checked: false,
    },
};
