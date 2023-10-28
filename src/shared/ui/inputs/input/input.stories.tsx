import { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "./input";
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

const TemplateInput = (args: InputProps): JSX.Element => {
    const { ...restArgs } = args;

    const [{ value }, updateArgs] = useArgs();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => updateArgs({ value: e.target.value });

    return (
        <div style={{ width: "296px" }}>
            <Input {...restArgs} value={value} onChange={(e) => handleChange(e)} />
        </div>
    );
};

export const Default: Story = {
    args: {
        id: "name",
        className: "",
        disabled: false,
        placeholder: "Введите свое имя",
        label: "Имя",
        error: false,
        errorMessage: "Пример ошибки",
    },
    render: (args) => TemplateInput(args),
};
