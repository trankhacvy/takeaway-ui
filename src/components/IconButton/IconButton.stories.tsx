import type { Meta, StoryObj } from "@storybook/react"

import { CogIcon } from "lucide-react"
import { IconButton } from "."

const meta = {
  title: "components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: {
    children: <CogIcon />,
    color: "default",
  },
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "success", "warning", "info", "error"],
    },
  },
} satisfies Meta<typeof IconButton>

type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  render: (props) => <IconButton {...props} />,
}

export const Colors: Story = {
  render: (props) => (
    <div className="flex gap-4">
      <IconButton {...props} color="default" />
      <IconButton {...props} color="primary" />
      <IconButton {...props} color="success" />
      <IconButton {...props} color="info" />
      <IconButton {...props} color="warning" />
      <IconButton {...props} color="error" />
    </div>
  ),
}

export const Sizes: Story = {
  render: (props) => (
    <div className="space-x-4">
      <IconButton {...props} size="lg" />
      <IconButton {...props} size="md" />
      <IconButton {...props} size="sm" />
    </div>
  ),
}

export default meta
