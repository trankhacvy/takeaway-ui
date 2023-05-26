import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { Input } from "../Input"
import { FormControl, FormControlProps, FormHelperText, FormLabel } from "./"

export default {
  title: "components/Form",
  component: FormControl,
} as ComponentMeta<typeof FormControl>

const Template: ComponentStory<typeof FormControl> = (args) => <FormControl {...args} />

export const Primary = Template.bind({})
Primary.args = {
  required: true,
}

Primary.decorators = [
  () => {
    return (
      <>
        <FormControl {...(Primary.args as FormControlProps)}>
          <FormLabel>Email</FormLabel>
          <Input />
          <FormHelperText>This is an error message.</FormHelperText>
        </FormControl>
      </>
    )
  },
]

export const Error = Template.bind({})
Error.args = {
  required: true,
  error: true,
}

Error.decorators = [
  () => {
    return (
      <>
        <FormControl {...(Error.args as FormControlProps)}>
          <FormLabel>Email</FormLabel>
          <Input />
          <FormHelperText>This is an error message.</FormHelperText>
        </FormControl>
      </>
    )
  },
]

export const Disabled = Template.bind({})
Disabled.args = {
  required: true,
  disabled: true,
}

Disabled.decorators = [
  () => {
    return (
      <>
        <FormControl {...(Disabled.args as FormControlProps)}>
          <FormLabel>Email</FormLabel>
          <Input />
          <FormHelperText>This is an error message.</FormHelperText>
        </FormControl>
      </>
    )
  },
]
