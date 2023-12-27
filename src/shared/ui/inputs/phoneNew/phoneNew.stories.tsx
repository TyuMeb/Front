import { Meta, StoryObj } from "@storybook/react";
import { PhoneInputNew } from "./phoneNew";

const meta = {
    title: "UI/Inputs/InputPhoneNew",
    component: PhoneInputNew,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        value: {
            name: "value",
            type: { name: "string", required: false },
            defaultValue: "",
            description: "Значение по умолчанию",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "" },
            },
        },
        error: {
            name: "error",
            type: { name: "boolean", required: false },
            defaultValue: "false",
            description: "Ошибка",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "false" },
            },
            options: ["false", "true"],
        },
        errorMessage: {
            name: "errorMessage",
            type: { name: "string", required: false },
            defaultValue: "",
            description: "Сообщение об ошибке",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "" },
            },
        },
        disabled: {
            name: "disabled",
            type: { name: "boolean", required: false },
            defaultValue: "false",
            description: "Включен / отключен",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "false" },
            },
            options: ["false", "true"],
        },
    },
} satisfies Meta<typeof PhoneInputNew>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: "phone",
        className: "",
        disabled: false,
        placeholder: "Введите ваш телефон",
        label: "Телефон",
        error: false,
        errorMessage: "Номер должен начинаться с + и включать не менее 11 цифр",
        value: "+7 922 82 22 2",
    },
};
