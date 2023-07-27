import { useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import BaseLayout from "../layouts/BaseLayout"
import ContainerLayout from "../layouts/ContainerLayout"
import Breadcrumbs from "../common/Breadcrumbs"
import Button from "../common/Button"
import getProductService from "@/services/getProductService"

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: product } = useQuery(['product', id], async () => {
    try {
      return getProductService().getProductById(id!)
    } catch (error) {
      console.error(error)
      return null
    }
  })
  
  useEffect(() => {
    if (product === null) {
      navigate('/404', { replace: true })
    }
  }, [navigate, product])

  return (
    <BaseLayout>
      <ContainerLayout className="py-8">
        <Breadcrumbs currentLabel={product?.title || ''} className="mb-8" />
        <div className="flex flex-col md:flex-row gap-4">
          <img src={product?.image} alt={product?.title} className="w-full md:w-2/3 h-64 md:h-96 object-scale-down p-4 bg-white rounded-md" />
          <div className="p-4 flex flex-col gap-8 items-start">
            <div className="flex flex-col gap-4">
              <div className="space-y-1">
                <h1 className="text-xl">{product?.title}</h1>
                <p className="text-sm opacity-80 uppercase">{product?.categoryId}</p>
              </div>
              <p className="text-2xl font-bold">${product?.price}</p>
              <Button aria-label="Add to card">
                <ShoppingBagIcon className="w-5 h-5" />
                Añadir al carrito
              </Button>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Descripción</h3>
              <p className="text-sm opacity-80">
                {product?.description}
              </p>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </BaseLayout>
  )
}