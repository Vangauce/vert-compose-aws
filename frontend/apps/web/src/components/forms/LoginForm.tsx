'use client'

import { signIn } from 'next-auth/react'
import TextField from '@frontend/ui/forms/TextField'
import SubmitField from '@frontend/ui/forms/SubmitField'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginFormSchema } from '@/lib/validation'
import { useSearchParams } from 'next/navigation'
import FormHeader from '@frontend/ui/forms/FormHeader'
import FormFooter from '@frontend/ui/forms/FormFooter'
import ErrorMessage from '@frontend/ui/messages/ErrorMessage'

type LoginFormSchema = z.infer<typeof loginFormSchema>

/**
 * Componente `LoginForm` que representa un formulario de inicio de sesión.
 * Utiliza `react-hook-form` para el manejo de formularios y validación con `zod`.
 * 
 * @returns {React.FC} El componente de formulario de inicio de sesión.
 * 
 * @remarks
 * - El formulario incluye campos para el nombre de usuario y la contraseña.
 * - Utiliza `signIn` de `next-auth` para manejar la autenticación.
 * - Muestra un mensaje de error si hay un error de inicio de sesión con credenciales.
 * 
 * @component
 * 
 * @example
 * ```tsx
 * <LoginForm />
 * ```
 * 
 * @dependencies
 * - `useSearchParams` para obtener los parámetros de búsqueda de la URL.
 * - `useForm` de `react-hook-form` para manejar el estado del formulario y la validación.
 * - `zodResolver` para integrar `zod` con `react-hook-form`.
 * - `signIn` de `next-auth` para manejar la autenticación.
 * 
 * @see {@link https://react-hook-form.com/} para más información sobre `react-hook-form`.
 * @see {@link https://github.com/colinhacks/zod} para más información sobre `zod`.
 * @see {@link https://next-auth.js.org/getting-started/introduction} para más información sobre `next-auth`.
 */
const LoginForm: React.FC = () => {
  const search = useSearchParams()

  const { register, handleSubmit, formState } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema)
  })

  const onSubmitHandler = handleSubmit((data) => {
    signIn('credentials', {
      username: data.username,
      password: data.password,
      callbackUrl: '/'
    })
  })

  return (
    <>
      <FormHeader
        title="Welcome back to AquaCircuit"
        description="Get an access to internal application"
      />

      {search.has('error') && search.get('error') === 'CredentialsSignin' && (
        <ErrorMessage>Provided account does not exists.</ErrorMessage>
      )}

      <form
        method="post"
        action="/api/auth/callback/credentials"
        onSubmit={onSubmitHandler}
      >
        <TextField
          type="text"
          register={register('username')}
          formState={formState}
          label="Username"
          placeholder="Email address or username"
        />

        <TextField
          type="password"
          register={register('password', { required: true })}
          formState={formState}
          label="Password"
          placeholder="Enter your password"
        />

        <SubmitField>Sign in</SubmitField>
      </form>

      <FormFooter
        cta="Don't have an account?"
        link="/register"
        title="Sign up"
      />
    </>
  )
}

export default LoginForm
