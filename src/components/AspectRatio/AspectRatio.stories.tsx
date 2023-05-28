import type { Meta, StoryObj } from "@storybook/react"
import { AspectRatio } from "./"

const meta: Meta<typeof AspectRatio> = {
  title: "components/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  args: {
    ratio: 1,
  },
  argTypes: {
    ratio: {
      control: {
        type: "select",
        labels: {
          "1": "1/1",
          [`${4 / 3}`]: "4/3",
          [`${16 / 9}`]: "16/9",
        },
      },
      options: [1, 4 / 3, 16 / 9],
    },
  },
}

type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {
  render: (args) => (
    <div className="max-w-lg">
      <AspectRatio {...args}>
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Landscape photograph by Tobias Tullius"
        />
      </AspectRatio>
    </div>
  ),
}

export default meta
