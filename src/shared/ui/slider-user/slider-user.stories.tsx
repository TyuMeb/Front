import type { Meta, StoryObj } from "@storybook/react";
import { SliderUser } from "./slider-user";
import { USER_SLIDER_TEST_DATA } from "@src/shared/data/userSliderTestData2";
import "keen-slider/keen-slider.min.css";

const meta = {
  title: "UI/SliderUser",
  component: SliderUser,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    spacing: {
      name: "spacing",
      type: { name: "number", required: false },
      defaultValue: 18,
      description: "Отступы от каждой картинки. Используется вместо gap.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 18 },
      },
      options: ["small", "big"],
    },
    itemsToShow: {
      name: "itemsToShow",
      type: { name: "number", required: false },
      defaultValue: 3,
      description: "Количество изображений (по умолчанию 3)",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 3 },
      },
    },
  },
} satisfies Meta<typeof SliderUser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    itemsToShow: 3,
    spacing: 18,
    children: USER_SLIDER_TEST_DATA,
  },
};
