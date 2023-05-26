"use client"

import React from "react"
import { FormControlProps } from "."

export type FormControlContextValue =
  | undefined
  | (Pick<FormControlProps, "error" | "disabled" | "required"> & {
      labelId: string
      htmlFor: string | undefined
    })

const FormControlContext = React.createContext<FormControlContextValue>(undefined)

export default FormControlContext
