import type { Meta, StoryObj } from "@storybook/react"
import { Radio, RadioGroup } from "./"

const meta: Meta<typeof Radio> = {
  title: "components/Radio",
  component: Radio,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <RadioGroup defaultValue="option1" className="flex-col gap-4">
        <Story />
      </RadioGroup>
    ),
  ],
  args: {},
  argTypes: {},
}

type Story = StoryObj<typeof Radio>

export const Default: Story = {
  render: (props) => (
    <>
      <Radio {...props} value="option1">
        Option 1
      </Radio>
      <Radio {...props} value="option2">
        Option 2
      </Radio>
      <Radio {...props} value="option3" disabled>
        Option 3
      </Radio>
    </>
  ),
}

export default meta
