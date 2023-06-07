import React, { useId, useMemo } from "react"
import { cn } from "@/utils/cn"
import FormControlContext from "./FormControlContext"

export interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  disabled?: boolean
  error?: boolean
  required?: boolean
}

export const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>((props, ref) => {
  const { id: idProp, required = false, disabled = false, error = false, className, ...rest } = props
  const internalId = useId()
  const id = idProp ?? internalId

  const contextValue = useMemo(
    () => ({
      disabled,
      required,
      error,
      htmlFor: id,
      labelId: `${id}-label`,
    }),
    [disabled, required, error, id]
  )

  return (
    <FormControlContext.Provider value={contextValue}>
      <div ref={ref} className={cn("relative inline-flex flex-col", className)} {...rest} />
    </FormControlContext.Provider>
  )
})

FormControl.displayName = "FormControl"
