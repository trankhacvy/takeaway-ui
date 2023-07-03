import type { Meta, StoryObj } from "@storybook/react"
import { PlusIcon } from "lucide-react"
import { Button, ButtonProps } from "./"

const meta: Meta<ButtonProps> = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    size: "md",
    variant: "solid",
    fullWidth: false,
    disabled: false,
    children: "Submit",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "link"],
    },
  },
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (props) => <Button {...props} />,
}

const variantOptions: ButtonProps["variant"][] = ["solid", "outline", "link"]

export const Variants: Story = {
  render: ({ children, ...rest }) => (
    <div className="flex gap-4">
      {variantOptions.map((variant) => (
        <Button {...rest} key={variant} variant={variant}>
          {children}
        </Button>
      ))}
    </div>
  ),
}

const colorOptions: ButtonProps["color"][] = ["default", "primary", "success", "info", "warning", "error"]

export const Colors: Story = {
  render: ({ children, ...rest }) => (
    <div className="flex flex-col gap-4">
      {variantOptions.map((variant) => (
        <div key={variant} className="flex gap-4">
          {colorOptions.map((color) => (
            <Button {...rest} variant={variant} color={color} key={`${variant}-${color}`}>
              {children}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: ({ children, ...rest }) => (
    <div className="flex gap-4">
      <Button {...rest} size="sm">
        {children}
      </Button>
      <Button {...rest} size="md">
        {children}
      </Button>
      <Button {...rest} size="lg">
        {children}
      </Button>
    </div>
  ),
}

export const WithIcon: Story = {
  render: ({ children, ...rest }) => (
    <div className="flex gap-4">
      <Button {...rest} variant="solid" startDecorator={<PlusIcon />}>
        {children}
      </Button>
      <Button {...rest} variant="outline" startDecorator={<PlusIcon />}>
        {children}
      </Button>
      <Button {...rest} variant="link" startDecorator={<PlusIcon />}>
        {children}
      </Button>
    </div>
  ),
}

export const Loading: Story = {
  render: ({ children, ...rest }) => (
    <div className="flex gap-4">
      <Button {...rest} variant="solid" loading>
        {children}
      </Button>
      <Button {...rest} variant="outline" loading>
        {children}
      </Button>
      <Button {...rest} variant="link" loading>
        {children}
      </Button>
    </div>
  ),
}

export default meta
