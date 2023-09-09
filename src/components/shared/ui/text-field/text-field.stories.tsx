import { ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextField, ITextField } from "./text-field";
import { useArgs } from "@storybook/client-api";

const meta = {
    title: "UI/TextField",
    component: TextField,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        size: "m",
        disabled: false,
        autoFocus: true,
        value: "",
        onChange: () => {},
    },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

const TemplateInput = (args: ITextField): JSX.Element => {
    const { onChange, ...restArgs } = args;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{ value }, updateArgs] = useArgs();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => updateArgs({ value: e.target.value });

    return (
        <div style={{ width: "296px" }}>
            <TextField value={value} onChange={(e) => handleChange(e)} {...restArgs} />
        </div>
    );
};

const defaultPasswordArgs: Story = {
    args: {
        type: "password",
        label: "Пароль",
        placeholder: "Введите пароль",
        errorText: "Неверный пароль",
    },
};

const defaultEmailArgs: Story = {
    args: {
        type: "email",
        label: "E-mail",
        placeholder: "Введите e-mail",
        errorText: "Неверный e-mail",
    },
};

const defaultPhoneArgs: Story = {
    args: {
        type: "tel",
        label: "Телефон",
        placeholder: "Введите свой номер телефона",
        errorText: "Неверный номер телефона",
    },
};

export const PasswordStandard: Story = {
    args: {
        id: "passwordStandard",
        variant: "standard",
        ...defaultPasswordArgs.args,
    },
    render: (args) => TemplateInput(args),
};

export const PasswordInside: Story = {
    args: {
        id: "passwordInside",
        variant: "inside",
        ...defaultPasswordArgs.args,
    },
    render: (args) => TemplateInput(args),
};

export const EmailStandard: Story = {
    args: {
        id: "emailStandard",
        variant: "standard",
        ...defaultEmailArgs.args,
    },
    render: (args) => TemplateInput(args),
};

export const EmailInside: Story = {
    args: {
        id: "emailInside",
        variant: "inside",
        ...defaultEmailArgs.args,
    },
    render: (args) => TemplateInput(args),
};

export const PhoneStandard: Story = {
    args: {
        id: "phoneStandard",
        variant: "standard",
        ...defaultPhoneArgs.args,
    },
    render: (args) => TemplateInput(args),
};

export const PhoneInside: Story = {
    args: {
        id: "phoneInside",
        variant: "inside",
        ...defaultPhoneArgs.args,
    },
    render: (args) => TemplateInput(args),
};
