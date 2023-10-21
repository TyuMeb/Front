import { Meta, StoryObj } from "@storybook/react";
import { PhoneInput } from "./phone";
import { InputProps } from "@src/shared/ui/inputs/input";
import { ChangeEvent } from "react";
import { useArgs } from "@storybook/client-api";

const meta = {
    title: "UI/Inputs/InputPhone",
    component: PhoneInput,
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
} satisfies Meta<typeof PhoneInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const TemplateInput = (args: InputProps): JSX.Element => {
    const { ...restArgs } = args;

    const [{ value }, updateArgs] = useArgs();

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => updateArgs({ value: e.target.value });
    return (
        <div style={{ width: "296px" }}>
            <PhoneInput value={value} onChange={handlePhoneChange} {...restArgs} />
        </div>
    );
};

export const Default: Story = {
    args: {
        id: "phone",
        className: "",
        disabled: false,
        placeholder: "Введите ваш телефон",
        label: "Телефон",
        error: false,
        errorMessage: "Неверный формат телефона",
        value: "8922812222",
    },
    render: (args) => TemplateInput(args),
};
