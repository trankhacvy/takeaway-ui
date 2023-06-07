import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox, CheckboxProps } from "./"

const meta: Meta<CheckboxProps> = {
  title: "components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    children: "Remember me?",
    color: "default",
    defaultChecked: true,
  },
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "success", "warning", "info", "error"],
    },
  },
}

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: (props) => <Checkbox {...props} />,
}

export const Color: Story = {
  render: (props) => (
    <div className="space-y-4">
      <Checkbox {...props} color="default">
        Default
      </Checkbox>
      <Checkbox {...props} color="primary">
        Primary
      </Checkbox>
      <Checkbox {...props} color="success">
        Success
      </Checkbox>
      <Checkbox {...props} color="info">
        Info
      </Checkbox>
      <Checkbox {...props} color="warning">
        Warning
      </Checkbox>
      <Checkbox {...props} color="error">
        Error
      </Checkbox>
    </div>
  ),
}

export default meta
