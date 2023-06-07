import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "../Input"
import { FormControl, FormHelperText, FormLabel } from "./"

const meta: Meta<typeof FormControl> = {
  title: "components/Form",
  component: FormControl,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
}

type Story = StoryObj<typeof FormControl>

export const Default: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Email</FormLabel>
      <Input placeholder="Enter your email" />
      <FormHelperText>This is a helper message.</FormHelperText>
    </FormControl>
  ),
}

export const Error: Story = {
  render: () => (
    <FormControl error required>
      <FormLabel>Email</FormLabel>
      <Input placeholder="Enter your email" />
      <FormHelperText>This is an error message.</FormHelperText>
    </FormControl>
  ),
}

export const Disabled: Story = {
  render: () => (
    <FormControl disabled required>
      <FormLabel>Email</FormLabel>
      <Input placeholder="Enter your email" />
      <FormHelperText>This is a helper message.</FormHelperText>
    </FormControl>
  ),
}

export default meta
