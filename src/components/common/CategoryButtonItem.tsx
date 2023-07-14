import cn from "@/utils/cn"
import { Link } from "react-router-dom"

interface CategoryButtonItemProps {
  children?: React.ReactNode,
  to: string
  current?: boolean
}

export default function CategoryButtonItem({ children, to, current }: CategoryButtonItemProps) {
  return (
    <Link to={to}>
      <button
        className={cn(
          'bg-gray-900 hover:bg-gray-800 text-white px-4 py-2',
          'uppercase rounded text-sm font-semibold transition',
          current && 'bg-indigo-500 hover:bg-indigo-600'
        )}
      >
        {children}
      </button>
    </Link>
  )
}
