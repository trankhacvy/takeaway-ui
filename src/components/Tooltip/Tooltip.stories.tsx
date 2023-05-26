import { ComponentMeta, ComponentStory } from "@storybook/react"
import { AlertCircleIcon } from "lucide-react"
import React from "react"
import { Typography } from "../Typography"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./"

export default {
  title: "components/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />

export const Default = Template.bind({})

Default.args = {}

Default.decorators = [
  () => {
    return (
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <AlertCircleIcon className="h-5 w-5 text-gray-500" />
          </TooltipTrigger>
          <TooltipContent>
            <Typography>This is a tooltip</Typography>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  },
]

export const Custom = Template.bind({})

Custom.args = {}

Custom.decorators = [
  () => {
    return (
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <AlertCircleIcon className="h-5 w-5 text-gray-500" />
          </TooltipTrigger>
          <TooltipContent className="max-w-md">
            <Typography className="mb-1 text-sm" level="h2">
              This is a tooltip
            </Typography>
            <Typography color="secondary" className="text-sm">
              Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand
              meaning, function or alt-text.
            </Typography>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  },
]
