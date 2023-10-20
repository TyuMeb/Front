import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxInput, CheckboxInputProps } from "./checkbox";
import { useArgs } from "@storybook/client-api";

const meta = {
    title: "UI/Inputs/Checkbox",
    component: CheckboxInput,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        textLabel: "Вы соглашаетесь с обработкой персональных данных",
        onClick: () => {},
    },
} satisfies Meta<typeof CheckboxInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const TemplateCheckboxField = (args: CheckboxInputProps): JSX.Element => {
    const { ...restArgs } = args;

    const [{ checked }, updateArgs] = useArgs();

    const onHandlerClick = () => updateArgs({ checked: !checked });

    return (
        <div style={{ width: "636px" }}>
            <CheckboxInput checked={checked} {...restArgs} onClick={onHandlerClick} />
        </div>
    );
};

export const Default: Story = {
    args: {
        errorMessage: "Пожалуйста, согласитесь с обработкой персональных данных, чтобы продолжить пользование сайтом",
        error: false,
        checked: false,
        disabled: false,
    },
    render: (args) => TemplateCheckboxField(args),
};
