import type { Meta, StoryObj } from "@storybook/react"
import { PlusIcon } from "lucide-react"
import { IconButton } from "../IconButton"
import { Typography } from "../Typography"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./"

const meta: Meta<typeof Tooltip> = {
  title: "components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
}

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: (props) => (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton color="primary">
            <PlusIcon />
          </IconButton>
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
  ),
}

export default meta
