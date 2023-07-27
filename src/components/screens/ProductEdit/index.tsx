import AdminLayout from "@/components/layouts/AdminLayout"
import ContainerLayout from "@/components/layouts/ContainerLayout"
import useProductData from "./hook/useProductData"
import ProductForm from "./components/ProductForm"

export default function ProductEdit () {
  const { productData } = useProductData()

  return (
    <AdminLayout>
      <ContainerLayout className="py-16">
        <h1 className="text-4xl font-bold mb-8">
          Editando producto {productData?.title}
        </h1>
        <ProductForm key={productData?.id} initialProduct={productData} />
      </ContainerLayout>
    </AdminLayout>
  )
}