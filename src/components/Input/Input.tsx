"use client"

import * as React from "react"
import { tv } from "tailwind-variants"
import { cn } from "@/utils/cn"
import { forwardRefWithAs } from "@/utils/render"
import FormControlContext from "../Form/FormControlContext"

const styles = tv({
  slots: {
    input: [
      "flex rounded-lg border border-gray-300 hover:border-gray-500/32 bg-white py-2 px-3 text-base text-gray-900 shadow-xs",
      "placeholder:text-gray-500",
      "focus:outline-none focus:border-primary-300 focus:ring-4 focus:ring-primary-100",
      "disabled:cursor-not-allowed disabled:bg-gray-50",
    ],
    startDecorator: "absolute inset-y-0 flex items-center left-3 pointer-events-none text-gray-500",
    endDecorator: "absolute inset-y-0 flex items-center right-3 pointer-events-none text-gray-500",
  },
  variants: {
    hasLeft: {
      true: {
        input: "pl-10",
      },
    },
    hasRight: {
      true: {
        input: "pr-10",
      },
    },
    fullWidth: {
      true: {
        input: "w-full",
      },
    },
    error: {
      true: {
        input: "border-error-300 focus:border-error-300 focus:ring-error-100",
        startDecorator: "text-error-300",
        endDecorator: "text-error-300",
      },
    },
    isInput: {
      true: {
        input: "h-11",
      },
    },
  },
  defaultVariants: {
    hasLeft: false,
    hasRight: false,
    fullWidth: true,
    isInput: true,
  },
})

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean
  error?: boolean
  wrapperClassName?: string
  startDecorator?: React.ReactNode
  startDecoratorClassName?: string
  endDecorator?: React.ReactNode
  endDecoratorClassName?: string
}

export const Input = forwardRefWithAs<"input", InputProps>((props, ref) => {
  const {
    wrapperClassName,
    startDecorator,
    startDecoratorClassName,
    endDecorator,
    endDecoratorClassName,
    fullWidth = true,
    error: errorProps,
    disabled: disabledProps,
    className,
    as: Tag = "input",
    ...rest
  } = props

  const formContext = React.useContext(FormControlContext)
  const error = errorProps ?? formContext?.error
  const disabled = disabledProps ?? formContext?.disabled

  const baseStyles = styles({
    hasLeft: !!startDecorator,
    hasRight: !!endDecorator,
    fullWidth,
    error,
    isInput: Tag === "input",
  })

  const child = <Tag className={cn(baseStyles.input(), className)} ref={ref} disabled={disabled} {...rest} />
  if (startDecorator || endDecorator) {
    return (
      <div className={cn("relative", wrapperClassName)}>
        <span className={cn(baseStyles.startDecorator(), startDecoratorClassName)}>{startDecorator}</span>
        {child}
        <span className={cn(baseStyles.endDecorator(), endDecoratorClassName)}>{endDecorator}</span>
      </div>
    )
  }

  return child
})
