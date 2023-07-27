export interface Product {
  id: string
  title: string
  description: string
  price: number
  categoryId: string | null
  image: string
  stock: number
  tags: string[]
}