import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

/**
 * Componente de diseño para la sección de cuenta.
 * 
 * Este componente se encarga de verificar si hay una sesión activa. Si no hay una sesión,
 * redirige al usuario a la página principal. Si hay una sesión activa, renderiza los 
 * componentes hijos dentro de un contenedor centrado.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Componentes hijos que se renderizarán dentro del diseño de cuenta.
 * @returns {JSX.Element | void} - Retorna un contenedor centrado con los componentes hijos o redirige a la página principal si no hay sesión.
 */
const AccountLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions)

  if (session === null) {
    return redirect('/')
  }

  return (
    <div className="flex-grow h-screen flex items-center justify-center -my-12 w-full">
      <div className="w-96">{children}</div>
    </div>
  )
}

export default AccountLayout
