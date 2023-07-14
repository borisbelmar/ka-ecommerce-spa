import { Link } from "react-router-dom"
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import Button from "./Button"
import cn from "@/utils/cn"

interface ProductCardProps {
  id: string | number
  title: string
  price: number
  image: string
  inCart?: boolean
  onAddToCart: () => void
  onRemoveFromCart: () => void
}

export default function ProductCard({
  id,
  title,
  price,
  image,
  onAddToCart,
  onRemoveFromCart,
  inCart = false
}: ProductCardProps) {
  return (
    <li className="flex flex-col gap-4 bg-gray-900 rounded-md overflow-hidden">
      <Link to={`/products/${id}`} className="h-48 overflow-hidden group relative">
        <img src={image} alt={title} className="w-full h-48 object-scale-down bg-white p-4 group-hover:scale-110 group-focus:scale-110 transition" />
        <div className="opacity-0 absolute bg-black bg-opacity-50 top-0 h-full w-full flex items-center justify-center transition duration-200 group-hover:opacity-100 group-focus:opacity-100">
          <p className="text-center">Ver más</p>
        </div>
      </Link>
      <div className="flex flex-col gap-4 px-4 pb-4 flex-1 justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">${price}</p>
          <h2 className="text-sm line-clamp-2 opacity-80">{title}</h2>
        </div>
        <Button
          aria-label="Cart button"
          onClick={inCart ? onRemoveFromCart : onAddToCart}
          className={cn(inCart && 'hover:bg-red-600 bg-indigo-950')}
        >
          <ShoppingBagIcon className="w-5 h-5" />
          {inCart ? 'Eliminar del carrito' : 'Añadir al carrito'}
        </Button>
      </div>
    </li>
  )
}