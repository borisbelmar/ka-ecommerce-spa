import type { Product } from "@/types/Product"
import CategoryButtons from "./CategoryButtons"
import ProductCard from "./ProductCard"
import ContainerLayout from "../layouts/ContainerLayout"
import { useCart } from "../context/CartContext"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid ({ products }: ProductGridProps) {
  const { addToCart, cart, removeFromCart } = useCart()

  return (
    <ContainerLayout className="py-8 gap-8 flex flex-col">
      <CategoryButtons />
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            inCart={!!cart[product.id]}
            onAddToCart={() => addToCart(product)}
            onRemoveFromCart={() => removeFromCart(product.id)}
          />
        ))}
      </ul>
    </ContainerLayout>
  )
}