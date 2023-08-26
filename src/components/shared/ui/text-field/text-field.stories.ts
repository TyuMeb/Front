import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./text-field";

const meta = {
    title: "UI/TextField",
    component: TextField,
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultPasswordArgs: Story = {
    args: {
        id: "password",
        type: "password",
        label: "Пароль",
        placeholder: "Введите пароль",
        helperText: "Неверный пароль",
    },
};

const defaultEmailArgs: Story = {
    args: {
        id: "email",
        type: "email",
        label: "E-mail",
        placeholder: "Введите e-mail",
        helperText: "Неверный e-mail",
    },
};

const defaultPhoneArgs: Story = {
    args: {
        id: "phone",
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
        maxLength: 100,
        minLength: 6,
        value: "",
    },
};

export const PasswordStandard: Story = {
    args: {
        variant: "standard",
        ...defaultArgs.args,
        ...defaultPasswordArgs.args,
    },
};

export const PasswordInside: Story = {
    args: {
        variant: "inside",
        ...defaultArgs.args,
        ...defaultPasswordArgs.args,
    },
};

export const EmailStandard: Story = {
    args: {
        variant: "standard",
        ...defaultArgs.args,
        ...defaultEmailArgs.args,
    },
};

export const EmailInside: Story = {
    args: {
        variant: "inside",
        ...defaultArgs.args,
        ...defaultEmailArgs.args,
    },
};

export const PhoneStandard: Story = {
    args: {
        variant: "standard",
        ...defaultArgs.args,
        ...defaultPhoneArgs.args,
    },
};

export const PhoneInside: Story = {
    args: {
        variant: "inside",
        ...defaultArgs.args,
        ...defaultPhoneArgs.args,
    },
};
