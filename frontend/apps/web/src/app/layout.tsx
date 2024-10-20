import { AuthProvider } from '@/providers/AuthProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AquaCircuit - Django & Next.js Bootstrap Template'
}

/**
 * Componente de diseño raíz que envuelve toda la aplicación.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Elementos secundarios que se renderizarán dentro del diseño.
 * 
 * @returns {JSX.Element} - Elemento JSX que representa el diseño raíz de la aplicación.
 * 
 * @remarks
 * Este componente establece la estructura básica de la aplicación, incluyendo la configuración del idioma,
 * la clase CSS para el cuerpo del documento y el proveedor de autenticación.
 * 
 * @example
 * ```tsx
 * <RootLayout>
 *   <YourComponent />
 * </RootLayout>
 * ```
 */
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={twMerge(
          'bg-gray-50 text-sm text-gray-700 antialiased',
          inter.className
        )}
      >
        <AuthProvider>
          <div className="px-6">
            <div className="container mx-auto my-12 max-w-6xl">{children}</div>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
