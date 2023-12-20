import type { Meta, StoryObj } from "@storybook/react";
import { Chats } from "./chats";

const meta = {
    title: "UI/Chats",
    component: Chats,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {
        disabled: {
            name: "inactive",
            type: { name: "boolean", required: false },
            defaultValue: "false",
            description: "Вариант inactive",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "false" },
            },
            options: ["false", "true"],
        },
        name: {
            name: "name",
            type: { name: "string", required: true },
            defaultValue: "Мебельная фабрика Три Бобра",
            description: "Имя исполнителя",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "true" },
            },
        },
        termOfExecution: {
            name: "termOfExecution",
            type: { name: "string", required: true },
            defaultValue: "",
            description: "Сроки исполнения заказа",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "45-50" },
            },
        },
        cost: {
            name: "cost",
            type: { name: "number", required: true },
            defaultValue: 12000,
            description: "Стоимость заказа",
            table: {
                type: { summary: "number" },
                defaultValue: { summary: 12000 },
            },
        },
        showGallery: {
            name: "showGallery",
            type: { name: "boolean", required: true },
            defaultValue: "true",
            description: "Демонстрирация изображений",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "true" },
            },
            options: ["false", "true"],
        },
    },
} satisfies Meta<typeof Chats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        disabled: false,
        name: "Исполнитель 2",
        termOfExecution: "45-50 дней",
        cost: 12000,
        showGallery: true,
    },
};
