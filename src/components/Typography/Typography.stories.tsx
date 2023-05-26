import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Typography, TypographyProps } from "./Typography"

export default {
  title: "components/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />

export const Default = Template.bind({})

Default.args = {}

Default.decorators = [
  () => {
    return (
      <div className="flex flex-col gap-2">
        <Typography {...(Default.args as TypographyProps)} level="h1">
          h1
        </Typography>
        <Typography {...(Default.args as TypographyProps)} level="h2">
          h2
        </Typography>
        <Typography {...(Default.args as TypographyProps)} level="h3">
          h3
        </Typography>
        <Typography {...(Default.args as TypographyProps)} level="h4">
          h4
        </Typography>
        <Typography {...(Default.args as TypographyProps)} level="h5">
          h5
        </Typography>
        <Typography {...(Default.args as TypographyProps)} level="h6">
          h6
        </Typography>
        <Typography {...(Default.args as TypographyProps)} level="body1">
          body1
        </Typography>
        <Typography {...(Default.args as TypographyProps)} level="body2">
          body2
        </Typography>
        <Typography {...(Default.args as TypographyProps)} level="body3">
          body3
        </Typography>
        <Typography {...(Default.args as TypographyProps)} level="body4">
          body4
        </Typography>
        <Typography {...(Default.args as TypographyProps)} level="body5">
          body5
        </Typography>
      </div>
    )
  },
]

export const Custom = Template.bind({})
Custom.args = {
  children: "I'm a <span />",
  as: "span",
}
