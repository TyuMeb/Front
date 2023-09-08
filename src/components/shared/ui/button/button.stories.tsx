import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";
import { ExitIcon } from "@src/components/shared/ui/icons/exit-icon";
import Icon from "@src/components/icon/Icon";
import { CheckedIcon } from "../icons/checked-icon";

const meta = {
    title: "UI/Button",
    component: Button,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        isDisabled: {
            name: "isDisabled",
            type: { name: "boolean", required: false },
            defaultValue: "false",
            description: "Вариант Disabled",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "false" },
            },
            options: ["false", "true"],
        },
        viewType: {
            name: "viewType",
            type: { name: "string", required: false },
            defaultValue: "cancel",
            description: "Вариант viewType",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "cancel" },
            },
            control: {
                type: "radio",
            },
            options: ["cancel", "exit"],
        },
        type: {
            name: "type",
            type: { name: "string", required: false },
            defaultValue: "button",
            description: "Вариант type",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "button" },
            },
            control: {
                type: "radio",
            },
            options: ["submit", "reset", "button"],
        },
        icon: {
            name: "icon",
            type: { name: "function", required: false },
            defaultValue: "exit",
            description: "Вариант icon",
            table: {
                type: { summary: "React.ReactNode" },
                defaultValue: { summary: "ExitIcon" },
            },
            control: {
                type: [<ExitIcon key="1" />, <CheckedIcon key="2" />],
            },
            options: [<ExitIcon key="1" />, <CheckedIcon key="2" />],
        },
        children: {
            name: "children",
            type: { name: "function", required: false },
            defaultValue: "primary",
            description: "Вариант children",
            table: {
                type: { summary: "React.ReactNode" },
                defaultValue: { summary: "Сделать заказ" },
            },
            control: {
                type: "radio",
            },
            options: ["Сделать заказ", "Отмена", "Выйти"],
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
    args: {
        children: "Сделать заказ",
        isDisabled: true,
        icon: undefined,
    },
};

export const Cancel: Story = {
    args: {
        children: "Отмена",
        isDisabled: false,
        viewType: "cancel",
        icon: undefined,
    },
};

export const Exit: Story = {
    args: {
        children: "Выйти",
        isDisabled: false,
        viewType: "exit",
        icon: <ExitIcon />,
    },
};
