import type { Meta, StoryObj } from "@storybook/react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./"
import { Button } from "@/components/Button"
import { FormControl, FormLabel } from "@/components/Form"
import { Input } from "@/components/Input"

const meta: Meta<typeof Dialog> = {
  title: "components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
}

type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: (props) => (
    <Dialog {...props}>
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
  ),
}

export default meta
