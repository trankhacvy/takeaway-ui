import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/Button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "."

const meta: Meta<typeof AlertDialog & typeof AlertDialogContent> = {
  title: "components/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
  args: {
    maxWidth: "md",
    fullWidth: true,
  },
  argTypes: {
    maxWidth: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
  },
}

type Story = StoryObj<typeof AlertDialog & typeof AlertDialogContent>

export const Default: Story = {
  render: ({ maxWidth, fullWidth, ...rest }) => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </AlertDialogTrigger>
      <AlertDialogContent maxWidth={maxWidth} fullWidth={fullWidth}>
        <AlertDialogHeader>
          <AlertDialogTitle>Use Google's location service?</AlertDialogTitle>
          <AlertDialogDescription>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline">Disagree</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button>Agree</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export default meta
