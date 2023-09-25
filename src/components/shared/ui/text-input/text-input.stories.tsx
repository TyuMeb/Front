import { Meta, StoryObj } from "@storybook/react";
import { Input, IInputProps } from "./text-input";
import { ChangeEvent } from "react";
import { useArgs } from "@storybook/client-api";

const meta = {
    title: "UI/Inputs",
    component: Input,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    args: {
        disabled: false,
        autoFocus: true,
        value: "",
        onChange: () => {},
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const TemplateInput = (args: IInputProps): JSX.Element => {
    const { onChange, ...restArgs } = args;

    const [{ value }, updateArgs] = useArgs();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => updateArgs({ value: e.target.value });

    return (
        <div style={{ width: "296px" }}>
            <Input value={value} onChange={(e) => handleChange(e)} {...restArgs} />
        </div>
    );
};

export const Default: Story = {
    args: {
        id: "email",
        className: "",
        disabled: false,
        placeholder: "Введите почту",
        textLabel: "Email",
        error: false,
        errorMessage: "Неправильный email",
    },
    render: (args) => TemplateInput(args),
};
