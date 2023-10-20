import { Meta, StoryObj } from "@storybook/react";
import Email from "./email";
import { InputProps } from "@src/components/shared/ui/inputs";
import { ChangeEvent } from "react";
import { useArgs } from "@storybook/client-api";

const meta = {
    title: "UI/Inputs/InputEmail",
    component: Email,
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
} satisfies Meta<typeof Email>;

export default meta;
type Story = StoryObj<typeof meta>;

const TemplateInput = (args: InputProps): JSX.Element => {
    const { onChange, ...restArgs } = args;

    const [{ value }, updateArgs] = useArgs();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => updateArgs({ value: e.target.value });

    return (
        <div style={{ width: "296px" }}>
            <Email value={value} onChange={(e) => handleChange(e)} {...restArgs} />
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
