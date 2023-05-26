import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ArrowRightIcon, PlusIcon } from "lucide-react"
import React from "react"

import { Button, ButtonProps } from "./Button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Variant = Template.bind({})
Variant.args = {
  children: "Button",
}

Variant.decorators = [
  () => {
    return (
      <div className="space-x-4">
        <Button {...(Variant.args as ButtonProps)} variant="solid" />
        <Button {...(Variant.args as ButtonProps)} variant="outline" />
        <Button {...(Variant.args as ButtonProps)} variant="link" />
      </div>
    )
  },
]

export const Disabled = Template.bind({})
Disabled.args = {
  children: "Button",
  disabled: true,
}
Disabled.decorators = [
  () => {
    return (
      <div className="space-x-4">
        <Button {...(Disabled.args as ButtonProps)} variant="solid" />
        <Button {...(Disabled.args as ButtonProps)} variant="outline" />
        <Button {...(Disabled.args as ButtonProps)} variant="link" />
      </div>
    )
  },
]

export const Size = Template.bind({})
Size.args = {
  children: "Button",
}

Size.decorators = [
  () => {
    return (
      <div className="space-x-4">
        <Button {...(Size.args as ButtonProps)} size="sm" />
        <Button {...(Size.args as ButtonProps)} size="md" />
        <Button {...(Size.args as ButtonProps)} size="lg" />
      </div>
    )
  },
]

export const WithIcon = Template.bind({})
WithIcon.args = {
  children: "Button",
  startDecorator: <PlusIcon className="h-5 w-5" />,
  endDecorator: <ArrowRightIcon className="h-5 w-5" />,
}
WithIcon.decorators = [
  () => {
    return (
      <div className="space-x-4">
        <Button {...(WithIcon.args as ButtonProps)} variant="solid" />
        <Button {...(WithIcon.args as ButtonProps)} variant="outline" />
        <Button {...(WithIcon.args as ButtonProps)} variant="link" />
      </div>
    )
  },
]

export const Loading = Template.bind({})
Loading.args = {
  children: "Button",
  loading: true,
}
Loading.decorators = [
  () => {
    return (
      <div className="space-x-4">
        <Button {...(Loading.args as ButtonProps)} variant="solid" />
        <Button {...(Loading.args as ButtonProps)} variant="outline" />
        <Button {...(Loading.args as ButtonProps)} variant="link" />
      </div>
    )
  },
]
