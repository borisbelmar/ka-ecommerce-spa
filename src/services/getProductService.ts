import { Product } from "@/types/Product"
import axios from "axios"

export default function getProductService () {
  const client = axios.create({
    baseURL: import.meta.env.VITE_SERVICE_URL
  })

  const getProducts = async (): Promise<Product[]> => {
    const { data } = await client.get("/products")
    return data
  }

  const getProductById = async (id: string): Promise<Product | null> => {
    const { data } = await client.get(`/products/${id}`)
    return data
  }

  const getProductsByCategoryId = async (categoryId: string): Promise<Product[]> => {
    const { data } = await client.get(`/products?category=${categoryId}`)
    return data
  }

  return {
    getProducts,
    getProductById,
    getProductsByCategoryId
  }
}