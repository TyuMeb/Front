import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxField } from "./checkbox-field";
import { useArgs } from "@storybook/client-api";

const meta = {
    title: "UI/CheckboxField",
    component: CheckboxField,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof CheckboxField>;

export default meta;
type Story = StoryObj<typeof meta>;

const TemplateCheckboxField = (args): JSX.Element => {
    const { onClick, ...restArgs } = args;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{ checked }, updateArgs] = useArgs();

    const onHandlerClick = () => {
        console.log(1);
        updateArgs({ checked: !checked });
    };

    return <CheckboxField checked={checked} onClick={onHandlerClick} {...restArgs} />;
};

export const Default: Story = {
    args: {
        id: "checkbox",
        label: "Вы соглашаетесь с обработкой персональных данных",
        helperText: "Пожалуйста, согласитесь с обработкой персональных данных, чтобы продолжить пользование сайтом",
        error: true,
        checked: false,
        disabled: false,
        onClick: () => {
            console.log(1);
        },
    },
    render: (args) => TemplateCheckboxField(args),
};
