import BaseLayout from "@/components/layouts/BaseLayout"
import LoginForm from "./components/LoginForm"
import ContainerLayout from "@/components/layouts/ContainerLayout"

export default function LoginPage() {
  return (
    <BaseLayout>
      <ContainerLayout className="flex flex-col items-center justify-center flex-1 gap-3">
        <h1 className="text-2xl font-bold">
          Inicia sesión con tu cuenta
        </h1>
        <LoginForm />
      </ContainerLayout>
    </BaseLayout>
  )
}