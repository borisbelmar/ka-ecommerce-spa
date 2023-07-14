import cn from "@/utils/cn"

interface ContainerLayoutProps {
  children: React.ReactNode,
  className?: string
}

export default function ContainerLayout({ children, className }: ContainerLayoutProps) {
  return (
    <section className={cn(
      'w-full mx-auto max-w-screen-xl px-8 items-center justify-between',
      className
    )}>
      {children}
    </section>
  )
}
