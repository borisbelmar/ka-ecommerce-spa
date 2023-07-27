import { Product } from "@/types/Product"
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import useProductActions from "../hooks/useProductActions"
import { Link } from "react-router-dom"

interface TableRowProps {
  product: Product
  hasActions?: boolean
  keys: string[]
}

export default function TableRow ({ product, hasActions, keys }: TableRowProps) {
  const { deleteProduct } = useProductActions(product.id)

  return (
    <tr key={product.id}>
      {keys.map(keyItem => (
        <td key={keyItem} className="p-2 border border-gray-500">
          {product[keyItem as keyof Product]}
        </td>
      ))}
      {hasActions && (
        <td className="p-2 border border-gray-500">
          <div className="flex gap-2">
            <button className="bg-green-500 p-1 rounded hover:bg-green-600 transition">
              <span className="sr-only">Ver</span>
              <EyeIcon className="w-5 h-5" />
            </button>
            <Link to={`/admin/products/${product.id}`} className="bg-blue-500 p-1 rounded hover:bg-blue-600 transition">
              <span className="sr-only">Editar</span>
              <PencilIcon className="w-5 h-5" />
            </Link>
            <button className="bg-red-500 p-1 rounded hover:bg-red-600 transition" onClick={deleteProduct}>
              <span className="sr-only">Eliminar</span>
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </td>
      )}
    </tr>
  )
}