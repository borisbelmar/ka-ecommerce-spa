import cn from "@/utils/cn"
import type { ComponentProps } from "react"

export default function Button ({ children, className, ...props }: ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className={cn(
        "bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-2",
        "rounded text-sm font-semibold transition inline-flex items-center gap-2 justify-center",
        className
      )}
    >
      {children}
    </button>
  )
}