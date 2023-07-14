import { Link } from "react-router-dom"
import BaseLayout from "../layouts/BaseLayout"
import ContainerLayout from "../layouts/ContainerLayout"

export default function NotFound() {
  
  return (
    <BaseLayout>
      <ContainerLayout className="flex flex-col justify-center items-center flex-1">
        <div className="text-4xl font-bold mb-4">
          Ups! :c
        </div>
        <div className="text-2xl">
          No encontramos lo que buscabas
        </div>
        <Link to="/" className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded text-sm font-semibold transition mt-8">
          Volver al Home
        </Link>
      </ContainerLayout>
    </BaseLayout>
  )
}
