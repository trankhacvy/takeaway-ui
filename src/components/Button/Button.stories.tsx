import type { Meta, StoryObj } from "@storybook/react"
import { Button, ButtonProps } from "./"
import { PlusIcon } from "lucide-react"

const meta: Meta<ButtonProps> = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    size: "md",
    variant: "solid",
    fullWidth: false,
    disabled: false,
    children: "Submit",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "link"],
    },
  },
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (props) => <Button {...props} />,
}

export default meta
