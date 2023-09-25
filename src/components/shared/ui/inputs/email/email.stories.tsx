import { Meta, StoryObj } from "@storybook/react";
import InputEmail from "./email";
import { IInputProps } from "@src/components/shared/ui/text-input";
import { ChangeEvent } from "react";
import { useArgs } from "@storybook/client-api";

const meta = {
    title: "UI/Inputs/InputEmail",
    component: InputEmail,
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
} satisfies Meta<typeof InputEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

const TemplateInput = (args: IInputProps): JSX.Element => {
    const { onChange, ...restArgs } = args;

    const [{ value }, updateArgs] = useArgs();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => updateArgs({ value: e.target.value });

    return (
        <div style={{ width: "296px" }}>
            <InputEmail value={value} onChange={(e) => handleChange(e)} {...restArgs} />
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
