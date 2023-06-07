import type { Meta, StoryObj } from "@storybook/react"
import { Typography } from "./"

const meta: Meta<typeof Typography> = {
  title: "components/Typography",
  component: Typography,
  tags: ["autodocs"],
  decorators: [
    (Style) => (
      <div className="flex flex-col gap-4">
        <Style />
      </div>
    ),
  ],
  args: {
    children: "Typography",
  },
  argTypes: {},
}

type Story = StoryObj<typeof Typography>

export const Default: Story = {
  render: () => (
    <>
      <Typography level="h1">h1. Heading</Typography>
      <Typography level="h2">h2. Heading</Typography>
      <Typography level="h3">h3. Heading</Typography>
      <Typography level="h4">h4. Heading</Typography>
      <Typography level="h5">h5. Heading</Typography>
      <Typography level="h6">h6. Heading</Typography>
      <Typography level="body1">subtitle1</Typography>
      <Typography level="body2">subtitle2</Typography>
      <Typography level="body3">body1</Typography>
      <Typography level="body4">body2</Typography>
      <Typography level="body5">caption</Typography>
    </>
  ),
}

export default meta
