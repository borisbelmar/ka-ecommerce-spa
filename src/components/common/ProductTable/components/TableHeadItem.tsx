import cn from "@/utils/cn"

interface TableHeadItemProps {
  children: React.ReactNode
  className?: string
}

export default function TableHeadItem ({ children, className }: TableHeadItemProps) {
  return (
    <th className={cn("text-left border p-2 border-gray-500", className)}>
      {children}
    </th>
  )
}