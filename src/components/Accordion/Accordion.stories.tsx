import type { Meta, StoryObj } from "@storybook/react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./"

const meta: Meta<typeof Accordion> = {
  title: "components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    type: "single",
    collapsible: true,
    className: "max-w-md",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
  },
}

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: (props) => (
    <Accordion {...props}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is there a free trial available?</AccordionTrigger>
        <AccordionContent>
          Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as
          soon as possible.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
        <AccordionContent>
          Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for
          you.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
        <AccordionContent>
          We understand that things change. You can cancel your plan at any time and we’ll refund you the difference
          already paid.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export default meta
