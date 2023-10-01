import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxField, ICheckboxField } from "./checkbox";
import { useArgs } from "@storybook/client-api";

const meta = {
    title: "UI/Inputs/Checkbox",
    component: CheckboxField,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        textLabel: "Вы соглашаетесь с обработкой персональных данных",
        onClick: () => {},
    },
} satisfies Meta<typeof CheckboxField>;

export default meta;
type Story = StoryObj<typeof meta>;

const TemplateCheckboxField = (args: ICheckboxField): JSX.Element => {
    const { onClick, ...restArgs } = args;

    const [{ checked }, updateArgs] = useArgs();

    const onHandlerClick = () => updateArgs({ checked: !checked });

    return (
        <div style={{ width: "636px" }}>
            <CheckboxField checked={checked} onClick={onHandlerClick} {...restArgs} />
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
