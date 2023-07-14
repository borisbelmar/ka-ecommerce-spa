import Navbar from "../common/Navbar"
import Footer from "../common/Footer"
import CartDrawer from "../common/CartDrawer"

interface BaseLayoutProps {
  children: React.ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-gray-950 text-white">
        <Navbar />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </main>
      <CartDrawer />
    </>
  )
}