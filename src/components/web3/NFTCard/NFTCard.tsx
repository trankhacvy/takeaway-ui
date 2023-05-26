import Image from "next/image"
import React from "react"
import { AspectRatio } from "@/components/AspectRatio"
import { Button } from "@/components/Button"
import { Typography } from "@/components/Typography"
import { cn } from "@/utils/cn"
import { formatNumber } from "@/utils/number"

export interface NFTCardProps {
  imageUrl: string
  name: string
  price: number
  onClick?: VoidFunction
  className?: string
}

export const NFTCard = ({ imageUrl, name, price, onClick, className }: NFTCardProps) => {
  return (
    <div className={cn("rounded-xl", className)}>
      <AspectRatio className="group relative mb-6 overflow-hidden rounded-lg bg-primary-200/24">
        <Image
          placeholder="blur"
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk6F9TDwADjgG8yeC8SQAAAABJRU5ErkJggg=="
          alt={name}
          src={imageUrl}
          fill
        />
        <div className="absolute inset-0 z-[2] hidden items-center justify-center bg-black/70 group-hover:flex">
          <Button onClick={onClick} variant="outline">
            Detail
          </Button>
        </div>
      </AspectRatio>
      <div className="flex items-start">
        <div className="flex-1">
          <Typography className="font-bold" as="h2" level="body1">
            {name}
          </Typography>
        </div>
        <span className="rounded-full bg-success-100 px-2 py-0.5 text-xs font-medium text-success-700 mix-blend-multiply">
          {formatNumber(price)} SOL
        </span>
      </div>
    </div>
  )
}
