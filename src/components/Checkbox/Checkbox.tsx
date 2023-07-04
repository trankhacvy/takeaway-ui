import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import React from "react"
import { tv, VariantProps } from "tailwind-variants"
import { cn } from "@/utils/cn"

const checkboxStyles = tv({
  base: [
    "peer relative h-5 w-5 rounded-[4px] border",
    "focus:outline-none focus:ring-4 focus:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  variants: {
    color: {
      default: [
        "border-gray-600 hover:bg-gray-600/8 focus:ring-gray-600/24",
        "data-[state=checked]:border-gray-800 data-[state=checked]:bg-gray-800",
      ],
      primary: [
        "border-primary-600 hover:bg-primary-600/8 focus:ring-primary-600/24",
        "data-[state=checked]:border-primary-600 data-[state=checked]:bg-primary-600",
      ],
      success: [
        "border-success-600 hover:bg-success-600/8 focus:ring-success-600/24",
        "data-[state=checked]:border-success-600 data-[state=checked]:bg-success-600",
      ],
      warning: [
        "border-warning-600 hover:bg-warning-600/8 focus:ring-warning-600/24",
        "data-[state=checked]:border-warning-600 data-[state=checked]:bg-warning-600",
      ],
      info: [
        "border-info-600 hover:bg-info-600/8 focus:ring-info-600/24",
        "data-[state=checked]:border-info-600 data-[state=checked]:bg-info-600",
      ],
      error: [
        "border-error-600 hover:bg-error-600/8 focus:ring-error-600/24",
        "data-[state=checked]:border-error-600 data-[state=checked]:bg-error-600",
      ],
    },
  },
  defaultVariants: {
    color: "default",
  },
})

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkboxStyles>

export const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, color, children, id: idProp, ...props }, ref) => {
    const id = React.useId()

    return (
      <span className="flex items-center space-x-2">
        <CheckboxPrimitive.Root
          ref={ref}
          id={idProp ?? id}
          className={cn(checkboxStyles({ color }), className)}
          {...props}
        >
          <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center")}>
            <CheckIcon className="h-4 w-4 text-white" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        <label className="text-sm font-medium text-gray-800 peer-disabled:opacity-50" htmlFor={idProp ?? id}>
          {children}
        </label>
      </span>
    )
  }
)

Checkbox.displayName = CheckboxPrimitive.Root.displayName
