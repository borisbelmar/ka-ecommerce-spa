import type { Product } from "./Product"

export interface CartItem {
  product: Product
  qty: number
}