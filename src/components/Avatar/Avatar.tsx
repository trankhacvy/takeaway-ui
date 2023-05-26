"use client"

import * as AvatarPrimitive from "@radix-ui/react-avatar"
import * as React from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/utils/cn"

const avatarStyles = tv({
  base: "relative flex shrink-0 overflow-hidden",
  variants: {
    variant: {
      square: "",
      rounded: "rounded-lg",
      circle: "rounded-full",
    },
    size: {
      "2xl": "w-24 h-24",
      xl: "w-16 h-16",
      lg: "w-12 h-12",
      md: "w-10 h-10",
      sm: "w-8 h-8",
      xs: "w-6 h-6",
    },
  },
  defaultVariants: {
    variant: "circle",
    size: "md",
  },
})

export interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  size?: VariantProps<typeof avatarStyles>["size"]
  variant?: VariantProps<typeof avatarStyles>["variant"]
}

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, size = "md", variant = "circle", ...props }, ref) => (
    <AvatarPrimitive.Root ref={ref} className={cn(avatarStyles({ size, variant }), className)} {...props} />
  )
)

Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
))

AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center bg-gray-100", className)}
    {...props}
  />
))

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
