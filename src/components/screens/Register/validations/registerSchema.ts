import { z } from 'zod'

const registerSchema = z.object({
  email: z.string().email('El correo electrónico no es válido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  firstName: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  lastName: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  repeat_password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres')
}).refine(data => data.password === data.repeat_password, {
  message: "Las contraseñas no coinciden",
  path: ['repeat_password']
})

export default registerSchema
