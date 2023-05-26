import { ComponentMeta, ComponentStory } from "@storybook/react"
import { AlertCircleIcon, AtSignIcon } from "lucide-react"
import React from "react"
import { Input, InputProps } from "."

export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  placeholder: "vincenzo@gmail.com",
}

export const Disabled = Template.bind({})

Disabled.args = {
  placeholder: "vincenzo@gmail.com",
  disabled: true,
}

export const WithIcon = Template.bind({})

WithIcon.args = {
  placeholder: "vincenzo@gmail.com",
}

WithIcon.decorators = [
  () => {
    return (
      <div className="space-y-4">
        <Input
          {...(WithIcon.args as InputProps)}
          startDecorator={<AtSignIcon className="h-5 w-5" />}
          endDecorator={<AlertCircleIcon className="h-5 w-5" />}
        />
      </div>
    )
  },
]

export const Textarea = Template.bind({})

Textarea.args = {
  placeholder: "vincenzo@gmail.com",
  as: "textarea",
  rows: 6,
}
