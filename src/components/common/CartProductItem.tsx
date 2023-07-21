import type { CartItem } from "@/types/CartItem"
import { TrashIcon } from "@heroicons/react/24/outline"
import { useCart } from "../context/CartContext"

interface CartProductItemProps {
  cartItem: CartItem
  badProp: string
}

export default function CartProductItem({ cartItem }: CartProductItemProps) {
  const { removeFromCart, incrementQuantity, decrementQuantity } = useCart()

  return (
    <li className="flex items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <img
          className="w-16 h-16 object-cover rounded"
          src={cartItem.product.images[0]}
          alt={cartItem.product.title}
        />
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold -mb-1">
            {cartItem.product.title}
          </h3>
          <p className="text-xs opacity-50 mb-1">
            Stock: {cartItem.product.stock}
          </p>
          <p className="text-sm opacity-80">
            ${cartItem.product.price}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 rounded overflow-hidden border border-gray-800">
          <button
            className="bg-gray-950 text-white px-2 py-1 hover:bg-indigo-500 transition w-8 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Decrement quantity"
            disabled={cartItem.qty === 1}
            onClick={() => decrementQuantity(cartItem.product.id)}
          >
            -
          </button>
          <p className="text-sm opacity-80 w-8 text-center">{cartItem.qty}</p>
          <button
            className="bg-gray-950 text-white px-2 py-1 hover:bg-indigo-500 transition w-8 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Increment quantity"
            disabled={cartItem.qty === cartItem.product.stock}
            onClick={() => incrementQuantity(cartItem.product.id)}
          >
            +
          </button>
        </div>
        <button
          className="bg-gray-900 text-white px-2 py-1 rounded hover:text-red-500 transition"
          aria-label="Remove from cart"
          onClick={() => removeFromCart(cartItem.product.id)}
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </li>
  )
}
