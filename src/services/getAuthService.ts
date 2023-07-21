import axios from "axios"

interface LoginResponse {
  token: string
}

interface LoginPayload {
  email: string
  password: string
}

interface RegisterPayload {
  email: string
  password: string
  firstName: string
  lastName: string
}

export default function getAuthService () {
  const client = axios.create({
    baseURL: import.meta.env.VITE_SERVICE_URL
  })

  const login = async (payload: LoginPayload): Promise<LoginResponse> => {
    const { data } = await client.post("/auth/login", payload)
    return data
  }

  const register = async (payload: RegisterPayload): Promise<LoginResponse> => {
    const { data } = await client.post("/auth/register", payload)
    return data
  }

  return {
    login,
    register
  }
}