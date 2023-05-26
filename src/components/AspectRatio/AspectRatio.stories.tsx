import type { Meta, StoryObj } from "@storybook/react"
import { AspectRatio } from "./"

const meta: Meta<typeof AspectRatio> = {
  title: "components/AspectRatio",
  component: AspectRatio,
  args: {},
  argTypes: {},
}

type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {
  render: () => (
    <div className="max-w-lg">
      <AspectRatio ratio={1}>
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
