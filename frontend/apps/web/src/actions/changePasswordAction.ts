'use server'

import { z } from 'zod'
import { changePasswordFormSchema } from '@/lib/validation'
import { ApiError, UserChangePasswordError } from '@frontend/types/api'
import { getApiClient } from '@/lib/api'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export type ChangePasswordFormSchema = z.infer<typeof changePasswordFormSchema>

export type ChangePasswordAction = (
  data: ChangePasswordFormSchema
) => Promise<UserChangePasswordError | boolean>

/**
 * Acción para cambiar la contraseña de un usuario.
 * 
 * @param data - Objeto que contiene las contraseñas necesarias para el cambio.
 * @param data.password - Contraseña actual del usuario.
 * @param data.passwordNew - Nueva contraseña que el usuario desea establecer.
 * @param data.passwordRetype - Repetición de la nueva contraseña para verificación.
 * 
 * @returns {Promise<boolean | UserChangePasswordError>} - Retorna `true` si el cambio de contraseña fue exitoso,
 * o un objeto `UserChangePasswordError` si hubo un error específico de la API. Retorna `false` en caso de otros errores.
 * 
 * @throws {ApiError} - Lanza un error si la llamada a la API falla.
 */
const changePasswordAction: ChangePasswordAction = async (data) => {
  const session = await getServerSession(authOptions)

  try {
    const apiClient = await getApiClient(session)

    await apiClient.users.usersChangePasswordCreate({
      password: data.password,
      password_new: data.passwordNew,
      password_retype: data.passwordRetype
    })

    return true
  } catch (error) {
    if (error instanceof ApiError) {
      return error.body as UserChangePasswordError
    }
  }

  return false
}

export { changePasswordAction }
