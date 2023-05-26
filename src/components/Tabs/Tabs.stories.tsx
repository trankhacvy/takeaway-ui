import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Button } from "../Button"
import { Input } from "../Input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./"

export default {
  title: "components/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Default = Template.bind({})

Default.args = {}

Default.decorators = [
  () => {
    return (
      <div>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="w-full">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent className="rounded-lg border border-gray-300 p-4" value="account">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Make changes to your account here. Click save when you&apos;re done.
            </p>
            <div className="grid gap-2 py-4">
              <div className="space-y-1">
                <label htmlFor="name">Name</label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <label htmlFor="username">Username</label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </div>
            <div className="flex">
              <Button>Save changes</Button>
            </div>
          </TabsContent>
          <TabsContent className="rounded-lg border border-gray-300 p-4" value="password">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Change your password here. After saving, you&apos;ll be logged out.
            </p>
            <div className="grid gap-2 py-4">
              <div className="space-y-1">
                <label htmlFor="current">Current password</label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <label htmlFor="new">New password</label>
                <Input id="new" type="password" />
              </div>
            </div>
            <div className="flex">
              <Button>Save password</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    )
  },
]
