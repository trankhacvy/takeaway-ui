import type { Meta, StoryObj } from "@storybook/react"
import { Uploader } from "./"

const meta: Meta<typeof Uploader> = {
  title: "components/Uploader",
  component: Uploader,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
}

type Story = StoryObj<typeof Uploader>

export const Default: Story = {
  render: (props) => <Uploader {...props} onExceedFileSize={() => alert("too much")} maxFiles={3} mutiple />,
}

export const Single: Story = {
  render: (props) => <Uploader {...props} onExceedFileSize={() => alert("too much")} mutiple={false} />,
}

export default meta
