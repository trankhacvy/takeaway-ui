import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../Button"
import { Input } from "../Input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./"

const meta: Meta<typeof Tabs> = {
  title: "components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
}

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: (props) => (
    <Tabs {...props} defaultValue="account" className="w-[480px]">
      <TabsList className="ww-full">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent className="rounded-xl p-6 shadow-card" value="account">
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
      <TabsContent className="rounded-xl p-6 shadow-card" value="password">
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
  ),
}

export default meta
