import cx from "classnames"
import { ArrowUpIcon, TrashIcon } from "lucide-react"
import React, { forwardRef, useState } from "react"
import { useDropzone } from "react-dropzone"
import { AspectRatio } from "@/components/AspectRatio"
import { IconButton } from "@/components/IconButton"
import { Typography } from "@/components/Typography"

export interface UploaderProps {
  maxFiles?: number
  maxSize?: number
  accept?: Array<string>
  className?: string
  onChange: (files: Array<File>) => void
  isDisabled?: boolean
  onExceedFileCount?: VoidFunction
  onExceedFileSize?: VoidFunction
}

const DEFAULT_MAX_SIZE_BYTES = 5242880 // 5MB

export const Uploader = forwardRef<HTMLDivElement, UploaderProps>((props, ref) => {
  const {
    maxFiles = 4,
    maxSize = DEFAULT_MAX_SIZE_BYTES,
    accept = [],
    className,
    onChange,
    isDisabled = false,
    onExceedFileCount,
    onExceedFileSize,
    ...rest
  } = props

  const [files, setFiles] = useState<Array<File & { preview?: string }>>([])

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles,
    maxSize,
    accept: {
      "image/*": accept,
    },
    multiple: true,
    disabled: isDisabled,
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (files.length + acceptedFiles.length + rejectedFiles.length > maxFiles) {
        onExceedFileCount?.()
      } else if (rejectedFiles.some((file) => file.file.size > maxSize)) {
        onExceedFileSize?.()
      }

      const uniqueFiles = acceptedFiles.filter((item) => {
        return !files.find((file) => file.name === item.name && file.lastModified === item.lastModified)
      })

      const newFiles = [
        ...files,
        ...uniqueFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ].slice(0, maxFiles)
      setFiles(newFiles)
      onChange(newFiles)
    },
  })

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index)
    setFiles(newFiles)
    onChange(newFiles)
  }

  const thumbs = files.map((file, index) => (
    <div key={file.name}>
      <div className="relative mx-auto max-w-lg overflow-hidden rounded-xl">
        <AspectRatio ratio={1}>
          <img
            className="h-full w-full object-cover"
            src={file.preview}
            alt=""
            // Revoke data uri after image is loaded
            onLoad={() => {
              if (typeof file.preview === "string") {
                URL.revokeObjectURL(file.preview)
              }
            }}
          />
        </AspectRatio>
        <IconButton
          onClick={() => removeFile(index)}
          disabled={isDisabled}
          aria-label="Delete"
          className="absolute right-6 top-6 bg-gray-900 text-white hover:bg-gray-900/50"
        >
          <TrashIcon />
        </IconButton>
      </div>
    </div>
  ))

  return (
    <div
      className={cx(
        "rounded-xl border border-dashed border-gray-500/[0.32] bg-gray-200 hover:opacity-75",
        {
          "p-10": files.length === 0,
        },
        className
      )}
      ref={ref}
      {...rest}
    >
      {thumbs}
      {files.length < maxFiles && (
        <div className="flex h-full w-full cursor-pointer flex-col items-center justify-center" {...getRootProps()}>
          <input {...getInputProps({ disabled: isDisabled })} />
          <div className="mb-4 rounded-full">
            <ArrowUpIcon className="h-5 w-5" />
          </div>
          <Typography level="body3" as="p" className="mb-1">
            <Typography className="mr-1 font-semibold text-primary-700" as="span" level="body3">
              Click to upload
            </Typography>
            or drag and drop
          </Typography>

          <Typography level="body4" as="p">
            SVG, PNG, JPG or GIF (max. 800x400px)
          </Typography>
        </div>
      )}
    </div>
  )
})

Uploader.displayName = "Uploader"
