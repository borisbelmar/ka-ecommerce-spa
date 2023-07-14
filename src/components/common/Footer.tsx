import ContainerLayout from "../layouts/ContainerLayout"

export default function Footer () {
  return (
    <footer className="bg-gray-900 text-white">
      <ContainerLayout className="py-2 flex justify-center items-center">
        <div className="p-4">
          Made with ❤️ by <a className="text-indigo-500 hover:text-indigo-600 transition" href="https://dobleb.cl" target="_blank" rel="noreferer">dobleb.cl</a>
        </div>
      </ContainerLayout>
    </footer>
  )
}
