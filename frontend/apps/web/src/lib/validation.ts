import { z } from 'zod'

const loginFormSchema = z.object({
  username: z.string().min(6),
  password: z.string().min(8)
})

const registerFormSchema = z
  .object({
    username: z.string().min(6),
    password: z.string().min(6),
    passwordRetype: z.string().min(6)
  })
  .refine((data) => data.password === data.passwordRetype, {
    message: 'Passwords are not matching',
    path: ['passwordRetype']
  })

const profileFormSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional()
})

const deleteAccountFormSchema = z
  .object({
    username: z.string().min(6),
    usernameCurrent: z.string().min(6).optional()
  })
  .passthrough()
  .refine((data) => data.username === data.usernameCurrent, {
    message: 'Username is not matching',
    path: ['username']
  })

/**
 * Esquema de validación para el formulario de cambio de contraseña.
 * 
 * Este esquema se utiliza para validar los campos del formulario de cambio de contraseña,
 * asegurando que las contraseñas cumplan con los requisitos mínimos y que las nuevas contraseñas coincidan.
 * 
 * Propiedades del Esquema:
 * - `password`: Una cadena que representa la contraseña actual del usuario. Debe tener al menos 8 caracteres.
 * - `passwordNew`: Una cadena que representa la nueva contraseña del usuario. Debe tener al menos 8 caracteres y no debe ser igual a la contraseña actual.
 * - `passwordRetype`: Una cadena que representa la confirmación de la nueva contraseña. Debe tener al menos 8 caracteres y debe coincidir con `passwordNew`.
 * 
 * Reglas de Validación:
 * - La nueva contraseña (`passwordNew`) no debe ser igual a la contraseña actual (`password`).
 * - La nueva contraseña (`passwordNew`) debe coincidir con la confirmación de la nueva contraseña (`passwordRetype`).
 * 
 * Ejemplo de Uso:
 * ```typescript
 * import { changePasswordFormSchema } from './validation';
 * 
 * const formData = {
 *   password: 'currentPassword123',
 *   passwordNew: 'newPassword123',
 *   passwordRetype: 'newPassword123'
 * };
 * 
 * try {
 *   changePasswordFormSchema.parse(formData);
 *   console.log('Validación exitosa');
 * } catch (e) {
 *   console.error('Errores de validación:', e.errors);
 * }
 * ```
 */
const changePasswordFormSchema = z
  .object({
    password: z.string().min(8),
    passwordNew: z.string().min(8),
    passwordRetype: z.string().min(8)
  })
  .refine((data) => data.passwordNew !== data.password, {
    message: 'Both new and current passwords are same',
    path: ['passwordNew']
  })
  .refine((data) => data.passwordNew === data.passwordRetype, {
    message: 'Passwords are not matching',
    path: ['passwordRetype']
  })

export {
  changePasswordFormSchema,
  deleteAccountFormSchema,
  loginFormSchema,
  profileFormSchema,
  registerFormSchema
}
