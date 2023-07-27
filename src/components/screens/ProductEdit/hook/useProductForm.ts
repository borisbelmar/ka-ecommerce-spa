import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { productFormSchema } from "../validations/productFormSchema"
import { Product } from "@/types/Product"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import getProductService from "@/services/getProductService"
import { toast } from "react-hot-toast"
import { useSession } from "@/atoms/session.atom"

export default function useProductForm(productData: Product | undefined | null) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: productData?.title ?? '',
      description: productData?.description ?? '',
      price: productData?.price ?? 0,
      stock: productData?.stock ?? 0,
      categoryId: productData?.categoryId ?? null,
      tags: productData?.tags?.join(', ') ?? '',
      image: productData?.image ?? ''
    },
    resolver: zodResolver(productFormSchema)
  })

  const session = useSession()

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationKey: ['products', productData?.id],
    mutationFn: async (data: Product) => {
      const response = await getProductService({ token: session?.token }).updateProduct(data)
      return response
    },
    onSuccess: async () => {
      toast.success('Producto actualizado con éxito')
      await queryClient.invalidateQueries(['products'])
    },
    onError: () => {
      toast.error('No se pudo actualizar el producto')
    }
  })

  const onSubmit = handleSubmit(data => {
    mutate({
      ...data,
      id: productData?.id ?? '',
      tags: data.tags.split(',').map(tag => tag.trim()),
      categoryId: data.categoryId || null
    })
  })
  
  return {
    register,
    handleSubmit: onSubmit,
    errors
  }
}