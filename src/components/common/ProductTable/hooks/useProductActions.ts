import { useSession } from "@/atoms/session.atom"
import getProductService from "@/services/getProductService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useCallback } from "react"
import { toast } from "react-hot-toast"

export default function useProductActions(id: string) {
  const session = useSession()
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: getProductService({ token: session?.token }).deleteProduct,
    onSuccess: async () => {
      toast.success("Product deleted")
      await queryClient.invalidateQueries(["products"])
    },
    onError: () => {
      toast.error("Error deleting product")
    }
  })

  const deleteProduct = useCallback(() => {
    window.confirm("Estás seguro que quieres eliminar este producto?") && mutate(id)
  }, [id, mutate])

  return {
    deleteProduct
  }
}