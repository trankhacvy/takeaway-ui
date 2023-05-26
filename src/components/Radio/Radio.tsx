import * as Label from "@radix-ui/react-label"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import React, { useId } from "react"
import { cn } from "@/utils/cn"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const Radio = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, id: idProps, disabled, ...props }, ref) => {
  const id = useId()
  return (
    <span className="flex items-center space-x-2">
      <RadioGroupPrimitive.Item
        ref={ref}
        id={idProps ?? id}
        disabled={disabled}
        className={cn(
          "text:fill-slate-50 peer h-4 w-4 rounded-full border border-gray-300 text-gray-700",
          "hover:border-primary-600",
          "focus:outline-none focus:ring-4 focus:ring-primary-100",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-gray-100",
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <span className="h-2 w-2 rounded-xl bg-primary-600" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <Label.Root
        className="text-sm font-medium text-gray-700 peer-disabled:pointer-events-none"
        htmlFor={idProps ?? id}
      >
        {children}
      </Label.Root>
    </span>
  )
})

Radio.displayName = RadioGroupPrimitive.Root.displayName

export { RadioGroup, Radio }
