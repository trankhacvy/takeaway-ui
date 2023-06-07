import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../Button"
import { FormLabel } from "../Form"
import { Input } from "../Input"
import { Popover, PopoverContent, PopoverTrigger } from "."

const meta = {
  title: "components/Popover",
  component: Popover,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Popover>

export default meta

type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: (props) => (
    <Popover {...props}>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[360px]">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <FormLabel htmlFor="width">Width</FormLabel>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <FormLabel htmlFor="maxWidth">Max. width</FormLabel>
              <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <FormLabel htmlFor="height">Height</FormLabel>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <FormLabel htmlFor="maxHeight">Max. height</FormLabel>
              <Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}
