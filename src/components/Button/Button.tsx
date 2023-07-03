import { tv, VariantProps } from "tailwind-variants"
import React from "react"
import { cn } from "@/utils/cn"
import { forwardRefWithAs } from "@/utils/render"

export const buttonVariants = tv({
  base: [
    "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-colors",
    "focus:outline-none focus:ring-4",
    "disabled:pointer-events-none",
    "active:scale-95",
  ],
  variants: {
    variant: {
      solid: ["shadow-z1"],
      outline: ["border"],
      link: [],
    },
    color: {
      default: "",
      primary: "",
      info: "",
      success: "",
      warning: "",
      error: "",
    },
    size: {
      sm: "h-9 px-2 text-sm",
      md: "h-10 px-2.5 text-sm",
      lg: "h-11 px-2.5 text-base",
    },
    fullWidth: {
      true: "w-full",
    },
    disabled: {
      true: "cursor-not-allowed",
    },
  },
  compoundVariants: [
    // solid
    {
      variant: "solid",
      color: "default",
      class: ["bg-gray-800 text-white", "hover:bg-gray-700", "focus:ring-gray-800/16"],
    },
    {
      variant: "solid",
      color: "primary",
      class: ["bg-primary-500 text-white", "hover:bg-primary-700", "focus:ring-primary-500/16"],
    },
    {
      variant: "solid",
      color: "success",
      class: ["bg-success-500 text-white", "hover:bg-success-700", "focus:ring-success-500/16"],
    },
    {
      variant: "solid",
      color: "info",
      class: ["bg-info-500 text-white", "hover:bg-info-700", "focus:ring-info-500/16"],
    },
    {
      variant: "solid",
      color: "warning",
      class: ["bg-warning-500 text-white", "hover:bg-warning-700", "focus:ring-warning-500/16"],
    },
    {
      variant: "solid",
      color: "error",
      class: ["bg-error-500 text-white", "hover:bg-error-700", "focus:ring-error-500/16"],
    },
    {
      variant: "solid",
      disabled: true,
      class: ["bg-gray-500/24 text-gray-500/80"],
    },
    // outline
    {
      variant: "outline",
      color: "default",
      class: [
        "borde-gray-500/24 text-gray-800",
        "hover:border-current hover:ring-1 hover:ring-current hover:bg-gray-800/8",
        "focus:ring-gray-800/16 focus:ring-1",
      ],
    },
    {
      variant: "outline",
      color: "primary",
      class: [
        "border-primary-500/50 text-primary-500",
        "hover:border-current hover:ring-1 hover:ring-current hover:bg-primary-500/8",
        "focus:ring-primary-500/16 focus:ring-1",
      ],
    },
    {
      variant: "outline",
      color: "success",
      class: [
        "border-success-500/50 text-success-500",
        "hover:border-current hover:ring-1 hover:ring-current hover:bg-success-500/8",
        "focus:ring-success-500/16 focus:ring-1",
      ],
    },
    {
      variant: "outline",
      color: "info",
      class: [
        "border-info-500/50 text-info-500",
        "hover:border-current hover:ring-1 hover:ring-current hover:bg-info-500/8",
        "focus:ring-info-500/16 focus:ring-1",
      ],
    },
    {
      variant: "outline",
      color: "warning",
      class: [
        "border-warning-500/50 text-warning-500",
        "hover:border-current hover:ring-1 hover:ring-current hover:bg-warning-500/8",
        "focus:ring-warning-500/16 focus:ring-1",
      ],
    },
    {
      variant: "outline",
      color: "error",
      class: [
        "border-error-500/50 text-error-500",
        "hover:border-current hover:ring-1 hover:ring-current hover:bg-error-500/8",
        "focus:ring-error-500/16 focus:ring-1",
      ],
    },
    {
      variant: "outline",
      disabled: true,
      class: ["border-gray-500/24 text-gray-500/80"],
    },
    // link
    {
      variant: "link",
      color: "default",
      class: ["hover:bg-gray-500/8", "focus:ring-gray-500/8"],
    },
    {
      variant: "link",
      color: "primary",
      class: ["text-primary-500", "hover:bg-primary-500/8", "focus:ring-primary-500/8"],
    },
    {
      variant: "link",
      color: "success",
      class: ["text-success-500", "hover:bg-success-500/8", "focus:ring-success-500/8"],
    },
    {
      variant: "link",
      color: "info",
      class: ["text-info-500", "hover:bg-info-500/8", "focus:ring-info-500/8"],
    },
    {
      variant: "link",
      color: "warning",
      class: ["text-warning-500", "hover:bg-warning-500/8", "focus:ring-warning-500/8"],
    },
    {
      variant: "link",
      color: "error",
      class: ["text-error-500", "hover:bg-error-500/8", "focus:ring-error-500/8"],
    },
    {
      variant: "link",
      disabled: true,
      class: ["text-gray-500/80"],
    },
  ],
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
    disabled: false,
  },
})

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  startDecorator?: React.ReactNode
  endDecorator?: React.ReactNode
  loading?: boolean
}

export const Button = forwardRefWithAs<"button", ButtonProps>(
  (
    {
      as: Tag = "button",
      className,
      variant,
      color = "default",
      loading,
      fullWidth,
      size,
      children,
      startDecorator,
      endDecorator,
      disabled: disabledProp,
      ...props
    },
    ref
  ) => {
    const disabled = disabledProp || loading

    if (loading) {
      startDecorator = (
        <svg
          fill="currentColor"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin text-xl"
        >
          <g>
            <path d="M8,1V2.8A5.2,5.2,0,1,1,2.8,8H1A7,7,0,1,0,8,1Z" />
          </g>
        </svg>
      )
    }

    return (
      <Tag
        className={cn(buttonVariants({ variant, color, size, fullWidth, disabled, className }))}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {startDecorator && <span className="btn-icon mr-2">{startDecorator}</span>}
        {children}
        {endDecorator && <span className="btn-icon ml-2">{endDecorator}</span>}
      </Tag>
    )
  }
)
