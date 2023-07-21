import cn from '@/utils/cn'
import { useQuery } from '@tanstack/react-query'
import CategoryButtonItem from './CategoryButtonItem'
import { useParams } from 'react-router'
import getCategoryService from '@/services/getCategoryService'

interface CategoryButtonsProps {
  className?: string
}

export default function CategoryButtons({ className }: CategoryButtonsProps) {
  const { category } = useParams()

  const { data: categories } = useQuery(['categories'], async () => {
    return getCategoryService().getCategories()
  })

  return (
    <div className={cn('flex flex-wrap justify-center gap-4', className)}>
      <CategoryButtonItem to="/products" current={!category}>
        Todos
      </CategoryButtonItem>
      {categories?.map(item => (
        <CategoryButtonItem key={item.id} to={`/category/${item.id}`} current={category === item.id}>
          {item.name}
        </CategoryButtonItem>
      ))}
    </div>
  )
}
