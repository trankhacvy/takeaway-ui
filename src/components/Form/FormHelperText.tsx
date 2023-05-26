import React from "react"
import { cn } from "@/utils/cn"
import FormControlContext from "./FormControlContext"

export type FormHelperTextProps = React.HTMLAttributes<HTMLSpanElement>

export const FormHelperText = React.forwardRef<HTMLSpanElement, FormHelperTextProps>((props, ref) => {
  const { className, ...rest } = props
  const formControl = React.useContext(FormControlContext)

  return (
    <span
      ref={ref}
      className={cn(
        "mt-1.5 text-sm text-gray-600",
        {
          "text-error-500": formControl?.error,
        },
        className
      )}
      id={formControl?.labelId}
      {...rest}
    />
  )
})

FormHelperText.displayName = "FormHelperText"