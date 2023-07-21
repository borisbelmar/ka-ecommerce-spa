import { useSetToken } from "@/atoms/token.atom"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import registerSchema from "../validations/registerSchema"
import getAuthService from "@/services/getAuthService"
import { AxiosError } from "axios"
import { toast } from "react-hot-toast"

export default function useRegisterForm () {
  const navigate = useNavigate()
  const setToken = useSetToken()

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      repeat_password: ''
    },
    resolver: zodResolver(registerSchema)
  })

  const onSubmit = handleSubmit(async data => {
    try {
      const authService = getAuthService()
      const { token } = await authService.register(data)
      setToken(token)
      toast.success('Cuenta creada exitosamente')
      navigate('/')
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          toast.error('El correo electrónico ya está en uso')
          return
        }
        if (error.response?.status === 400) {
          toast.error('Los datos enviados no son válidos')
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