import getCategoryService from "@/services/getCategoryService"
import { useQuery } from "@tanstack/react-query"

export default function useAllCategories () {
  const { data: categories } = useQuery(['categories'], async () => {
    return await getCategoryService().getCategories()
  })

  return {
    categories
  }
}