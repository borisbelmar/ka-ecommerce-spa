import ContainerLayout from "@/components/layouts/ContainerLayout"

interface CategoryHeadProps {
  name: string
}

export default function CategoryHead ({ name }: CategoryHeadProps) {
  return (
    <div className="bg-indigo-500 text-white">
      <ContainerLayout className="py-24">
        <h1 className="font-semibold text-3xl">
          Productos en la categoría <span className="uppercase font-bold">{name}</span>
        </h1>
        <p className="text-lg opacity-80 mt-2">
          Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quisquam, voluptatum
        </p>
      </ContainerLayout>
    </div>
  )
}