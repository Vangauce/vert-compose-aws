'use client'

import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

const SignInLink: React.FC = () => {
  return (
    <a
      onClick={() => signIn()}
      className="cursor-pointer text-purple-600 underline"
    >
      Login
    </a>
  )
}

const SignOutLink: React.FC = () => {
  return (
    <a
      onClick={() => signOut()}
      className="cursor-pointer text-purple-600 underline"
    >
      Logout
    </a>
  )
}

/**
 * `PagesOverview` es un componente funcional de React que renderiza una lista de enlaces
 * a diferentes páginas de la aplicación, categorizadas en "Authenticated pages" y "Anonymous pages".
 * 
 * - "Authenticated pages" incluye enlaces a páginas que requieren autenticación del usuario:
 *   - Perfil
 *   - Cambiar contraseña
 *   - Eliminar cuenta
 * 
 * - "Anonymous pages" incluye enlaces a páginas accesibles sin autenticación:
 *   - Iniciar sesión
 *   - Registrarse
 *   - Cerrar sesión
 * 
 * @returns Un elemento JSX que representa la vista general de las páginas.
 */
const PagesOverview: React.FC = () => {
  return (
    <ul className="flex flex-col gap-6">
      <li className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <span className="w-40 font-medium">Authenticated pages</span>

        <ul className="flex flex-row gap-6">
          <li>
            <Link href="/profile" className="text-purple-600 underline">
              Profile
            </Link>
          </li>

          <li>
            <Link href="/change-password" className="text-purple-600 underline">
              Change password
            </Link>
          </li>

          <li>
            <Link href="/delete-account" className="text-purple-600 underline">
              Delete account
            </Link>
          </li>
        </ul>
      </li>

      <li className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <span className="w-40 font-medium">Anonymous pages</span>

        <ul className="flex flex-row gap-6">
          <li>
            <SignInLink />
          </li>

          <li>
            <a href="/register" className="text-purple-600 underline">
              Register
            </a>
          </li>

          <li>
            <SignOutLink />
          </li>
        </ul>
      </li>
    </ul>
  )
}

export default PagesOverview
