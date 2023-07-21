import Button from "@/components/common/Button"
import TextInput from "@/components/common/forms/TextInput"
import { Link } from "react-router-dom"
import useLoginForm from "../hooks/useLoginForm"

export default function LoginForm () {
  const {
    onSubmit,
    errors,
    register
  } = useLoginForm()

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-3 p-4 bg-gray-900 rounded-md w-full max-w-md"
    >
      <TextInput
        label="Correo electrónico"
        type="email"
        error={errors.email?.message}
        {...register('email')}
      />
      <TextInput
        label="Contraseña"
        type="password"
        error={errors.password?.message}
        {...register('password')}
      />
      <Button
        type="submit"
        disabled={Object.keys(errors).length > 0}
        className="mt-2"
      >
        Iniciar sesión
      </Button>
      <Link to="/register" className="text-center text-indigo-500 hover:text-indigo-600 text-sm">
        ¿No tienes una cuenta? Regístrate
      </Link>
    </form>
  )
}