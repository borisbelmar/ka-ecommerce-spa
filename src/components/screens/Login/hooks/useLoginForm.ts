import { useSetToken } from "@/atoms/token.atom"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import loginSchema from "../validations/loginSchema"
import getAuthService from "@/services/getAuthService"
import { AxiosError } from "axios"
import { toast } from "react-hot-toast"

export default function useLoginForm () {
  const navigate = useNavigate()
  const setToken = useSetToken()

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = handleSubmit(async data => {
    try {
      const authService = getAuthService()
      const { token } = await authService.login(data)
      setToken(token)
      toast.success('Sesión iniciada exitosamente')
      navigate('/')
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          toast.error('Credenciales incorrectas')
          return
        }
      }
      toast.error('Ocurrió un error inesperado')
    }
  })

  return {
    register,
    onSubmit,
    errors
  }
}