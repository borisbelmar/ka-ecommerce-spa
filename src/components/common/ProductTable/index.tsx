import { useQuery } from "@tanstack/react-query"
import TableHead from "./components/TableHead"
import getProductService from "@/services/getProductService"
import TableRow from "./components/TableRow"

const productTableItems = [
  { label: "Title", key: "title" },
  { label: "Price", key: "price" },
  { label: "Stock", key: "stock" }
]

export default function ProductTable () {
  const { data: products } = useQuery(['products'], async () => {
    const data = await getProductService().getProducts()
    return data
  })

  if (!products) {
    return null
  }

  return (
    <table className="w-full">
      <TableHead
        items={productTableItems.map(item => item.label)}
        hasActions
      />
      <tbody>
        {products.map(product => (
          <TableRow
            key={product.id}
            product={product}
            keys={productTableItems.map(item => item.key)}
            hasActions
          />
        ))}
      </tbody>
    </table>
  )
}