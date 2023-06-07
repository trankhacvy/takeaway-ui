import type { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarFallback, AvatarImage } from "./"

const meta: Meta<typeof Avatar> = {
  title: "components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    size: "md",
    variant: "rounded",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
    variant: {
      control: "select",
      options: ["rounded", "square", "circle"],
    },
  },
}

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: (props) => (
    <Avatar {...props}>
      <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
      <AvatarFallback>GM</AvatarFallback>
    </Avatar>
  ),
}

export default meta
