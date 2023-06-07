import * as Label from "@radix-ui/react-label"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import React, { useId } from "react"
import { cn } from "@/utils/cn"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("flex flex-wrap", className)} {...props} ref={ref} />
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const Radio = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, id: idProps, disabled, ...props }, ref) => {
  const id = useId()
  return (
    <span className="inline-flex items-center">
      <RadioGroupPrimitive.Item
        ref={ref}
        id={idProps ?? id}
        disabled={disabled}
        className={cn(
          "peer relative h-5 w-5 rounded-full border border-gray-600",
          "data-[state=checked]:border-primary-500",
          "focus:outline-none",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-gray-500/80",
          "after:absolute after:-inset-2 after:z-[-1] after:rounded-full after:content-[''] after:hover:bg-primary-500/16",
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <span className="h-2.5 w-2.5 rounded-xl bg-primary-500" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      {children && (
        <Label.Root
          className="ml-2 text-sm font-medium text-gray-700 peer-disabled:pointer-events-none peer-disabled:text-gray-500"
          htmlFor={idProps ?? id}
        >
          {children}
        </Label.Root>
      )}
    </span>
  )
})

Radio.displayName = RadioGroupPrimitive.Root.displayName

export { RadioGroup, Radio }
