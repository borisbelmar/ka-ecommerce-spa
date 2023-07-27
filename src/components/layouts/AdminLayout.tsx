import Footer from "../common/Footer"

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <main className="min-h-screen flex flex-col bg-gray-950 text-white">
      <div className="flex-1 flex flex-col">
        {children}
      </div>
      <Footer />
    </main>
  )
}