import { Meta, StoryObj } from "@storybook/react";
import Phone from "./phone";
import { InputProps } from "@src/components/shared/ui/inputs/input";
import { ChangeEvent } from "react";
import { useArgs } from "@storybook/client-api";

const meta = {
    title: "UI/Inputs/InputPhone",
    component: Phone,
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
} satisfies Meta<typeof Phone>;

export default meta;
type Story = StoryObj<typeof meta>;

const TemplateInput = (args: InputProps): JSX.Element => {
    const { onChange, ...restArgs } = args;

    const [{ value }, updateArgs] = useArgs();

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => updateArgs({ value: e.target.value });
    return (
        <div style={{ width: "296px" }}>
            <Phone value={value} onChange={handlePhoneChange} {...restArgs} />
        </div>
    );
};

export const Default: Story = {
    args: {
        id: "phone",
        className: "",
        disabled: false,
        placeholder: "Введите ваш телефон",
        textLabel: "Телефон",
        error: false,
        errorMessage: "Неверный формат телефона",
    },
    render: (args) => TemplateInput(args),
};
