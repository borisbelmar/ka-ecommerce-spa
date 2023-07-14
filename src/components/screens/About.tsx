import BaseLayout from "../layouts/BaseLayout"
import ContainerLayout from "../layouts/ContainerLayout"

export default function About() {
  return (
    <BaseLayout>
      <div className="bg-indigo-500 text-white">
        <ContainerLayout className="py-24">
          <h1 className="font-semibold text-3xl">Sobre nuestra tienda</h1>
          <p className="text-lg opacity-80 mt-2">
            Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quisquam, voluptatum
          </p>
        </ContainerLayout>
      </div>
      <ContainerLayout className="py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="font-semibold text-2xl mb-4">Nuestra historia</h2>
            <p className="text-lg opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum
            </p>
          </div>
        </div>
      </ContainerLayout>
    </BaseLayout>
  )
}