import cn from '@/utils/cn'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import CategoryButtonItem from './CategoryButtonItem'
import { useParams } from 'react-router'

interface CategoryButtonsProps {
  className?: string
}

export default function CategoryButtons({ className }: CategoryButtonsProps) {
  const { category } = useParams()

  const { data: categories } = useQuery<string[]>(['categories'], async () => {
    const { data } = await axios.get<string[]>('https://fakestoreapi.com/products/categories')
    return data
  })

  return (
    <div className={cn('flex flex-wrap justify-center gap-4', className)}>
      <CategoryButtonItem to="/products" current={!category}>
        Todos
      </CategoryButtonItem>
      {categories?.map(item => (
        <CategoryButtonItem key={item} to={`/category/${item}`} current={category === item}>
          {item}
        </CategoryButtonItem>
      ))}
    </div>
  )
}
