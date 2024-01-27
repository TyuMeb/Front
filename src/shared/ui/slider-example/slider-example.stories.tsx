import type { Meta, StoryObj } from "@storybook/react";
import { SliderExample } from "./slider-example";
import { SLIDER_TEST_DATA } from "@src/shared/data/sliderTestData";

const meta = {
  title: "UI/SliderExample",
  component: SliderExample,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      name: "disabled",
      type: { name: "boolean", required: false },
      defaultValue: "false",
      description: "Вариант disabled",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "false" },
      },
      options: ["false", "true"],
    },
    auto: {
      name: "auto",
      type: { name: "boolean", required: false },
      defaultValue: "true",
      description: "Автоматическое перелистывание (true - вкл, false - выкл)",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "true" },
      },
      options: ["false", "true"],
    },
    slideRight: {
      name: "slideRight",
      type: { name: "boolean", required: false },
      defaultValue: "false",
      description: "Направление пролистывания (если false то влево, если true то вправо)",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "false" },
      },
      options: ["false", "true"],
    },
    delay: {
      name: "delay",
      type: { name: "number", required: false },
      defaultValue: 4,
      description: "Пауза между перелистываниями в секундах (по умолчанию 4 с)",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 4 },
      },
    },
  },
} satisfies Meta<typeof SliderExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    slideRight: false,
    delay: 4,
    auto: true,
    slides: SLIDER_TEST_DATA,
  },
};
