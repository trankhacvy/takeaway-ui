import React from "react"
import { cn } from "@/utils/cn"
import FormControlContext from "./FormControlContext"

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode
  required?: boolean
}

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>((props, ref) => {
  const { required: requiredProp, children, className, ...rest } = props
  const formControl = React.useContext(FormControlContext)
  const required = requiredProp ?? formControl?.required ?? false

  return (
    <label
      ref={ref}
      className={cn("mb-1.5 flex select-none flex-wrap items-center text-sm font-medium text-gray-700", className)}
      htmlFor={formControl?.htmlFor}
      id={formControl?.labelId}
      {...rest}
    >
      {children}
      {required && <>&thinsp;{"*"}</>}
    </label>
  )
})

FormLabel.displayName = "FormLabel"
