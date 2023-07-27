import { Link } from "react-router-dom"
import BaseLayout from "../layouts/BaseLayout"
import ContainerLayout from "../layouts/ContainerLayout"

interface ErrorPageProps {
  title: string
  message: string
  backTo?: string
  backText?: string
}

export default function ErrorPage({
  title,
  message,
  backTo = '/',
  backText = 'Volver al Home'
}: ErrorPageProps) {
  return (
    <BaseLayout>
      <ContainerLayout className="flex flex-col justify-center items-center flex-1">
        <div className="text-4xl font-bold mb-4">
          {title}
        </div>
        <div className="text-2xl">
          {message}
        </div>
        <Link
          to={backTo}
          replace
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded text-sm font-semibold transition mt-8"
        >
          {backText}
        </Link>
      </ContainerLayout>
    </BaseLayout>
  )
}
