import { useSession } from "@/atoms/session.atom"
import { useNavigate } from "react-router-dom"

interface UsePrivateRouteOptions {
  adminOnly?: boolean
}

export default function usePrivateRoute({ adminOnly = false }: UsePrivateRouteOptions) {
  const session = useSession()
  const navigate = useNavigate()

  if (!session) {
    navigate('/login', { replace: true })
    return
  }

  if (adminOnly && session.user.role !== 'ADMIN') {
    navigate('/403', { replace: true })
    return
  }
}