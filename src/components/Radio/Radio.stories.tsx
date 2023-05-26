import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Radio, RadioGroup } from "./"

export default {
  title: "components/Radio",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />

export const Default = Template.bind({})

Default.args = {}

Default.decorators = [
  () => {
    return (
      <div className="space-y-4">
        <RadioGroup defaultValue="default">
          <div className="flex items-center space-x-2">
            <Radio value="default" id="r1">
              Default
            </Radio>
          </div>
          <div className="flex items-center space-x-2">
            <Radio value="comfortable" id="r2">
              Comfortable
            </Radio>
          </div>
          <div className="flex items-center space-x-2">
            <Radio disabled value="compact" id="r3">
              Compact
            </Radio>
          </div>
        </RadioGroup>
      </div>
    )
  },
]
