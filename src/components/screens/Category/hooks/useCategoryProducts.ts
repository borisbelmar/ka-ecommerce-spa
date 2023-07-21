import getProductService from "@/services/getProductService"
import { useQuery } from "@tanstack/react-query"

export default function useCategoryProducts (categoryId: string) {
  const { data: products, isLoading } = useQuery(
    ['products', categoryId],
    async () => {
      return await getProductService().getProductsByCategoryId(categoryId)
    },
    {
      enabled: !!categoryId
    }
  )

  return {
    products,
    isLoading
  }
}