import ProductGrid from "@/components/common/ProductGrid"
import useCategoryProducts from "../hooks/useCategoryProducts"

interface CategoryProductsProps {
  categoryId: string
}

export default function CategoryProducts ({ categoryId }: CategoryProductsProps) {
  const { products } = useCategoryProducts(categoryId)

  if (!products) return null

  return (
    <ProductGrid products={products} />
  )
}