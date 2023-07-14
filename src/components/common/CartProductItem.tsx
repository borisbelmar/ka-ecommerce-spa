import type { CartItem } from "@/types/CartItem"
import { TrashIcon } from "@heroicons/react/24/outline"
import { useCart } from "../context/CartContext"

interface CartProductItemProps {
  cartItem: CartItem
}

export default function CartProductItem({ cartItem }: CartProductItemProps) {
  const { removeFromCart } = useCart()

  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img className="w-16 h-16 object-cover rounded" src={cartItem.product.image} alt={cartItem.product.title} />
        <div className="flex flex-col gap-1">
          <h3 className="text-sm">{cartItem.product.title}</h3>
          <p className="text-sm opacity-80">${cartItem.product.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="bg-gray-900 text-white px-2 py-1 rounded"
          aria-label="Remove from cart"
          onClick={() => removeFromCart(cartItem.product.id)}
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </li>
  )
}
