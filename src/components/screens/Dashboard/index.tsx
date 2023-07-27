import ProductTable from "@/components/common/ProductTable"
import AdminLayout from "@/components/layouts/AdminLayout"
import ContainerLayout from "@/components/layouts/ContainerLayout"
import usePrivateRoute from "@/hooks/usePrivateRoute"

export default function Dashboard () {
  usePrivateRoute({ adminOnly: true })

  return (
    <AdminLayout>
      <ContainerLayout className="py-16">
        <div className="text-4xl font-bold mb-8">
          Dashboard
        </div>
        <ProductTable />
      </ContainerLayout>
    </AdminLayout>
  )
}