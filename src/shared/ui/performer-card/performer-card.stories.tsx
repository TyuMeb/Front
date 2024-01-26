import type { Meta, StoryObj } from "@storybook/react";
import { PerformerCard } from "./performer-card";

const meta = {
  title: "UI/PerformerCard",
  component: PerformerCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      name: "disabled",
      type: { name: "boolean", required: false },
      defaultValue: false,
      description: "Вариант disabled",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "false" },
      },
      options: ["false", "true"],
    },
    name: {
      name: "name",
      defaultValue: "Товар",
      description: "Название товара",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Исполнитель 2" },
      },
    },
    product: {
      name: "product",
      defaultValue: "Товар",
      description: "Название товара",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Полка настенная" },
      },
    },
    termOfExecution: {
      name: "termOfExecution",
      defaultValue: "Товар",
      description: "Название товара",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "termOfExecution" },
      },
    },
    cost: {
      name: "cost",
      defaultValue: 100000,
      description: "Стоимость товара от",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 100000 },
      },
    },
    //   showGallery: {
    //     name: "showGallery",
    //     type: { name: "boolean", required: false },
    //     defaultValue: false,
    //     description: "Вариант showGallery",
    //     table: {
    //         type: { summary: "string" },
    //         defaultValue: { summary: "false" },
    //     },
    //     options: ["false", "true"],
    // },
  },
} satisfies Meta<typeof PerformerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    name: "Исполнитель 2",
    product: "Полка настенная",
    termOfExecution: "45-50",
    cost: 100000,
    // showGallery: false,
  },
};
