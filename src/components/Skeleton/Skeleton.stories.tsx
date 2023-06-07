import type { Meta, StoryObj } from "@storybook/react"
import { Skeleton } from "./"

const meta: Meta<typeof Skeleton> = {
  title: "components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
}

type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => (
    <div>
      <Skeleton className="mb-4 h-2.5 w-48" />
      <Skeleton className="mb-2.5 h-2 max-w-[360px]" />
      <Skeleton className="mb-2.5 h-2" />
      <Skeleton className="mb-2.5 h-2" />
      <Skeleton className="h-2 max-w-[360px]" />
    </div>
  ),
}

export default meta
