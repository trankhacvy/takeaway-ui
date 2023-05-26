import type { Meta, StoryObj } from "@storybook/react"

import { AccountInfo } from "."

const meta = {
  title: "web3/AccountInfo",
  component: AccountInfo,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(story) => <div className="max-w-lg p-6">{story()}</div>],
} satisfies Meta<typeof AccountInfo>

export default meta

type Story = StoryObj<typeof AccountInfo>

export const Default = {
  args: {
    walletAddress: "5AHKzmDcjeAAnafTivi5u7dWYw3jUQh2VBRDzSd9ztVr",
    avatarUrl: "https://i.pravatar.cc/300",
  },
} satisfies Story
