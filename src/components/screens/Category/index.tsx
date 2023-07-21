import BaseLayout from "../../layouts/BaseLayout"
import useCategoryData from "./hooks/useCategoryData"
import CategoryHead from "./components/CategoryHead"
import CategoryProducts from "./components/CategoryProducts"

export default function Category() {
  const { category } = useCategoryData()

  if (!category) return null

  return (
    <BaseLayout>
      <CategoryHead name={category.name} />
      <CategoryProducts categoryId={category.id} />
    </BaseLayout>
  )
}
