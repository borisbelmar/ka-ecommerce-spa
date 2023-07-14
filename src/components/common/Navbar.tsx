import { Link } from "react-router-dom"
import ContainerLayout from "../layouts/ContainerLayout"
import CartButton from "./CartButton"

export default function Navbar () {
  return (
    <>
      <nav className="bg-gray-900 text-white py-2">
        <ContainerLayout className="py-2 flex">
          <Link to="/" className="mr-8">
            <div className="font-bold text-xl">My eCommerce App</div>
          </Link>
          <div className="flex items-center gap-8">
            <ol className="flex space-x-8 items-center">
              <li className="">
                <Link to="/products" className="hover:text-gray-400">Productos</Link>
              </li>
              <li className="">
                <Link to="/about" className="hover:text-gray-400">About</Link>
              </li>
            </ol>
            <div className="flex items-center gap-4">
              <button className="bg-indigo-500 hover:bg-indigo-600 font-semibold text-white px-4 py-2 rounded">
                Iniciar sesión
              </button>
              <CartButton />
            </div>
          </div>
        </ContainerLayout>
      </nav>
    </>
  )
}