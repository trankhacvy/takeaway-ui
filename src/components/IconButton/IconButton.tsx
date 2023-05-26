import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { cn } from "@/utils/cn"
import { forwardRefWithAs } from "@/utils/render"

const iconVariants = cva(
  [
    "btn-icon inline-flex items-center justify-center rounded-full transition-colors p-2",
    "focus:outline-none",
    "disabled:pointer-events-none",
    "active:scale-95",
  ],
  {
    variants: {
      scheme: {
        primary: "text-primary-500 hover:bg-primary-500/8",
        neutral: "text-gray-800 hover:bg-gray-800/8",
        success: "text-success-500 hover:bg-success-500/8",
        info: "text-info-500 hover:bg-info-500/8",
        warning: "text-warning-500 hover:bg-warning-500/8",
        danger: "text-error-500 hover:bg-error-500/8",
      },
      size: {
        sm: "p-2",
        md: "p-3",
        lg: "p-4",
      },
    },
    defaultVariants: {
      scheme: "primary",
      size: "md",
    },
  }
)

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconVariants> {}

export const IconButton = forwardRefWithAs<"button", IconButtonProps>(
  ({ as: Tag = "button", className, size, children, disabled, scheme, ...props }, ref) => {
    return (
      <Tag className={cn(iconVariants({ size, scheme }), className)} ref={ref} disabled={disabled} {...props}>
        {children}
      </Tag>
    )
  }
)
