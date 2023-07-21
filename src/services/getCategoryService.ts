import { Category } from "@/types/Category"
import axios from "axios"

export default function getCategoryService () {
  const client = axios.create({
    baseURL: import.meta.env.VITE_SERVICE_URL
  })

  const getCategories = async (): Promise<Category[]> => {
    const { data } = await client.get("/categories")
    return data
  }

  const getCategoryById = async (id: string): Promise<Category | null> => {
    const { data } = await client.get(`/categories/${id}`)
    return data
  }

  return {
    getCategories,
    getCategoryById
  }
}