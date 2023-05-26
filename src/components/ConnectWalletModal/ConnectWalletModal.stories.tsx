import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Button } from "../Button"
import { ConnectWalletModal } from "./"

export default {
  title: "web3/ConnectWalletModal",
  component: ConnectWalletModal,
} as ComponentMeta<typeof ConnectWalletModal>

const Template: ComponentStory<typeof ConnectWalletModal> = (args) => <ConnectWalletModal {...args} />

export const Default = Template.bind({})

Default.args = {}

Default.decorators = [
  () => {
    return (
      <div className="flex gap-4">
        <ConnectWalletModal trigger={<Button>Connect Wallet</Button>} />
      </div>
    )
  },
]
