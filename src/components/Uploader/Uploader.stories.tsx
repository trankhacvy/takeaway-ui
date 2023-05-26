import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Uploader } from "./Uploader"

export default {
  title: "components/Uploader",
  component: Uploader,
} as ComponentMeta<typeof Uploader>

const Template: ComponentStory<typeof Uploader> = (args) => <Uploader {...args} />

export const Default = Template.bind({})

Default.args = {}

Default.decorators = [
  () => {
    return (
      <div className="flex flex-col gap-2">
        <Uploader maxFiles={1} onChange={(files) => console.log(files)} />
      </div>
    )
  },
]
