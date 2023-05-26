import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/Dialog"

const WalletList = [
  {
    icon: "https://www.gem.xyz/assets/walletconnect.svg",
    name: "Metamask",
  },
  {
    icon: "/assets/wallet-icons/coinbase.png",
    name: "Coinbase",
  },
  {
    icon: "/assets/wallet-icons/wallet-connect.png",
    name: "Wallet connect",
  },
  {
    icon: "/assets/wallet-icons/safepad.png",
    name: "SafePad",
  },
]

export interface ConnectWalletModalProps {
  trigger: React.ReactNode
}

export const ConnectWalletModal = (props: ConnectWalletModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{props.trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Connect Wallet</DialogTitle>
          <DialogDescription className="mx-auto max-w-xs text-center">
            By connecting your wallet, you agree to <b>our Terms of Service</b> and <b>our Privacy Policy</b>.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {WalletList.map((wallet) => (
            <div key={wallet.name} className="flex">
              <Avatar size="lg">
                <AvatarImage src={wallet.icon} alt={wallet.name} />
                <AvatarFallback>GM</AvatarFallback>
              </Avatar>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
