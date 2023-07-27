import { Link } from "react-router-dom"
import ContainerLayout from "../layouts/ContainerLayout"
import CartButton from "./CartButton"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import { useSession } from "@/atoms/session.atom"

export default function Navbar () {
  const session = useSession()

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
              {session?.user?.role === 'ADMIN' && (
                <li className="">
                  <Link to="/admin" className="hover:text-gray-400">Dashboard</Link>
                </li>
              )}
            </ol>
            <div className="flex items-center gap-4">
              {!session ? <LoginButton /> : <LogoutButton />}
              <CartButton />
            </div>
          </div>
        </ContainerLayout>
      </nav>
    </>
  )
}