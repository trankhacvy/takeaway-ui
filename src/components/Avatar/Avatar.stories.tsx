import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Avatar, AvatarFallback, AvatarImage, AvatarProps } from "./"

export default {
  title: "components/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

const Sizes: AvatarProps["size"][] = ["xs", "sm", "md", "lg", "xl", "2xl"]

export const Default = Template.bind({})

Default.args = {}

Default.decorators = [
  () => {
    return (
      <div className="flex gap-4">
        {Sizes.map((size) => (
          <Avatar size={size} key={size}>
            <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
            <AvatarFallback>GM</AvatarFallback>
          </Avatar>
        ))}
      </div>
    )
  },
]

export const Fallback = Template.bind({})

Fallback.args = {}

Fallback.decorators = [
  () => {
    return (
      <div className="flex gap-4">
        {Sizes.map((size) => (
          <Avatar size={size} key={size}>
            <AvatarImage src="" alt="avatar" />
            <AvatarFallback>GM</AvatarFallback>
          </Avatar>
        ))}
      </div>
    )
  },
]

export const Variants = Template.bind({})

Variants.args = {}

Variants.decorators = [
  () => {
    return (
      <div className="flex gap-4">
        <Avatar variant="rounded">
          <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
          <AvatarFallback>GM</AvatarFallback>
        </Avatar>
        <Avatar variant="square">
          <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
          <AvatarFallback>GM</AvatarFallback>
        </Avatar>
        <Avatar variant="circle">
          <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
          <AvatarFallback>GM</AvatarFallback>
        </Avatar>
      </div>
    )
  },
]
