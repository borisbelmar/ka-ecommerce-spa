import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useCart } from '../context/CartContext'

export default function CartButton() {
  const { openCart, totalItems } = useCart()

  return (
    <button
      className="bg-gray-900 hover:bg-indigo-500 text-white p-2 rounded-full transition relative"
      onClick={openCart}
    >
      <ShoppingCartIcon className="w-6 h-6" />
      <span className="absolute -top-1 -right-1 bg-indigo-500 text-white text-xs font-semibold px-1 rounded-full">
        {totalItems}
      </span>
    </button>
  )
}