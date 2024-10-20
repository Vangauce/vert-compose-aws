import LoginForm from '@/components/forms/LoginForm'
import { Metadata } from 'next'

/**
 * @fileoverview Este archivo define la metadata para la página de inicio de sesión.
 * 
 * @module /app/apps/web/src/app/(auth)/login/page
 */

/**
 * Metadata para la página de inicio de sesión.
 * 
 * @constant
 * @type {Metadata}
 * @property {string} title - El título de la página de inicio de sesión.
 */
export const metadata: Metadata = {
  title: 'Login - AquaCircuit'
}

const Login = async () => {
  return <LoginForm />
}

export default Login
