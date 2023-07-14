import cn from "@/utils/cn"
import { useMemo } from "react"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"

interface BreadcrumbsProps {
  currentLabel: string
  className?: string
}

export default function Breadcrumbs ({ currentLabel, className }: BreadcrumbsProps) {
  const location = useLocation()

  const breadcrumbs = useMemo(() => {
    const paths = location.pathname.split('/').filter(path => path)
    const breadcrumbs = paths.map((path, index) => {
      const breadcrumb = {
        id: index,
        name: index === paths.length - 1 ? currentLabel : path,
        href: `/${paths.slice(0, index + 1).join('/')}`
      }
      return breadcrumb
    })
    return breadcrumbs
  }, [location, currentLabel])

  const isPathActive = (href: string) => {
    return location.pathname === href
  }

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((breadcrumb, idx) => (
          <li key={breadcrumb.id}>
            <div className="flex items-center">
              <Link
                to={breadcrumb.href}
                className={cn('mr-2 text-sm font-medium uppercase', !isPathActive(breadcrumb.href) && 'opacity-80 hover:opacity-100 transition')}
              >
                {breadcrumb.name}
              </Link>
              {idx < breadcrumbs.length - 1 && (
                <svg viewBox="0 0 6 20" aria-hidden="true" className="h-5 w-auto text-gray-500">
                  <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                </svg>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}