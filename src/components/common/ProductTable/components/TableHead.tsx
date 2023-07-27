import TableHeadItem from "./TableHeadItem"

interface TableHeadProps {
  items: string[]
  hasActions?: boolean
}

export default function TableHead ({ items, hasActions }: TableHeadProps) {
  return (
    <thead className="bg-gray-800">
      <tr>
        {items.map((item, index) => (
          <TableHeadItem key={index}>
            {item}
          </TableHeadItem>
        ))}
        {hasActions && (
          <TableHeadItem>
            Actions
          </TableHeadItem>
        )}
      </tr>
    </thead>
  )
}