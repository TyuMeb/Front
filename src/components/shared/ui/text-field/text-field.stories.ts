import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./text-field";

const meta = {
    title: "UI/TextField",
    component: TextField,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultPasswordArgs: Story = {
    args: {
        type: "password",
        label: "Пароль",
        placeholder: "Введите пароль",
        helperText: "Неверный пароль",
    },
};

const defaultEmailArgs: Story = {
    args: {
        type: "email",
        label: "E-mail",
        placeholder: "Введите e-mail",
        helperText: "Неверный e-mail",
    },
};

const defaultPhoneArgs: Story = {
    args: {
        type: "tel",
        label: "Телефон",
        placeholder: "Введите свой номер телефона",
        helperText: "Неверный номер телефона",
    },
};

const defaultArgs: Story = {
    args: {
        size: "m",
        disabled: false,
        error: true,
        autoFocus: true,
        value: "",
    },
};

export const PasswordStandard: Story = {
    args: {
        id: "passwordStandard",
        variant: "standard",
        ...defaultArgs.args,
        ...defaultPasswordArgs.args,
    },
};

export const PasswordInside: Story = {
    args: {
        id: "passwordInside",
        variant: "inside",
        ...defaultArgs.args,
        ...defaultPasswordArgs.args,
    },
};

export const EmailStandard: Story = {
    args: {
        id: "emailStandard",
        variant: "standard",
        ...defaultArgs.args,
        ...defaultEmailArgs.args,
    },
};

export const EmailInside: Story = {
    args: {
        id: "emailInside",
        variant: "inside",
        ...defaultArgs.args,
        ...defaultEmailArgs.args,
    },
};

export const PhoneStandard: Story = {
    args: {
        id: "phoneStandard",
        variant: "standard",
        ...defaultArgs.args,
        ...defaultPhoneArgs.args,
    },
};

export const PhoneInside: Story = {
    args: {
        id: "phoneInside",
        variant: "inside",
        ...defaultArgs.args,
        ...defaultPhoneArgs.args,
    },
};
