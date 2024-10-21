'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, ChevronDown, User } from 'lucide-react';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

type DropdownProps = {
  title: string;
  items: { label: string; href: string }[];
};

type NavbarProps = {
  userRole: 'visitor' | 'user' | 'admin';
};

const NavLink = ({ href, children }: NavLinkProps) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link href={href} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
      {children}
    </Link>
  </motion.div>
);

const Dropdown = ({ title, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
        {title}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
          >
            {items.map((item, index) => (
              <Link key={index} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Navbar({ userRole }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  const acercaDeItems = [
    { label: 'Sobre el proyecto', href: '/sobre-proyecto' },
    { label: 'Objetivos de sostenibilidad', href: '/objetivos' },
    { label: 'Ciencia ciudadana', href: '/ciencia-ciudadana' },
  ];

  const contribuirItems = [
    { label: 'Ciencia ciudadana', href: '/ciencia-ciudadana' },
    { label: 'Donaciones', href: '/donaciones' },
    { label: 'Sugerencias', href: '/sugerencias' },
  ];

  const userItems = [
    { label: 'Perfil', href: '/perfil' },
    { label: 'Mi comunidad', href: '/mi-comunidad' },
    { label: 'Mis contribuciones', href: '/mis-contribuciones' },
    { label: 'Editar perfil', href: '/configuracion' },
    { label: 'Cerrar sesión', href: '/logout' },
  ];

  const adminItems = [
    { label: 'Gestión de usuarios', href: '/admin/usuarios' },
    { label: 'Mi comunidad', href: '/admin/comunidad' },
    { label: 'Vertientes', href: '/admin/vertientes' },
    { label: 'Dispositivos', href: '/admin/dispositivos' },
  ];

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src="images/Logo_vertientesSVG.svg" alt="Logo" width={32} height={32} />
            </div>
          </div>
          <div className="flex items-center justify-end flex-1">
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <NavLink href="/">Inicio</NavLink>
                <Dropdown title="Acerca de" items={acercaDeItems} />
                <Dropdown title="Contribuir" items={contribuirItems} />
                {(userRole === 'user' || userRole === 'admin') && <NavLink href="/monitor">Monitor</NavLink>}
                {userRole === 'admin' && <Dropdown title="Panel de administración" items={adminItems} />}
              </div>
            </div>
            <div className="hidden md:block ml-4">
              <div className="flex items-center">
                {(userRole === 'user' || userRole === 'admin') && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">Ver notificaciones</span>
                    <Bell className="h-6 w-6" />
                  </motion.button>
                )}
                <div className="ml-3 relative">
                  <div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={toggleUserMenu}
                      className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Abrir menú de usuario</span>
                      <User className="h-8 w-8 rounded-full" />
                    </motion.button>
                  </div>
                  <AnimatePresence>
                    {isUserMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        {userRole === 'visitor' ? (
                          <>
                            <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                              Iniciar sesión
                            </a>
                            <a href="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                              Registrarse
                            </a>
                          </>
                        ) : (
                          userItems.map((item, index) => (
                            <a key={index} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                              {item.label}
                            </a>
                          ))
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMobileMenu}
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Abrir menú principal</span>
                {isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink href="/">Inicio</NavLink>
              <Dropdown title="Acerca de" items={acercaDeItems} />
              <Dropdown title="Contribuir" items={contribuirItems} />
              {(userRole === 'user' || userRole === 'admin') && <NavLink href="/monitor">Monitor</NavLink>}
              {userRole === 'admin' && <Dropdown title="Panel de administración" items={adminItems} />}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <User className="h-10 w-10 rounded-full" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">{userRole !== 'visitor' ? 'Nombre de Usuario' : 'Invitado'}</div>
                  <div className="text-sm font-medium leading-none text-gray-400">{userRole !== 'visitor' ? 'usuario@ejemplo.com' : 'Inicia sesión'}</div>
                </div>
                {(userRole === 'user' || userRole === 'admin') && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">Ver notificaciones</span>
                    <Bell className="h-6 w-6" />
                  </motion.button>
                )}
              </div>
              <div className="mt-3 px-2 space-y-1">
                {userRole === 'visitor' ? (
                  <>
                    <a href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
                      Iniciar sesión
                    </a>
                    <a href="/register" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
                      Registrarse
                    </a>
                  </>
                ) : (
                  userItems.map((item, index) => (
                    <a key={index} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
                      {item.label}
                    </a>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}