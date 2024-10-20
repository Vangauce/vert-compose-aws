'use client'

import { ChangePasswordAction } from '@/actions/changePasswordAction'
import { fieldApiError } from '@/lib/forms'
import { changePasswordFormSchema } from '@/lib/validation'
import FormHeader from '@frontend/ui/forms/FormHeader'
import SubmitField from '@frontend/ui/forms/SubmitField'
import TextField from '@frontend/ui/forms/TextField'
import SuccessMessage from '@frontend/ui/messages/SuccessMessage'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export type ChangePasswordFormSchema = z.infer<typeof changePasswordFormSchema>

type ChangePasswordProps = {
  onSubmitHandler: ChangePasswordAction
}

/**
 * Componente `ChangePasswordForm` que representa un formulario para cambiar la contraseña de una cuenta.
 * 
 * @param {ChangePasswordProps} props - Propiedades del componente.
 * @param {Function} props.onSubmitHandler - Función que maneja el envío del formulario.
 * 
 * @returns {React.FC} - Componente funcional de React.
 * 
 * @description
 * Este componente renderiza un formulario que permite a los usuarios cambiar su contraseña.
 * Utiliza `useForm` de `react-hook-form` con un esquema de validación de `zod`.
 * 
 * @example
 * ```tsx
 * <ChangePasswordForm onSubmitHandler={handlePasswordChange} />
 * ```
 * 
 * @component
 * 
 * @remarks
 * - Muestra un mensaje de éxito si la contraseña se cambia correctamente.
 * - Maneja errores de campo y los muestra en el formulario.
 * - Resetea el formulario después de un cambio de contraseña exitoso.
 * 
 * @todo
 * - Mejorar la validación de contraseñas.
 * - Añadir más estilos al formulario.
 */
const ChangePaswordForm: React.FC<ChangePasswordProps> = ({
  onSubmitHandler
}) => {
  const [success, setSuccess] = useState<boolean>(false)

  const { formState, handleSubmit, register, reset, setError } =
    useForm<ChangePasswordFormSchema>({
      resolver: zodResolver(changePasswordFormSchema)
    })

  return (
    <>
      <FormHeader
        title="Set new account password"
        description="Change sign in access password"
      />

      {success && (
        <SuccessMessage>Password has been successfully changed</SuccessMessage>
      )}

      <form
        method="post"
        onSubmit={handleSubmit(async (data) => {
          const res = await onSubmitHandler(data)

          if (res !== true && typeof res !== 'boolean') {
            setSuccess(false)
            fieldApiError('password', 'password', res, setError)
            fieldApiError('password_new', 'passwordNew', res, setError)
            fieldApiError('password_retype', 'passwordRetype', res, setError)
          } else {
            reset()
            setSuccess(true)
          }
        })}
      >
        <TextField
          type="text"
          register={register('password')}
          label="Current password"
          formState={formState}
        />

        <TextField
          type="text"
          register={register('passwordNew')}
          label="New password"
          formState={formState}
        />

        <TextField
          type="text"
          register={register('passwordRetype')}
          label="Retype password"
          formState={formState}
        />

        <SubmitField isLoading={formState.isLoading}>
          Change password
        </SubmitField>
      </form>
    </>
  )
}

export default ChangePaswordForm
