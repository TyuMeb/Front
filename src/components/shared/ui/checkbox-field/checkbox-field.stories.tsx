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
    argTypes: {
        // label: { control: 'text' }, // Always shows the control
        error: { control: "boolean", if: { arg: "checked", eq: false } },
        // // Only enabled if advanced is true
        checked: { control: "boolean" },
        // padding: { control: 'number', if: { arg: 'advanced' } },
        // cornerRadius: { control: 'number', if: { arg: 'advanced' } },
    },
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
        error: false,
        checked: false,
        disabled: false,
        onClick: () => {},
    },
    render: (args) => TemplateCheckboxField(args),
};

export const Checked: Story = {
    args: {
        id: "checkbox",
        label: "Вы соглашаетесь с обработкой персональных данных",
        checked: true,
        disabled: false,
        onClick: () => {},
    },
    render: (args) => TemplateCheckboxField(args),
};

export const Disabled: Story = {
    args: {
        id: "checkbox",
        label: "Вы соглашаетесь с обработкой персональных данных",
        checked: false,
        disabled: true,
        onClick: () => {},
    },
    render: (args) => TemplateCheckboxField(args),
};

export const Error: Story = {
    args: {
        id: "checkbox",
        label: "Вы соглашаетесь с обработкой персональных данных",
        error: true,
        errorText: "Пожалуйста, согласитесь с обработкой персональных данных, чтобы продолжить пользование сайтом",
        checked: false,
        disabled: false,
        onClick: () => {},
    },
    render: (args) => TemplateCheckboxField(args),
};
