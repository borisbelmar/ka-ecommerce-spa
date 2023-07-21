import getCategoryService from "@/services/getCategoryService"
import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useNavigate, useParams } from "react-router-dom"

export default function useCategoryData () {
  const { category } = useParams()
  const navigate = useNavigate()

  const { data: categoryData, isLoading } = useQuery(['category', category], async () => {
    try {
      return await getCategoryService().getCategoryById(category!)
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 404) {
          navigate('/404', { replace: true })
          return null
        }
      }
      throw error
    }
  })

  return {
    category: categoryData,
    isLoading
  }
}