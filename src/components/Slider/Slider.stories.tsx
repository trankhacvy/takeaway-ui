import type { Meta, StoryObj } from "@storybook/react"
import { Slider } from "."

const meta = {
  title: "components/Slider",
  component: Slider,
  tags: ["autodocs"],
  decorators: [(story) => <div className="max-w-lg p-6">{story()}</div>],
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof Slider>

export const Default = {
  args: {
    defaultValue: [50],
    min: 1,
    max: 100,
  },
} satisfies Story
