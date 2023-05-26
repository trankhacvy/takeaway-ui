import type { Meta, StoryObj } from "@storybook/react"

import { CogIcon } from "lucide-react"
import { IconButton } from "."

const meta = {
  title: "components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(story) => <div className="max-w-lg p-6">{story()}</div>],
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof IconButton>

export const Default = {
  args: {
    children: <CogIcon />,
  },
} satisfies Story
