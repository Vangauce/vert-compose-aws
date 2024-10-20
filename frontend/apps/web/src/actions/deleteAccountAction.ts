'use server'

import { getApiClient } from '@/lib/api'
import { authOptions } from '@/lib/auth'
import { deleteAccountFormSchema } from '@/lib/validation'
import { ApiError } from '@frontend/types/api'
import { getServerSession } from 'next-auth'
import { z } from 'zod'

export type DeleteAccountFormSchema = z.infer<typeof deleteAccountFormSchema>

export type DeleteAccountAction = (
  data: DeleteAccountFormSchema
) => Promise<boolean>

/**
 * Elimina la cuenta del usuario autenticado.
 *
 * Esta función realiza los siguientes pasos:
 * 1. Obtiene la sesión del servidor utilizando `getServerSession`.
 * 2. Intenta obtener un cliente API autenticado con la sesión obtenida.
 * 3. Si la sesión no es nula, llama al método `usersDeleteAccountDestroy` del cliente API para eliminar la cuenta del usuario.
 * 4. Si la eliminación es exitosa, retorna `true`.
 * 5. Si ocurre un error y es una instancia de `ApiError`, retorna `false`.
 * 6. Si la sesión es nula o ocurre otro tipo de error, también retorna `false`.
 *
 * @returns {Promise<boolean>} `true` si la cuenta fue eliminada exitosamente, `false` en caso contrario.
 */
const deleteAccountAction = async () => {
  const session = await getServerSession(authOptions)

  try {
    const apiClient = await getApiClient(session)

    if (session !== null) {
      await apiClient.users.usersDeleteAccountDestroy()

      return true
    }
  } catch (error) {
    if (error instanceof ApiError) {
      return false
    }
  }

  return false
}

export { deleteAccountAction }
