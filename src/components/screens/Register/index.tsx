import BaseLayout from "../../layouts/BaseLayout"
import ContainerLayout from "../../layouts/ContainerLayout"
import RegisterForm from "./components/RegisterForm"

export default function RegisterPage() {
  return (
    <BaseLayout>
      <ContainerLayout className="flex flex-col items-center justify-center flex-1 gap-3">
        <h1 className="text-2xl font-bold">
          Crea tu cuenta
        </h1>
        <RegisterForm />
      </ContainerLayout>
    </BaseLayout>
  )
}