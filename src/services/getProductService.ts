import { Product } from "@/types/Product"
import axios from "axios"

interface ServiceOptions {
  token?: string
}

export default function getProductService (options: ServiceOptions = {}) {
  const client = axios.create({
    baseURL: import.meta.env.VITE_SERVICE_URL,
    headers: {
      Authorization: options.token ? `Bearer ${options.token}` : ""
    }
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

  const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
    const { data } = await client.post("/products", product)
    return data
  }

  const updateProduct = async (product: Product): Promise<Product> => {
    const { data } = await client.put(`/products/${product.id}`, product)
    return data
  }

  const deleteProduct = async (id: string): Promise<void> => {
    const { data } = await client.delete(`/products/${id}`)
    return data
  }

  return {
    getProducts,
    getProductById,
    getProductsByCategoryId,
    createProduct,
    updateProduct,
    deleteProduct
  }
}