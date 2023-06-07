import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../Button"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./"

const meta: Meta<typeof Sheet> = {
  title: "components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
}

type Story = StoryObj<typeof Sheet>

export const Default: Story = {
  render: (props) => (
    <Sheet {...props}>
      <SheetTrigger asChild>
        <Button variant="outline">Open sheet</Button>
      </SheetTrigger>
      <SheetContent position="right" className="min-w-[360px]" size="sm">
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">Content</div>
        <SheetFooter>
          <Button type="submit">Submit</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export default meta
