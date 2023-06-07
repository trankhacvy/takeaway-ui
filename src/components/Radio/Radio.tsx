import * as Label from "@radix-ui/react-label"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import React, { useId } from "react"
import { tv, VariantProps } from "tailwind-variants"
import { cn } from "@/utils/cn"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("flex flex-wrap", className)} {...props} ref={ref} />
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const radioStyles = tv({
  slots: {
    wrapper: "inline-flex items-center",
    item: [
      "peer relative h-5 w-5 rounded-full border border-gray-600",
      "focus:outline-none",
      "disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-gray-500/80",
      "after:absolute after:-inset-2 after:z-[-1] after:rounded-full after:content-['']",
    ],
    indicatorWrapper: "flex items-center justify-center",
    indicator: "h-2.5 w-2.5 rounded-xl",
    label: "ml-2 text-sm font-medium text-gray-700 peer-disabled:pointer-events-none peer-disabled:text-gray-500",
  },
  variants: {
    color: {
      default: {
        item: "after:hover:bg-gray-600/16",
        indicator: "bg-gray-600",
      },
      primary: {
        item: "data-[state=checked]:border-primary-500 after:hover:bg-primary-500/16",
        indicator: "bg-primary-500",
      },
      success: {
        item: "data-[state=checked]:border-success-500 after:hover:bg-success-500/16",
        indicator: "bg-success-500",
      },
      info: {
        item: "data-[state=checked]:border-info-500 after:hover:bg-info-500/16",
        indicator: "bg-info-500",
      },
      warning: {
        item: "data-[state=checked]:border-warning-500 after:hover:bg-warning-500/16",
        indicator: "bg-warning-500",
      },
      error: {
        item: "data-[state=checked]:border-error-500 after:hover:bg-error-500/16",
        indicator: "bg-error-500",
      },
    },
  },
  defaultVariants: {
    color: "default",
  },
})

const Radio = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & VariantProps<typeof radioStyles>
>(({ className, children, id: idProps, disabled, color, ...props }, ref) => {
  const id = useId()
  const styles = radioStyles({ color })
  return (
    <span className={styles.wrapper()}>
      <RadioGroupPrimitive.Item
        ref={ref}
        id={idProps ?? id}
        disabled={disabled}
        className={cn(styles.item(), className)}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className={styles.indicatorWrapper()}>
          <span className={styles.indicator()} />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      {children && (
        <Label.Root className={styles.label()} htmlFor={idProps ?? id}>
          {children}
        </Label.Root>
      )}
    </span>
  )
})

Radio.displayName = RadioGroupPrimitive.Root.displayName

export { RadioGroup, Radio }
