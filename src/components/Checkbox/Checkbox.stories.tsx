import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Checkbox } from "./"

export default {
  title: "components/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})

Default.args = {
  children: "Remember me",
  defaultChecked: true,
}
