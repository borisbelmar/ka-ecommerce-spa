import { Link } from "react-router-dom"

export default function LoginButton () {
  return (
    <Link
      to="/login"
      className="bg-indigo-500 hover:bg-indigo-600 font-semibold text-white px-4 py-2 rounded"
    >
      Iniciar sesión
    </Link>
  )
}