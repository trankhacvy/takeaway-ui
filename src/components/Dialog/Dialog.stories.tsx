import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Button } from "../Button"
import { FormControl, FormLabel } from "../Form"
import { Input } from "../Input"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./"

export default {
  title: "components/Dialog",
  component: Dialog,
} as ComponentMeta<typeof Dialog>

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />

export const Default = Template.bind({})

Default.args = {}

Default.decorators = [
  () => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Log in to your account</DialogTitle>
            <DialogDescription>Welcome back! Please enter your details.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Enter your email" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" />
            </FormControl>
          </div>
          <DialogFooter>
            <Button fullWidth type="submit">
              Sign in
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
]
