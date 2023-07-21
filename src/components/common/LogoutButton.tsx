import { useSetToken } from "@/atoms/token.atom"

export default function LogoutButton () {
  const setToken = useSetToken()

  return (
    <button
      onClick={() => setToken('')}
      className="bg-indigo-950 hover:bg-red-700 font-semibold text-white px-4 py-2 rounded"
    >
      Cerrar Sesión
    </button>
  )
}