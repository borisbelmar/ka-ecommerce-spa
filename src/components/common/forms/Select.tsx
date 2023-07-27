import { type ComponentProps, useId, forwardRef } from 'react'
import InputLayout, { InputLayoutProps } from './InputLayout'

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends Omit<InputLayoutProps, 'id' | 'children'>, ComponentProps<'select'> {
  options: SelectOption[]
  allowEmpty?: boolean
}

// HOC: Higher Order Component

const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  error,
  helpText,
  options,
  allowEmpty,
  ...props
}: SelectProps, ref) => {
  const inputId = useId()

  return (
    <InputLayout
      label={label}
      id={inputId}
      error={error}
      helpText={helpText}
    >
      <select
        id={inputId}
        className="w-full bg-gray-800 rounded-md px-4 py-2"
        {...props}
        ref={ref}
      >
        {allowEmpty && <option value="">Selecciona una opción</option>}
        {options.map(item => (
          <option key={item.value} value={item.value}>{item.label}</option>
        ))}
      </select>
    </InputLayout>
  )
})

export default Select
