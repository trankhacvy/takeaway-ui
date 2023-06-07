import type { Meta, StoryObj } from "@storybook/react"
import { MailIcon } from "lucide-react"
import { Input } from "."

const meta = {
  title: "components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Enter you name",
    value: "",
  },
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: (props) => <Input {...props} />,
}

export const WithIcon: Story = {
  render: (props) => <Input {...props} startDecorator={<MailIcon />} />,
}

export const Disabled: Story = {
  render: (props) => <Input {...props} disabled />,
}

export const Textarea: Story = {
  render: () => <Input placeholder="Description" as="textarea" rows={6} />,
}

export default meta
