import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import BaseLayout from "../layouts/BaseLayout"
import ContainerLayout from "../layouts/ContainerLayout"
import type { Product } from "@/types/Product"
import { useParams } from "react-router"
import ProductGrid from "../common/ProductGrid"

export default function Category() {
  const { category } = useParams()

  const { data: products } = useQuery<Product[]>(['products', category], async () => {
    const { data } = await axios.get<Product[]>(`https://fakestoreapi.com/products/category/${category!}`)
    return data
  })

  return (
    <BaseLayout>
      <div className="bg-indigo-500 text-white">
        <ContainerLayout className="py-24">
          <h1 className="font-semibold text-3xl">
            Productos en la categoría <span className="uppercase font-bold">{category}</span>
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
