'use client'

import { RegisterFormSchema, RegisterAction } from '@/actions/registerAction'
import { fieldApiError } from '@/lib/forms'
import { registerFormSchema } from '@/lib/validation'
import SubmitField from '@frontend/ui/forms/SubmitField'
import TextField from '@frontend/ui/forms/TextField'
import FormHeader from '@frontend/ui/forms/FormHeader'
import FormFooter from '@frontend/ui/forms/FormFooter'
import { zodResolver } from '@hookform/resolvers/zod' // Importa zodResolver para integrar validaciones de Zod con React Hook Form
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'

/**
 * Componente de formulario de registro.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {RegisterAction} props.onSubmitHandler - Función que maneja el evento de envío del formulario.
 *
 * @returns {JSX.Element} El formulario de registro.
 *
 * Este componente renderiza un formulario para crear una nueva cuenta en AquaCircuit.
 * Utiliza `useForm` de `react-hook-form` con un validador de esquema Zod.
 * 
 * El formulario incluye campos para nombre de usuario, contraseña y verificación de contraseña.
 * Al enviar el formulario, se llama a `onSubmitHandler` con los datos del formulario.
 * Si la respuesta es `true`, se inicia sesión automáticamente.
 * Si la respuesta no es un booleano, se muestran errores en los campos correspondientes.
 *
 * @example
 * <RegisterForm onSubmitHandler={handleRegister} />
 */
const RegisterForm: React.FC<{
  onSubmitHandler: RegisterAction
}> = ({ onSubmitHandler }) => {
  const { formState, handleSubmit, register, setError } =
    useForm<RegisterFormSchema>({
      resolver: zodResolver(registerFormSchema)
    })

  return (
    <>
      <FormHeader
        title="Create new account in AquaCircuit"
        description="Get an access to internal application"
      />

      <form
        method="post"
        onSubmit={handleSubmit(async (data) => {
          const res = await onSubmitHandler(data)

          if (res === true) {
            signIn()
          } else if (typeof res !== 'boolean') {
            fieldApiError('username', 'username', res, setError)
            fieldApiError('password', 'password', res, setError)
            fieldApiError('password_retype', 'passwordRetype', res, setError)
          }
        })}
      >
        <TextField
          type="text"
          register={register('username')}
          formState={formState}
          label="Username"
          placeholder="Unique username or email"
        />

        <TextField
          type="password"
          register={register('password')}
          formState={formState}
          label="Password"
          placeholder="Your new password"
        />

        <TextField
          type="password"
          register={register('passwordRetype')}
          formState={formState}
          label="Retype password"
          placeholder="Verify password"
        />

        <SubmitField>Sign up</SubmitField>
      </form>

      <FormFooter
        cta="Already have an account?"
        link="/login"
        title="Sign in"
      />
    </>
  )
}

export default RegisterForm
