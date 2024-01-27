import { Meta, StoryObj } from "@storybook/react";
import { InputProps } from "@src/shared/ui/inputs/input";
import { ChangeEvent } from "react";
import { useArgs } from "@storybook/client-api";
import "./password.module.scss";
import { PasswordInput } from "./password";

const meta = {
  title: "UI/Inputs/PasswordInput",
  component: PasswordInput,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    type: "password",
    disabled: false,
    autoFocus: true,
    value: "",
    onChange: () => {},
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const TemplateInput = (args: InputProps): JSX.Element => {
  const { ...restArgs } = args;

  const [{ value }, updateArgs] = useArgs();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => updateArgs({ value: e.target.value });

  return (
    <div style={{ width: "296px" }}>
      <PasswordInput {...restArgs} value={value} onChange={handleChange} />
    </div>
  );
};

export const Default: Story = {
  args: {
    id: "password",
    className: "",
    disabled: false,
    placeholder: "Введите пароль",
    label: "Пароль",
    error: false,
    errorMessage: "Пример ошибки",
  },
  render: (args) => TemplateInput(args),
};
