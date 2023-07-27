import { Product } from "@/types/Product"
import useProductForm from "../hook/useProductForm"
import { useMemo } from "react"
import TextInput from "@/components/common/forms/TextInput"
import Button from "@/components/common/Button"
import useAllCategories from "@/hooks/useAllCategories"
import Select from "@/components/common/forms/Select"

interface ProductFormProps {
  initialProduct?: Product | null
}

export default function ProductForm ({ initialProduct }: ProductFormProps) {
  const { register, handleSubmit, errors } = useProductForm(initialProduct)
  const { categories } = useAllCategories()

  const categoryOptions = useMemo(() => (
    categories?.map(item => ({
      value: item.id,
      label: item.name
    })) ?? []
  ), [categories])

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <TextInput
        label="Título"
        {...register('title')}
        error={errors.title?.message}
      />
      <TextInput
        label="Descripción"
        {...register('description')}
        error={errors.description?.message}
      />
      <TextInput
        label="Precio"
        {...register('price')}
        error={errors.price?.message}
      />
      <Select
        label="Categoría"
        {...register('categoryId')}
        error={errors.categoryId?.message}
        options={categoryOptions}
        allowEmpty
      />
      <TextInput
        label="Imagen"
        {...register('image')}
        error={errors.image?.message}
      />
      <TextInput
        label="Stock"
        {...register('stock')}
        error={errors.stock?.message}
      />
      <TextInput
        label="Tags"
        helpText="Separados por coma"
        {...register('tags')}
        error={errors.tags?.message}
      />
      <Button
        type="submit"
        className="mt-4"
      >
        Guardar
      </Button>
    </form>
  )
}