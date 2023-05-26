import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import React from "react"
import { cn } from "@/utils/cn"

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>

export const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, children, id: idProp, ...props }, ref) => {
    const id = React.useId()

    return (
      <span className="flex items-center space-x-2">
        <CheckboxPrimitive.Root
          ref={ref}
          id={idProp ?? id}
          className={cn(
            "relative h-5 w-5 rounded-[4px] border border-gray-600",
            "hover:bborder-primary-600 hover:bg-gray-600/8",
            "focus:outline-none focus:ring-4 focus:ring-gray-600/24 focus:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "data-[state=checked]:border-gray-600 data-[state=checked]:bg-gray-600",
            className
          )}
          {...props}
        >
          <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center")}>
            <CheckIcon className="h-4 w-4 text-white" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        <label className="text-sm font-medium text-gray-800" htmlFor={idProp ?? id}>
          {children}
        </label>
      </span>
    )
  }
)

Checkbox.displayName = CheckboxPrimitive.Root.displayName
