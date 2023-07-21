import { type ComponentProps, useId, forwardRef } from 'react'
import InputLayout, { InputLayoutProps } from './InputLayout'

interface TextInputProps extends Omit<InputLayoutProps, 'id' | 'children'>, ComponentProps<'input'> {}

// HOC: Higher Order Component

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
  label,
  error,
  helpText,
  ...props
}: TextInputProps, ref) => {
  const inputId = useId()

  return (
    <InputLayout
      label={label}
      id={inputId}
      error={error}
      helpText={helpText}
    >
      <input
        id={inputId}
        className="bg-gray-800 rounded-md px-4 py-2"
        {...props}
        ref={ref}
      />
    </InputLayout>
  )
})

export default TextInput
