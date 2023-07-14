import { createContext, useState, useCallback, useContext } from "react"
import type { CartItem } from "@/types/CartItem"
import type { Product } from "@/types/Product"

interface CartContextValue {
  cart: Record<string | number, CartItem>
  isCartOpen: boolean
  addToCart: (item: Product) => void
  removeFromCart: (id: string | number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  incrementQuantity: (id: string | number) => void
  decrementQuantity: (id: string | number) => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextValue | null>(null)

interface CartContextProviderProps {
  children: React.ReactNode
}

export function CartContextProvider ({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Record<string | number, CartItem>>({})
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = useCallback((item: Product) => {
    setCart(prevCart => ({ ...prevCart, [item.id]: { product: item, qty: 1 } }))
  }, [])

  const removeFromCart = useCallback((id: string | number) => {
    setCart(prevCart => {
      const newCart = { ...prevCart }
      delete newCart[id]
      return newCart
    })
  }, [])

  const clearCart = useCallback(() => {
    setCart({})
  }, [])

  const openCart = useCallback(() => {
    setIsCartOpen(true)
  }, [])

  const closeCart = useCallback(() => {
    setIsCartOpen(false)
  }, [])

  const incrementQuantity = useCallback((id: string | number) => {
    setCart(prevCart => {
      const selectedCartItem = prevCart[id]
      if (!selectedCartItem) {
        return prevCart
      } else {
        return ({ ...prevCart, [id]: { ...prevCart[id], qty: prevCart[id].qty + 1 } })
      }
    })
  }, [])

  const decrementQuantity = useCallback((id: string | number) => {
    setCart(prevCart => {
      const selectedCartItem = prevCart[id]
      if (!selectedCartItem) {
        return prevCart
      } else if (selectedCartItem.qty <= 1) {
        const newCart = { ...prevCart }
        delete newCart[id]
        return newCart
      } else {
        return ({ ...prevCart, [id]: { ...prevCart[id], qty: prevCart[id].qty - 1 } })
      }
    })
  }, [])

  const totalItems = Object.values(cart).reduce((acc, item) => acc + item.qty, 0)
  const totalPrice = Object.values(cart).reduce((acc, item) => acc + item.qty * item.product.price, 0)

  return (
    <CartContext.Provider value={{
      cart,
      isCartOpen,
      addToCart,
      removeFromCart,
      clearCart,
      openCart,
      closeCart,
      incrementQuantity,
      decrementQuantity,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart () {
  const contextValue = useContext(CartContext)

  if (!contextValue) {
    throw new Error('useCart must be used within CartContextProvider')
  }

  return contextValue
}