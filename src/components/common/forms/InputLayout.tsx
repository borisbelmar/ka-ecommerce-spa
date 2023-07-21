export interface InputLayoutProps {
  label: string
  id: string
  error?: string
  helpText?: string
  children: React.ReactNode
}

export default function InputLayout({ label, id, children, error, helpText }: InputLayoutProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-white">
        {label}
      </label>
      {children}
      {error && (
        <span className="text-red-500 text-sm">
          {error}
        </span>
      )}
      {helpText && (
        <span className="text-sm opacity-50">
          {helpText}
        </span>
      )}
    </div>
  )
}