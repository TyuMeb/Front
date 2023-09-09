import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxField, ICheckboxField } from "./checkbox-field";
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

const TemplateCheckboxField = (args: ICheckboxField): JSX.Element => {
    const { onClick, ...restArgs } = args;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{ checked }, updateArgs] = useArgs();

    const onHandlerClick = () => {
        updateArgs({ checked: !checked });
    };

    return (
        <div style={{ width: "636px" }}>
            <CheckboxField checked={checked} onClick={onHandlerClick} {...restArgs} />
        </div>
    );
};

export const Default: Story = {
    args: {
        id: "checkbox",
        label: "Вы соглашаетесь с обработкой персональных данных",
        errorText: "Пожалуйста, согласитесь с обработкой персональных данных, чтобы продолжить пользование сайтом",
        checked: false,
        disabled: false,
        onClick: () => {},
    },
    render: (args) => TemplateCheckboxField(args),
};
