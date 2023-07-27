import getProductService from "@/services/getProductService"
import { useQuery } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"

export default function useProductData() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { data: productData, error } = useQuery(['products', id], async () => {
    const data = await getProductService().getProductById(id!)
    return data
  }, {
    enabled: !!id,
    retry: false
  })
  
  if (error) {
    navigate('/admin', { replace: true })
  }

  return {
    productData
  }
}