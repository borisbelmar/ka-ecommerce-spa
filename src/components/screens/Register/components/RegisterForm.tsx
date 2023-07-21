import { Link } from "react-router-dom"
import useRegisterForm from "../hooks/useRegisterForm"
import TextInput from "@/components/common/forms/TextInput"
import Button from "@/components/common/Button"

const inputs = {
  firstName: { label: 'Nombre', type: 'text' },
  lastName: { label: 'Apellido', type: 'text' },
  email: { label: 'Correo electrónico', type: 'email' },
  password: { label: 'Contraseña', type: 'password' },
  repeat_password: { label: 'Repetir contraseña', type: 'password' }
}

export default function RegisterForm() {
  const {
    onSubmit,
    errors,
    register
  } = useRegisterForm()

  const hasErrors = Object.keys(errors).length > 0

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-3 p-4 bg-gray-900 rounded-md w-full max-w-md"
    >
      {Object.keys(inputs).map(inputKey => {
        const name = inputKey as keyof typeof inputs
        return (
          <TextInput
            key={inputKey}
            label={inputs[name].label}
            type={inputs[name].type}
            error={errors[name]?.message}
            {...register(name)}
          />
        )
      })}
      <Button
        type="submit"
        disabled={hasErrors}
        className="mt-2"
      >
        Registrarme
      </Button>
      <Link to="/login" className="text-center text-indigo-500 hover:text-indigo-600 text-sm">
        ¿Ya tienes cuenta? Inicia sesión
      </Link>
    </form>
  )
}