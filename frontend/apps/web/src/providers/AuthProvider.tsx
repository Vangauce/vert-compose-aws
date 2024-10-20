'use client'

import { SessionProvider } from 'next-auth/react'
import { PropsWithChildren } from 'react'

/**
 * Proveedor de autenticación que envuelve a los componentes hijos con un `SessionProvider`.
 *
 * @param {PropsWithChildren} props - Propiedades que incluyen los componentes hijos a ser envueltos.
 * @returns {JSX.Element} Un componente `SessionProvider` que envuelve a los hijos proporcionados.
 */
export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}
