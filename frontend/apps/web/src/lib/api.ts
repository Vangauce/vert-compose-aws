import { ApiClient } from '@frontend/types/api'
import { Session } from 'next-auth'

/**
 * Crea una instancia de ApiClient configurada con la URL base y los encabezados necesarios.
 * 
 * @param {Session | null} [session] - La sesión actual del usuario, que contiene el token de acceso.
 * @returns {Promise<ApiClient>} Una promesa que resuelve con una instancia de ApiClient.
 * 
 * @example
 * ```typescript
 * const apiClient = await getApiClient(session);
 * ```
 */
const getApiClient = async (session?: Session | null) => {
  return new ApiClient({
    BASE: process.env.API_URL,
    HEADERS: {
      ...(session && {
        Authorization: `Bearer ${session.accessToken}`
      })
    }
  })
}

export { getApiClient }
