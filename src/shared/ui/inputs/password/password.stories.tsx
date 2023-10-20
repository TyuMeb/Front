import { Meta, StoryObj } from "@storybook/react";
import Password from "./password";
import { InputProps } from "@src/components/shared/ui/inputs/input";
import { ChangeEvent } from "react";
import { useArgs } from "@storybook/client-api";
import "./password.module.scss";

const meta = {
    title: "UI/Inputs/InputPassword",
    component: Password,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    args: {
        type: "password",
        disabled: false,
        autoFocus: true,
        value: "",
        onChange: () => {},
    },
} satisfies Meta<typeof Password>;

export default meta;
type Story = StoryObj<typeof meta>;

const TemplateInput = (args: InputProps): JSX.Element => {
    const { onChange, ...restArgs } = args;

    const [{ value }, updateArgs] = useArgs();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => updateArgs({ value: e.target.value });

    return (
        <div style={{ width: "296px" }}>
            <Password value={value} onChange={handleChange} {...restArgs} />
        </div>
    );
};

export const Default: Story = {
    args: {
        id: "password",
        className: "",
        disabled: false,
        placeholder: "Введите пароль",
        textLabel: "Пароль",
        error: false,
        errorMessage: "Пример ошибки",
    },
    render: (args) => TemplateInput(args),
};
