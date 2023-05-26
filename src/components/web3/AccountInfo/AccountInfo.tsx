import { CopyIcon } from "lucide-react"
import React from "react"
import { Avatar, AvatarImage } from "@/components/Avatar"
import { Button } from "@/components/Button"
import { IconButton } from "@/components/IconButton"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover"
import { Typography } from "@/components/Typography"
import { truncate } from "@/utils/truncate"


export interface AccountInfoProps {
  walletAddress: string
  avatarUrl: string
}

export const AccountInfo = ({ walletAddress, avatarUrl }: AccountInfoProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage className="transition-transform hover:scale-110" src={avatarUrl} alt={walletAddress} />
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="p-6" align="end">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-success-700" />
          <div className="flex-1">
            <Typography className="font-semibold" level="body4">
              {truncate('123' ?? "", 16, true)}
            </Typography>
          </div>
          <IconButton size="sm">
            <CopyIcon />
          </IconButton>
        </div>
        <Button fullWidth variant="link">
          View on explore
        </Button>
      </PopoverContent>
    </Popover>
  )
}
