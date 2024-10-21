"use client";

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bell, Menu, X, User, LogIn, UserPlus, Settings, LogOut } from 'lucide-react'

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link href={href} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
    {children}
  </Link>
)

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This should be managed by your auth system

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen)

  return (
    <nav className="bg-gray-800 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src="/logo.png" alt="Logo" width={32} height={32} />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="/">Inicio</NavLink>
                <NavLink href="/mapa-vertientes">Mapa de Vertientes</NavLink>
                <NavLink href="/datos-tiempo-real">Datos en Tiempo Real</NavLink>
                <NavLink href="/historial-reportes">Historial y Reportes</NavLink>
                <NavLink href="/ciencia-ciudadana">Ciencia Ciudadana</NavLink>
                <NavLink href="/sobre-proyecto">Sobre el Proyecto</NavLink>
                <NavLink href="/contacto">Contacto</NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Ver notificaciones</span>
                <Bell className="h-6 w-6" />
              </button>

              <div className="ml-3 relative">
                <div>
                  <button
                    onClick={toggleUserMenu}
                    className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Abrir menú de usuario</span>
                    <User className="h-8 w-8 rounded-full" />
                  </button>
                </div>
                {isUserMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    {isLoggedIn ? (
                      <>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Tu Perfil</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Configuración</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Cerrar sesión</a>
                      </>
                    ) : (
                      <>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Iniciar sesión</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Registrarse</a>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/mapa-vertientes">Mapa de Vertientes</NavLink>
            <NavLink href="/datos-tiempo-real">Datos en Tiempo Real</NavLink>
            <NavLink href="/historial-reportes">Historial y Reportes</NavLink>
            <NavLink href="/ciencia-ciudadana">Ciencia Ciudadana</NavLink>
            <NavLink href="/sobre-proyecto">Sobre el Proyecto</NavLink>
            <NavLink href="/contacto">Contacto</NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <User className="h-10 w-10 rounded-full" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">
                  {isLoggedIn ? 'Nombre de Usuario' : 'Invitado'}
                </div>
                <div className="text-sm font-medium leading-none text-gray-400">
                  {isLoggedIn ? 'usuario@ejemplo.com' : 'Inicia sesión'}
                </div>
              </div>
              <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Ver notificaciones</span>
                <Bell className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              {isLoggedIn ? (
                <>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Tu Perfil</a>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Configuración</a>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Cerrar sesión</a>
                </>
              ) : (
                <>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Iniciar sesión</a>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Registrarse</a>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}