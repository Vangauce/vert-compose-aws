/**
 * Componente UserSession
 * 
 * Este componente muestra el estado de la sesión actual del usuario y su nombre de usuario utilizando la librería `next-auth`.
 * Utiliza Tailwind CSS para el estilo y `tailwind-merge` para combinar condicionalmente las clases.
 */

'use client'

import { useSession } from 'next-auth/react'
import { twMerge } from 'tailwind-merge'

/**
 * Componente Funcional UserSession
 * 
 * Este componente obtiene la sesión actual usando el hook `useSession` de `next-auth/react`.
 * Muestra el estado de la sesión y el nombre de usuario en una lista estilizada.
 */
const UserSession: React.FC = () => {
  // Obtiene la sesión actual
  const session = useSession()

  return (
    <ul className="flex flex-col gap-4">
      {/* Muestra el estado de la sesión */}
      <li className="flex items-center gap-4">
        <span className="w-40 font-medium">Sesión</span>
        <span
          className={twMerge(
            'rounded bg-white px-2 py-1.5 leading-none shadow-sm outline outline-1 outline-gray-900/10',
            // Aplica estilos condicionalmente si la sesión está autenticada
            session.status === 'authenticated' &&
              'bg-verde-100 text-verde-800 outline-verde-700/30'
          )}
        >
          {session.status}
        </span>
      </li>

      {/* Muestra el nombre de usuario */}
      <li className="flex items-center gap-4">
        <span className="w-40 font-medium">Nombre de usuario</span>
        <span className="rounded bg-white px-2 py-1.5 leading-none shadow-sm outline outline-1 outline-gray-900/10">
          {/* Muestra el nombre de usuario o 'undefined' si no está disponible */}
          {session.data?.user?.username || 'undefined'}
        </span>
      </li>
    </ul>
  )
}

export default UserSession