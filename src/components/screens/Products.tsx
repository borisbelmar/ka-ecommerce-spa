import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import type { Product } from "@/types/Product"
import BaseLayout from "../layouts/BaseLayout"
import ContainerLayout from "../layouts/ContainerLayout"
import ProductGrid from "../common/ProductGrid"

export default function Products() {
  const { data: products } = useQuery<Product[]>(['products'], async () => {
    const { data } = await axios.get<Product[]>('https://fakestoreapi.com/products')
    return data
  })

  return (
    <BaseLayout>
      <div className="bg-indigo-500 text-white">
        <ContainerLayout className="py-24">
          <h1 className="font-semibold text-3xl">
            Nuestros productos
          </h1>
          <p className="text-lg opacity-80 mt-2">
            Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quisquam, voluptatum
          </p>
        </ContainerLayout>
      </div>
      {products && <ProductGrid products={products} />}
    </BaseLayout>
  )
}
